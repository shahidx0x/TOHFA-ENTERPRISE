"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { DashIcon, DashboardIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowBigDown,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Box,
  Boxes,
  LayoutDashboard,
  PlusCircle,
  User2,
  User2Icon,
} from "lucide-react";
import { Separator } from "../ui/separator";
export default function SideNavbar() {
  let menuArray = [true, false, false];
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(true);
  const currentRoute = usePathname();

  return (
    <div className="flex flex-col h-screen border-2  p-3 w-full bg-gray-50 text-gray-800">
      <div className="space-y-3">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li
              className={
                currentRoute === "/admin/dashbord/status"
                  ? `rounded-md  bg-gray-200 text-blue-500 `
                  : `rounded-md  hover:bg-gray-100 text-black`
              }
            >
              <Link
                rel="noopener noreferrer"
                href="/admin/dashbord/status"
                className="flex items-center p-3 space-x-3 rounded-md"
              >
                <LayoutDashboard />
                <p className={`font-bold text-md`}>Dashbord</p>
              </Link>
            </li>
            <li
              className={
                currentRoute === "/admin/dashbord/users"
                  ? `rounded-md  bg-gray-200 text-blue-500`
                  : `rounded-md  hover:bg-gray-100 text-black`
              }
            >
              <Link
                rel="noopener noreferrer"
                href="/admin/dashbord/users"
                className="flex items-center p-3 space-x-3 rounded-md"
              >
                <User2 />
                <p className={`font-bold text-md`}>Users</p>
              </Link>
            </li>
            <Separator />
            <Separator />
            <li
              onClick={() => setMenu((state) => !state)}
              className={`rounded-md  hover:bg-gray-100 text-black`}
            >
              <div
                rel="noopener noreferrer"
                className="flex items-center p-3 space-x-3 rounded-md"
              >
                <Box />
                <p className={`font-bold text-md flex justify-between gap-16`}>
                  Manage Products
                  <span>{!menu ? <ArrowRight /> : <ArrowDown />}</span>
                </p>
              </div>
            </li>
            <div
              className={
                !menu
                  ? " hidden"
                  : "border bg-gray-200 rounded-lg pt-2 pb-4 space-y-1 px-5 py-5  "
              }
            >
              <ul className="px-4 pt-2 pb-4 space-y-1 text-sm">
                <li
                  className={
                    currentRoute === "/admin/dashbord/products/product-list"
                      ? `rounded-md  bg-gray-500 text-gray-200`
                      : `rounded-md  hover:bg-gray-100 text-black`
                  }
                >
                  <Link
                    rel="noopener noreferrer"
                    href="/admin/dashbord/products/product-list"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <Boxes size={20} />
                    <p className={`font-bold text-sm`}>Product list</p>
                  </Link>
                </li>

                <li
                  className={
                    currentRoute === "/admin/dashbord/products/product-add"
                      ? `rounded-md  bg-gray-500 text-gray-200`
                      : `rounded-md  hover:bg-gray-100 text-black`
                  }
                >
                  <Link
                    rel="noopener noreferrer"
                    href="/admin/dashbord/products/product-add"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <PlusCircle size={20} />
                    <p className={`font-bold text-sm`}>Add New Product</p>
                  </Link>
                </li>
              </ul>
            </div>
            <li
              onClick={() => setMenu((state) => !state)}
              className={`rounded-md  hover:bg-gray-100 text-black`}
            >
              <div
                rel="noopener noreferrer"
                className="flex items-center p-3 space-x-3 rounded-md"
              >
                <Box />
                <p className={`font-bold text-md flex justify-between gap-16`}>
                  Manage Orders
                  <span>{!menu ? <ArrowRight /> : <ArrowDown />}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
