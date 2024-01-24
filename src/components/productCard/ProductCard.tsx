/* eslint-disable @next/next/no-img-element */
import { Card } from "../ui/card";
import demoAssets from "../../../assets/products/Bay Leafs.png";
import Image from "next/image";
import { Badge } from "../ui/badge";
const ProductCard = () => {
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-sm hover:shadow-md bg-gray-50 text-gray-800">
        <Image
          src={demoAssets}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-56 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <Badge>Toast</Badge>
            <h2 className="text-2xl font-semibold tracki">GHEE TOAST</h2>
            <p className="text-gray-800 font-mono font-bold">2000 PCS</p>
          </div>
          <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border-gray-800 border text-gray-800 py-3 rounded-md md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 hover:text-white font-medium text-base leading-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
