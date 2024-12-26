"use server";

import { createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { ID } from "node-appwrite";
import { parseStringify } from "@/lib/utils";

type CreateFinParams = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  isAvailable: boolean;
  footpocketColor: string;
  categoryId: string;
};

export const createFin = async ({
  title,
  description,
  imageUrl,
  price,
  isAvailable,
  footpocketColor,
  categoryId,
}: CreateFinParams) => {
  try {
    const { databases } = await createAdminClient();

    const documentId = ID.unique();

    const fin = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.finsCollectionId,
      documentId,
      {
        id: documentId,
        title,
        description,
        imageUrl,
        price,
        isAvailable,
        footpocketColor,
        categoryId,
        // createdAt: new Date().toISOString(),
      }
    );

    return parseStringify(fin);
  } catch (error) {
    console.error("Failed to create fin:", error);
    throw new Error("Failed to create fin");
  }
};

export const uploadProductImage = async (file: File): Promise<string> => {
  try {
    const { storage } = await createAdminClient();

    const uploadedFile = await storage.createFile(
      appwriteConfig.bucketId,
      "unique()",
      file
    );

    return `https://cloud.appwrite.io/v1/storage/buckets/${appwriteConfig.bucketId}/files/${uploadedFile.$id}/view`;
  } catch (error) {
    console.error("File upload failed:", error);
    throw new Error("Failed to upload file");
  }
};
