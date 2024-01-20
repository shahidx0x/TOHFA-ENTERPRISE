"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../../lib/store";
import persistStore from "redux-persist/es/persistStore";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    persistStore(storeRef.current);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
