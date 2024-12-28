import React from "react";
import { Metadata } from "next";

import { getProductById } from "@/lib/actions/product.actions";
import ProductForm from "@/components/product/ProductForm";

type UpdateProductProps = {
  params: {
    productId: string;
  };
};

const UpdateProduct = async ({ params: { productId } }: UpdateProductProps) => {
  const product = await getProductById(productId);

  return (
    <>
      <section className="container mt-20">
        <h3 className="font-bold text-3xl text-center sm:text-left">
          Update Product
        </h3>
      </section>

      <div className="container my-8">
        <ProductForm type="Update" product={product} productId={productId} />
      </div>
    </>
  );
};

export default UpdateProduct;
