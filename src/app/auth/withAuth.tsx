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
      return null;
    }

    return <Component {...props} />;
  };
};
