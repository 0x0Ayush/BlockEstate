import React from "react";
import { useRouter } from "next/router";
import Style from "./Brand.module.css";

const Brand = () => {
  const router = useRouter();
  return (
    <div className={Style.Brand}>
    </div>
  );
};

export default Brand;
