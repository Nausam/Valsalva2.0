"use server";

import { createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { ID } from "node-appwrite";

export const createCategory = async ({ name }: { name: string }) => {
  try {
    const { databases } = await createAdminClient();

    // Create a new category
    const category = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId,
      ID.unique(),
      { name }
    );

    return category;
  } catch (error) {
    console.error("Failed to create category:", error);
    throw new Error("Failed to create category");
  }
};

export const getAllCategories = async () => {
  try {
    const { databases } = await createAdminClient();

    // Get all categories
    const categories = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId
    );

    return categories.documents;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Failed to fetch categories");
  }
};
