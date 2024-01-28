"use client";
import MyDashbordHeader from "@/components/shared/MyDashbordHeader";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Uploader } from "rsuite";
import { Textarea } from "@/components/ui/textarea";
import { useProductCreateMutation } from "@/lib/features/api/productsApi";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  quantity: z.string(),
});

const ProductAdd = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();
  const [error, setError] = React.useState<any>(null);
  const [typeId, setTypeId] = React.useState<number>(0);
  const [productCreate] = useProductCreateMutation();
  const onSubmit = async (values: any) => {
    console.log(values);
    const quantity = Number(values.quantity);
    values.typeId = typeId || 0;
    values.quantity = quantity;
    console.log(values);

    const result = await productCreate({ ...values });
    if (result && "data" in result && result.data.statusCode === 201) {
      toast({
        variant: "default",
        title: "Product Created",
        description: "Product creation successfull",
      });
      form.reset();
    } else if (result && "error" in result) {
      setError(result);
      toast({
        variant: "destructive",
        title: "Product creation failed!",
        description: `${error.error.data.message}`,
      });
    }
  };
  return (
    <div>
      <MyDashbordHeader
        separator=">"
        title={"Add Product"}
        description={"Add new product to your store"}
        content={[
          {
            name: "Home",
            link: "/dashboard",
            isActive: false,
          },
          {
            name: "Add Product",
            link: "/dashboard/product-add",
            isActive: true,
          },
        ]}
      />
      <div>
        <Uploader
          action="//jsonplaceholder.typicode.com/posts/"
          draggable
          onChange={(file) => console.log(file)}
        >
          <div
            className="border-indigo-500"
            style={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Click or Drag files to this area for product image</span>
          </div>
        </Uploader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="enter product name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Select product type</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => {
                    setTypeId(Number(value));
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>North America</SelectLabel>
                      <SelectItem value={"1"}>
                        Eastern Standard Time (EST)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="enter product quantity"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Type your product description."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="mt-3" type="submit">
              Add Product
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProductAdd;
