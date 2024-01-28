"use client";
import { useEffect } from "react";
import { isUserLoggedIn } from "@/service/auth.service";
import { useRouter } from "next/navigation";

export const withAuth = (Component: React.FC) => {
  return function WithAuth(props: any) {
    const router = useRouter();
    const isLogged = isUserLoggedIn();
    console.log("isLogged", isLogged);

    useEffect(() => {
      if (!isLogged) {
        router.push("/auth/signin");
      }
    }, [isLogged, router]);

    if (!isLogged) {
      return (
        <div className="w-screen h-screen flex justify-center item-center">
          <p className="text-black  font-bold text-7xl">TOHFA ENTERPRISE</p>
        </div>
      );
    }

    return <Component {...props} />;
  };
};
