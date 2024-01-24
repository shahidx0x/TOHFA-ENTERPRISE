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
import { getApiUrl } from "@/helpers/getApiUrl";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, {
    message: "Password must be at least 3 characters.",
  }),
});

export default function LoginPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: any) => {
    console.log(values);
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen">
      <Card className="flex">
        <Card className="w-96 p-5 rounded-r-none">
          <CardHeader>
            <CardTitle>Admin Panel</CardTitle>
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
