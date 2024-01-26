"use client";
import MyBreadcrumb from "@/components/shared/Breadcumb";
import MyDashbordCard from "@/components/shared/MyDashbordCard";
import MyDashbordHeader from "@/components/shared/MyDashbordHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: "Feb",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: "Mar",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: "Apr",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: "May",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: "Jun",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: "Jul",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: "Aug",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: "Sep",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: "Oct",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: "Nov",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: "Dec",
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
];

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <MyDashbordHeader
        separator={">"}
        title={"Hi, Welcome back 👋"}
        content={[
          {
            name: "Home",
            link: "/dashboard",
            isActive: false,
          },
          {
            name: "status",
            link: "/dashboard/status",
            isActive: true,
          },
        ]}
      />
      <div className="flex gap-5 flex-wrap justify-center items-center">
        <MyDashbordCard
          title={"Total Sale"}
          count={204214}
          description={"20.14% sales this month"}
        />
        <MyDashbordCard
          title={"Total Sale"}
          count={204214}
          description={"20.14% sales this month"}
        />
        <MyDashbordCard
          title={"Total Sale"}
          count={204214}
          description={"20.14% sales this month"}
        />
        <MyDashbordCard
          title={"Total Sale"}
          count={204214}
          description={"20.14% sales this month"}
        />
      </div>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] h-[30rem] border rounded-md p-5 shadow-sm">
          <h2 className="font-bold">Overview</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis style={{ fontSize: "9px" }} dataKey="name" />
              <Bar dataKey="uv" fill="#000000" />
              <YAxis style={{ fontSize: "9px" }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full lg:w-[40%] border rounded-md shadow-sm p-5">
          <h2 className="font-bold">Recent Orders</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
