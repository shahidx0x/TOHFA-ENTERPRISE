"use client"
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Image from "next/image";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(3, {
    message: "Password must be at least 3 characters.",
  }),
})
export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen">
      <Card className="flex">
        <Card className="w-96 p-5 rounded-r-none">
          <CardHeader>
            <CardTitle>Admin Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input type="email" placeholder="Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Password</Label>
                  <Input type="password"  placeholder="Password" />
                </div>
              </div>
              <Button className="mt-5 w-full">Login</Button>
            </form>
          </CardContent>
        </Card>
        <Image className="rounded-r-md shadow-lg border-1" src="https://img.freepik.com/free-vector/color-doodle-food-burger-pattern_1409-3918.jpg?w=1380&t=st=1703802411~exp=1703803011~hmac=57199d01dd3719bc3fdab7709f360e8fa27dabb71c2315b337d9e0bbc9f0b8f3" alt="food-img" width={ 600} height={600} />
      </Card>
    </div>
  );
}
