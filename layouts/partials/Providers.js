"use client";
import config from "@config/config.json";
import { JsonContext } from "context/state";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const Providers = ({ children }) => {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  // google tag manager (gtm)
  const tagManagerArgs = {
    gtmId: config.params.tag_manager_id,
  };
  useEffect(() => {
    setTimeout(() => {
      config.params.tag_manager_id && TagManager.initialize(tagManagerArgs);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <JsonContext>{children}</JsonContext>;
};

export default Providers;
