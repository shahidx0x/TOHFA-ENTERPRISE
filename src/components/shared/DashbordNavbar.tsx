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
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { initialStateUser, setUser } from "@/lib/features/users/userSlice";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Input } from "../ui/input";
const DashbordNavbar = () => {
  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.loggedUser);
  const handleLogout = () => {
    dispatch(setUser(initialStateUser));
    setIsLogout(false);
  };
  return (
    <>
      <div className="w-full border-b flex justify-between p-5">
        <div>
          <h2 className="flex gap-2 justify-center items-center">
            <Image
              src="https://media.discordapp.net/attachments/1195600658729025627/1198523321051004948/admin-ajax.png?ex=65bf36d3&is=65acc1d3&hm=d1882783bb541fbb2418ea58d7cacd30bd99624ea2c8d0af0e229cbdc0bc9af8&=&format=webp&quality=lossless"
              alt="brand-image"
              width={100}
              height={10}
            />
          </h2>
        </div>

        <div className="flex justify-center items-center gap-10">
          <Input
            className="w-96"
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
