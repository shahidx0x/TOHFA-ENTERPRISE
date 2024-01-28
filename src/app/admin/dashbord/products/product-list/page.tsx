"use client";
import MyDashbordHeader from "@/components/shared/MyDashbordHeader";
import React from "react";
import { ProductDataTable } from "./ProductDataTable";

const page = () => {
  return (
    <div>
      <MyDashbordHeader
        separator=">"
        title={"Product List (100)"}
        description={"Manage your products"}
        content={[
          {
            name: "Home",
            link: "/dashboard",
            isActive: false,
          },
          {
            name: "Products",
            link: "/dashboard/products",
            isActive: true,
          },
        ]}
      />
      <ProductDataTable />
    </div>
  );
};

export default page;
