"use client";
import MyDashbordHeader from "@/components/shared/MyDashbordHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <MyDashbordHeader
        separator=">"
        title={"Add Product"}
        description={"Add new product to your store"}
        content={[
          {
            name: "Home",
            link: "/dashboard",
            isActive: false,
          },
          {
            name: "Add Product",
            link: "/dashboard/product-add",
            isActive: true,
          },
        ]}
      />
    </div>
  );
};

export default page;
