"use server";

import { createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { ID, Permission, Query, Role } from "node-appwrite";
import { constructFileUrl, parseStringify } from "@/lib/utils";
import { InputFile } from "node-appwrite/file";
import { UpdateProductParams } from "@/types";

type CreateFinParams = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  isAvailable: boolean;
  footpocketColor: string;
  categoryId: string;
};

// CREATE FINS
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

// UPLOAD PRODUCT IMAGE
export const uploadProductImage = async (file: File): Promise<string> => {
  const { storage } = await createAdminClient();
  try {
    const inputFile = InputFile.fromBuffer(file, file.name);
    // Define permissions
    const permissions = [Permission.read(Role.any())];

    const bucketFile = await storage.createFile(
      appwriteConfig.bucketId,
      ID.unique(),
      inputFile,
      permissions
    );

    const fileDocument = {
      name: bucketFile.name,
      url: constructFileUrl(bucketFile.$id),
      size: bucketFile.sizeOriginal,
      bucketFileId: bucketFile.$id,
    };

    return fileDocument.url;
  } catch (error) {
    console.error("File upload failed:", error);
    throw new Error("Failed to upload file");
  }
};

// GET ALL PRODUCTS
export const getAllProducts = async () => {
  try {
    const { databases } = await createAdminClient();

    const products = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.finsCollectionId
    );

    return parseStringify(products.documents);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products");
  }
};

// GET PRODUCT BY ID
export const getProductById = async (productId: string) => {
  try {
    const { databases } = await createAdminClient();

    // Fetch the product document by its ID
    const product = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.finsCollectionId,
      productId
    );

    return parseStringify(product);
  } catch (error) {
    console.error("Failed to fetch product by ID:", error);
    throw new Error("Failed to fetch product");
  }
};

// UPDATE PRODUCT
export const updateProduct = async ({
  id,
  title,
  description,
  imageUrl,
  price,
  isAvailable,
  footpocketColor,
  categoryId,
}: UpdateProductParams) => {
  try {
    const { databases } = await createAdminClient();

    const updatedProduct = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.finsCollectionId,
      id,
      {
        ...(title && { title }),
        ...(description && { description }),
        ...(imageUrl && { imageUrl }),
        ...(price && { price }),
        ...(typeof isAvailable === "boolean" && { isAvailable }),
        ...(footpocketColor && { footpocketColor }),
        ...(categoryId && { categoryId }),
      }
    );

    return parseStringify(updatedProduct);
  } catch (error) {
    console.error("Failed to update product:", error);
    throw new Error("Failed to update product");
  }
};

// GET RANDOM FINS
export const getRandomFins = async () => {
  try {
    const { databases } = await createAdminClient();

    // Fetch all fins to calculate the total number of documents
    const { total } = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.finsCollectionId,
      [Query.limit(1)] // Only fetch metadata to get the total count
    );

    if (total === 0) {
      throw new Error("No fins available.");
    }

    // Generate up to 6 unique random offsets
    const randomOffsets = new Set<number>();
    while (randomOffsets.size < Math.min(3, total)) {
      const randomOffset = Math.floor(Math.random() * total);
      randomOffsets.add(randomOffset);
    }

    // Fetch fins at the random offsets
    const randomFinsPromises = Array.from(randomOffsets).map((offset) =>
      databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.finsCollectionId,
        [Query.offset(offset), Query.limit(1)]
      )
    );

    const randomFinsResults = await Promise.all(randomFinsPromises);
    const randomFins = randomFinsResults.map((result) => result.documents[0]);

    return parseStringify(randomFins);
  } catch (error) {
    console.error("Failed to fetch random fins:", error);
    throw new Error("Failed to fetch random fins");
  }
};
