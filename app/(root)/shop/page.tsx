import ProductCard from "@/components/product/ProductCard";
import { InView } from "@/components/ui/in-view";
import { getAllProducts } from "@/lib/actions/product.actions";
import { Models } from "node-appwrite";
import React from "react";

const AllProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="container mt-20 p-5">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: Models.Document) => {
          return (
            <InView
              key={product.$id}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewOptions={{ margin: "0px 0px -350px 0px" }}
            >
              <ProductCard
                id={product.$id}
                key={product.name}
                name={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
                description={product.description}
                category={product.categoryId.name}
              />
            </InView>
          );
        })}
      </div>
    </div>
  );
};

export default AllProductsPage;
