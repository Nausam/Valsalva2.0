import { Metadata } from "next";
import React from "react";
import ProductForm from "./ProductForm";

export const metadata: Metadata = {
  title: "Create | Valsalva",
};

const CreateProduct = () => {
  return (
    <>
      <section>
        <h3 className="container font-bold text-3xl text-center sm:text-left">
          Create Product
        </h3>
      </section>

      <div className="wrapper my-8">
        <ProductForm type="Create" />
      </div>
    </>
  );
};

export default CreateProduct;
