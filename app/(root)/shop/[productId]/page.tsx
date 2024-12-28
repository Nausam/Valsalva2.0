"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProductById } from "@/lib/actions/product.actions";
import Image from "next/legacy/image";
import { Fin } from "@/types";
import CheckoutButton from "@/components/product/CheckoutButton";
import { InView } from "@/components/ui/in-view";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Fin>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId || typeof productId !== "string") return;
      try {
        setLoading(true);
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div className="container mt-20">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="container mt-20">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <>
      <InView
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <section className="flex justify-center md:mt-16 mt-20">
          <div className="container grid grid-cols-1 lg:grid-cols-2  2xl:max-w-7xl sm:py-10 items-center">
            <Image
              src={product.imageUrl}
              alt="hero image"
              width={1000}
              height={650}
              className="rounded-sm"
            />

            <div className="flex w-full flex-col gap-8 p-5 md:p-10">
              <div className="flex flex-col gap-6">
                <h2 className="font-bold text-4xl"> {product.title} </h2>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex gap-3">
                    {product.isAvailable === true ? (
                      <p className="font-medium bg-gray-500/10 rounded-sm px-5 py-2">{`$${product.price}`}</p>
                    ) : (
                      <p className="font-medium rounded-sm bg-gray-500/10 px-4 py-2.5">
                        Out of stock
                      </p>
                    )}

                    <p className="font-medium rounded-sm bg-gray-500/10 px-4 py-2.5 text-grey-500">
                      {product.categoryId.name}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium text-gray-600">Description</p>

                <p className="p-medium-16 lg:p-medium-18 text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container w-full">
          <div className="flex max-w-2xl">
            <div className="mt-5">
              {product.isAvailable === true && (
                <CheckoutButton product={product} />
              )}
            </div>
          </div>
        </section>
      </InView>
    </>
  );
};

export default ProductDetailsPage;
