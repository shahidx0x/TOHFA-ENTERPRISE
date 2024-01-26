import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import MyBreadcrumb from "./Breadcumb";

const MyDashbordHeader = ({ separator, title, content, description }: any) => {
  return (
    <div>
      <Card className="w-full p-5">
        <MyBreadcrumb separator={separator} content={content} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Card>
    </div>
  );
};

export default MyDashbordHeader;
