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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import {
  useUserLoginMutation,
  useUserSignupMutation,
} from "@/lib/features/api/authApi";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { decodeJWT } from "@/helpers/decodeJWT";
import { setUser } from "@/lib/features/users/userSlice";
const formSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    address: z.string(),
    phoneNumber: z.string(),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password must be same.",
    path: ["confirmPassword"],
  });

export default function SignUpPage() {
  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userSignup] = useUserSignupMutation();
  const [error, setError] = React.useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: any) => {
    console.log(values);
    const { confirmPassword, ...rest } = values;
    const result = await userSignup({ ...rest });
    if (result && "data" in result && result.data.statusCode === 201) {
      toast({
        variant: "default",
        title: "Signup successful!",
        description: "User registration successfull",
      });
      const user = decodeJWT(result.data.data.accessToken);
      const toDispatch = {
        id: user.userId,
        email: user.email,
        role: user.role,
      };
      dispatch(setUser(toDispatch));
      router.push("/");
    } else if (result && "error" in result) {
      setError(result);
      toast({
        variant: "destructive",
        title: "Registration failed!",
        description: `${error.error.data.message}`,
      });
    }
  };
  return (
    <div className="flex lg:flex-row justify-center items-center h-screen -mt-10 ">
      <Card className="flex">
        <Card className="w-96 p-5 rounded-r-none">
          <CardHeader>
            <CardTitle>Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="enter your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="enter your address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="enter your contact number"
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
                          placeholder="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="confirm password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-3" type="submit">
                  Create Your Account
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <Image
          className="hidden  lg:flex rounded-r-md shadow-lg border-1"
          src="https://img.freepik.com/free-vector/color-doodle-food-burger-pattern_1409-3918.jpg?w=1380&t=st=1703802411~exp=1703803011~hmac=57199d01dd3719bc3fdab7709f360e8fa27dabb71c2315b337d9e0bbc9f0b8f3"
          alt="food-img"
          width={900}
          height={800}
        />
      </Card>
    </div>
  );
}
