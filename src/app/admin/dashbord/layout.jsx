"use client";
import SideNavbar from "@/components/shared/SideNavbar";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import { useState } from "react";
import DashbordNavbar from "../../../components/shared/DashbordNavbar";
import { withAuth } from "@/app/auth/withAuth";
import NextTopLoader from "nextjs-toploader";

function DashbordLayout({ children }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <NextTopLoader color="#000000" />
      <DashbordNavbar />
      <div className="flex  h-screen">
        <Button
          onClick={() => setShow((state) => !state)}
          className={!show ? "flex" : "hidden"}
        >
          <ArrowBigRight />
        </Button>
        <div
          className={
            show
              ? `hidden lg:flex flex-col w-96 h-screen overflow-hidden border`
              : `hidden`
          }
        >
          <div
            style={{ backgroundColor: "black" }}
            className="hidden lg:flex items-center justify-between p-3 rounded-md text-white"
          >
            <h2 className="font-bold">Admin Dashboard</h2>
            <button onClick={() => setShow((state) => !state)} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current text-gray-800"
              >
                <rect
                  className="text-white"
                  width="352"
                  height="32"
                  x="80"
                  y="96"
                ></rect>
                <rect
                  className="text-white"
                  width="352"
                  height="32"
                  x="80"
                  y="240"
                ></rect>
                <rect
                  className="text-white"
                  width="352"
                  height="32"
                  x="80"
                  y="384"
                ></rect>
              </svg>
            </button>
          </div>
          <SideNavbar />
        </div>

        <div className=" w-full h-screen p-5 ">{children}</div>
      </div>
    </div>
  );
}
export default withAuth(DashbordLayout);
