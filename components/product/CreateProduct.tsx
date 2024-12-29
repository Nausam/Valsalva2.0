import { Metadata } from "next";
import React from "react";
import ProductForm from "./ProductForm";

export const metadata: Metadata = {
  title: "Create | Valsalva",
};

const CreateProduct = () => {
  return (
    <>
      <div className="my-8">
        <ProductForm type="Create" />
      </div>
    </>
  );
};

export default CreateProduct;
