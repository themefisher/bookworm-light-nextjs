"use client";
import { JsonContext } from "context/state";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Providers = ({ children }) => {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return <JsonContext>{children}</JsonContext>;
};

export default Providers;
