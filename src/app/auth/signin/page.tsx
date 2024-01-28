"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import { useUserLoginMutation } from "@/lib/features/api/authApi";
import { ToastAction } from "@/components/ui/toast";
import { redirect, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { decodeJWT } from "@/helpers/decodeJWT";
import { setUser } from "@/lib/features/users/userSlice";
import Link from "next/link";
import { getUserInfo, storeUserInfo } from "@/service/auth.service";
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, {
    message: "Password must be at least 3 characters.",
  }),
});

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userLogin] = useUserLoginMutation();
  const user = useAppSelector((state) => state.loggedUser);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: any) => {
   
    try {
      const result = await userLogin({ ...values });
      if (result && "data" in result) {
        toast({
          variant: "default",
          title: "Success!",
          description: "User Logged in successfully.",
        });
        storeUserInfo({ accessToken: result?.data?.accessToken });
        const user = getUserInfo();
        const toDispatch = {
          id: user?.userId,
          email: user?.email,
          role: user?.role,
        };
        dispatch(setUser(toDispatch));
        user?.role === "admin"
          ? router.push("/admin/dashbord/status")
          : router.push("/");
      } else if (result && "error" in result) {
        toast({
          variant: "destructive",
          title: "Failed!",
          //@ts-ignore
          description: `${result?.error?.message as string}`,
        });
      }
    } catch (error) {
      console.log("Login Error", error);
    }

 
  };
  return (
    <div className="flex lg:flex-row justify-center items-center h-screen -mt-28 ">
      <Card className="flex">
        <Card className="w-96 p-5 rounded-r-none">
          <CardHeader>
            <CardTitle>Please Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-3" type="submit">
                  Login
                </Button>
              </form>
              <FormDescription className="mt-10">
                Unregistered User ?{" "}
                <Link href="/auth/signup">
                  <span className="text-blue-600 underline">Signup here</span>
                </Link>
              </FormDescription>
            </Form>
          </CardContent>
        </Card>
        <Image
          className="rounded-r-md shadow-lg border-1"
          src="https://img.freepik.com/free-vector/color-doodle-food-burger-pattern_1409-3918.jpg?w=1380&t=st=1703802411~exp=1703803011~hmac=57199d01dd3719bc3fdab7709f360e8fa27dabb71c2315b337d9e0bbc9f0b8f3"
          alt="food-img"
          width={600}
          height={600}
        />
      </Card>
    </div>
  );
}
