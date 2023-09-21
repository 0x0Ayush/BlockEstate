import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";


import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const CategoryArray = [
    {
      images: images.creatorbackground1,
      name: "Dance Monkey",
    },
    {
      images: images.creatorbackground2,
      name: "Sports",
    },
    {
      images: images.creatorbackground3,
      name: "Entirtment Art",
    },
    {
      images: images.creatorbackground4,
      name: "Time Life",
    },
    {
      images: images.creatorbackground5,
      name: "Animals Art",
    },
    {
      images: images.creatorbackground6,
      name: "Music",
    },
    {
      images: images.creatorbackground7,
      name: "Digital Arts",
    },
    {
      images: images.creatorbackground8,
      name: "Hubby",
    },
    {
      images: images.creatorbackground8,
      name: "Bad Arts",
    },
    {
      images: images.creatorbackground9,
      name: " Arts",
    },
    {
      images: images.creatorbackground10,
      name: "My Fav",
    },
  ];
  
};

export default Category;
