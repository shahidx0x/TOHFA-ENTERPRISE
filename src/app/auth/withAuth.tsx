"use client";

import { useAppSelector } from "@/lib/hooks";
import { redirect } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export const withAuth = (Component: React.FC) => {
  return function WithAuth(props: any) {
    const state = useAppSelector((state) => state.loggedUser);
    console.log(state.email);

    useLayoutEffect(() => {
      if (!state.email) {
        redirect("/auth/signin");
      }
      if (state.role === "user") {
        redirect("/admin/dashbord");
      }
    }, [state]);
    if (!state.email) return null;
    return <Component {...props} />;
  };
};
