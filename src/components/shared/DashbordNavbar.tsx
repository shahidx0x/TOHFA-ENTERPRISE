"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { initialStateUser, setUser } from "@/lib/features/users/userSlice";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Input } from "../ui/input";
import { DashIcon, DashboardIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  ArrowDown,
  ArrowRight,
  Box,
  Boxes,
  LayoutDashboard,
  MenuIcon,
  PlusCircle,
  User2,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { usePathname, useRouter } from "next/navigation";
import { removeLocalStorage } from "@/utils/localStorage";
import { removeUserInfo } from "@/service/auth.service";
const DashbordNavbar = () => {
  const [isLogout, setIsLogout] = useState(false);
  const dispatch = useAppDispatch();
  const [menu, setMenu] = useState(false);
  const currentRoute = usePathname();
  const router = useRouter();

  const user = useAppSelector((state) => state.loggedUser);
  const handleLogout = () => {
    removeUserInfo();
    dispatch(setUser(initialStateUser));
    setIsLogout(false);
    router.push("/");
  };
  return (
    <>
      <div className="w-full border-b flex justify-between p-2">
        <div>
          <div className="flex items-center  gap-5 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="lg:hidden flex" variant="outline">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>Admin Panel</SheetTitle>
                </SheetHeader>
                <div className="flex-1">
                  <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li
                      className={
                        currentRoute === "/admin/dashbord/status"
                          ? `rounded-md  bg-gray-200 text-black `
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
                          ? `rounded-md  bg-gray-200 text-black`
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
                        <p
                          className={`font-bold text-md flex justify-between gap-16 cursor-pointer`}
                        >
                          Manage Products
                          <span>{!menu ? <ArrowRight /> : <ArrowDown />}</span>
                        </p>
                      </div>
                    </li>
                    <div
                      className={
                        !menu
                          ? " hidden"
                          : "border bg-gray-200 rounded-lg pt-2 pb-4 space-y-1 px-5   "
                      }
                    >
                      <ul className="px-4 pt-2 pb-4 space-y-1 text-sm">
                        <li
                          className={
                            currentRoute ===
                            "/admin/dashbord/products/product-list"
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
                            currentRoute ===
                            "/admin/dashbord/products/product-add"
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
                            <p className={`font-bold text-sm`}>
                              Add New Product
                            </p>
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
                        <p
                          className={`font-bold text-md flex justify-between gap-16`}
                        >
                          Manage Orders
                          <span>{!menu ? <ArrowRight /> : <ArrowDown />}</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
            <span className="font-bold">TOHFA Enterprise</span>
          </div>

          <p className="hidden lg:flex gap-2 justify-center items-center w-full h-full">
            <DashboardIcon className="h-6 w-6" />{" "}
            <span className="font-bold">TOHFA Enterprise</span>
          </p>
        </div>

        <div className=" lg:flex justify-center items-center gap-10">
          <Input
            className="w-96 hidden lg:flex"
            type="email"
            id="email"
            placeholder="Search"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="hover:shadow-lg hover:animate-pulse">
                <AvatarImage
                  className=""
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Carts</DropdownMenuItem>
                <DropdownMenuItem>History</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsLogout(true)}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <AlertDialog open={isLogout}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will logging you out from the
              website.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsLogout(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => handleLogout()}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DashbordNavbar;
