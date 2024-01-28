"use client";
import React from "react";
import Banner from "@/components/Banner";
import Productgrid from "@/components/ProductsGrid";
const page = () => {

  return (
    <div className="flex flex-col">
      <Banner />
      <Productgrid />
    </div>
  );
};
export default page;
