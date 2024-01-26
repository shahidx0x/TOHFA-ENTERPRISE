"use client";
import MyDashbordHeader from "@/components/shared/MyDashbordHeader";
import React from "react";
import { UserDataTable } from "./UserDataTable";

const page = () => {
  return (
    <div className="flex flex-col flex-wrap gap-5">
      <MyDashbordHeader
        separator=">"
        title="Users(100)"
        description={"Manage users of your application"}
        content={[
          {
            name: "Home",
            link: "/dashboard",
            isActive: false,
          },
          {
            name: "users",
            link: "/dashboard/users",
            isActive: true,
          },
        ]}
      />
      <UserDataTable />
    </div>
  );
};

export default page;
