import { Card } from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 flex-wrap">
        <Card className="w-[23rem] h-48 border"></Card>
        <Card className="w-[23rem] h-48 border"></Card>
        <Card className="w-[23rem] h-48 border"></Card>
        <Card className="w-[23rem] h-48 border"></Card>
      </div>
    </div>
  );
};

export default page;
