/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  description,
  category,
}) => {
  console.log("Rendering image URL:", imageUrl);

  return (
    <div className="relative flex w-full flex-col">
      <div className="flex flex-col p-5 gap-5">
        <Link href={`/shop/${id}`} className="">
          <Image
            src={imageUrl}
            width={300}
            height={100}
            alt="product image"
            className="flex-1 rounded-sm hover:scale-105 hover:shadow-2xl transition-all duration-300"
          />
        </Link>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="absolute left-2 top-2 flex flex-col gap-4 rounded-sm bg-white dark:bg-[#252525] p-2 shadow-sm transition-all">
            <Link href={`/shop/${id}/update`}>
              <Image
                src="/assets/icons/edit.svg"
                alt="edit"
                width={20}
                height={20}
              />
            </Link>
          </div>
          <div className="flex w-full flex-col items-start gap-3">
            <Link href={`/shop/${id}`}>
              <p className="font-medium text-black ">{name}</p>
            </Link>

            <div className="flex-center">
              <div className="">
                <div className="flex gap-2">
                  <span className="font-medium w-min rounded-sm bg-gray-500/10 px-4 py-1">
                    {`$${price.toFixed(2)}`}
                  </span>

                  <p className="font-medium w-min rounded-sm bg-gray-500/10 px-4 text-gray-500 flex-center ">
                    {category}
                  </p>
                </div>
              </div>

              {/* <p className="mt-8 w-60 text-gray-400 flex-center">
              {product.description}
            </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
