import { z } from "zod";

// Define the schema for the form data
export const productFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  categoryId: z.string().min(1, "Category is required"),
  price: z
    .number()
    .positive("Price must be greater than 0")
    .max(10000, "Price must be less than $10,000"),
  footpocketColor: z.string().min(1, "Foot pocket color is required"),
  isAvailable: z.boolean(),
  imageUrl: z.string().optional(),
});
