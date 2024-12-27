/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  createFin,
  updateProduct,
  uploadProductImage,
} from "@/lib/actions/product.actions";
import Image from "next/image";
import { productFormSchema } from "@/lib/validations";
import { Fin } from "@/types";
import { productDefaultValues } from "@/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Dropdown from "./Dropdown";
import { FileUploader } from "./FileUploader";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

type ProductFormProps = {
  type: "Create" | "Update";
  product?: Fin;
  productId?: string;
};

const ProductForm = ({ type, product, productId }: ProductFormProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(
    product?.imageUrl || null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const initialValues =
    product && type === "Update"
      ? {
          ...product,
          categoryId:
            typeof product.categoryId === "object"
              ? product.categoryId._id
              : product.categoryId, // Ensure categoryId is a string
        }
      : productDefaultValues;

  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: initialValues,
  });

  const handleSubmit = async (values: z.infer<typeof productFormSchema>) => {
    setIsSubmitting(true);

    // Step 1: Upload the file

    if (!file) throw new Error("Please upload an image");
    const imageUrl = await uploadProductImage(file);
    if (type === "Create") {
      try {
        // Step 2: Create the product
        const newProduct = await createFin({
          title: values.title,
          description: values.description,
          imageUrl,
          price: parseFloat(String(values.price)),
          isAvailable: values.isAvailable,
          footpocketColor: values.footpocketColor,
          categoryId: values.categoryId,
        });
        if (newProduct) {
          form.reset();
          router.push(`/product/${newProduct.id}`);
        }

        alert("Product created successfully!");
      } catch (error) {
        console.error("Failed to create product:", error);
        alert("Failed to create product. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }

    if (type === "Update") {
      if (!productId) {
        router.back();
        return;
      }

      try {
        const updatedProduct = await updateProduct({
          ...values,
          imageUrl: imageUrl,
          id: productId,
          path: `/product/${productId}}`,
        });
        if (updatedProduct) {
          form.reset();
          router.push(`/product/${updatedProduct._id}`);
        }
        toast({
          title: `${values.title} updated successfully`,
        });
      } catch (error) {
        toast({
          title: `Error updating ${values.title}`,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          {/* Product Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Product title"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full dark:bg-[#191919] rounded-full text-black">
                <FormControl>
                  <Dropdown
                    onChangeHandler={(value) => field.onChange(value)}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row ">
          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="Description"
                    {...field}
                    className="textarea rounded-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Upload */}
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFile={setFile}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[55px] w-full overflow-hidden rounded-sm bg-grey-50 dark:bg-[#191919] px-4 py-2">
                    <Image
                      src="/assets/icons/dollar.svg"
                      alt="price"
                      width={24}
                      height={24}
                    />
                    <Input
                      type="number"
                      placeholder="Price"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      className="p-regular-16 border-0 bg-grey-50 dark:bg-[#191919] outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Foot Pocket Color */}
          <FormField
            control={form.control}
            name="footpocketColor"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Foot Pocket Color"
                    {...field}
                    value={field.value || ""}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Availability Toggle */}
        <FormField
          control={form.control}
          name="isAvailable"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-sm bg-grey-50 dark:bg-[#191919]  p-3 shadow-sm max-w-sm">
              <div className="space-y-0.5">
                <FormLabel>Is product available?</FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="flex w-full justify-end">
          <Button
            type="submit"
            size="lg"
            disabled={form.formState.isSubmitting}
            className="button bg-black border border-black hover:bg-transparent text-white hover:text-black dark:bg-white dark:border-black dark:hover:border-white dark:text-black dark:hover:bg-transparent dark:hover:text-white  font-bold w-full sm:w-fit transition-all duration-300 ease-in-out shadow-lg"
          >
            {form.formState.isSubmitting ? "Submitting..." : `${type} Product `}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
