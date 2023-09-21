import React from "react";
import Image from "next/image";


import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const factsArray = [
    {
      title: "₹ 840 Crores",
      info: "The approximate amount of Black Money involved in the usual land transaction process",
    },
    {
      title: "₹ 200 Crore",
      info: "The approximate amount of money taken by Real Estate brokers in terms of commission,",
    },
    {
      title: "₹1000 Crore",
      info: "The approximate money of land under land disputes in India",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
            "We are Team BlockEstate. We work for Transforming Land Transactions, Empowering India 😀"
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>Why BlockEstate?</h2>
          <h2>Transpearncy✅</h2>
          <h2>Fast Transactions✅</h2>
          <h2>No Brokers❎</h2>
        </div>
        <div className={Style.aboutus_box_title}>
          <h2>Money Facts💵</h2>
          <p>
           "Still stuck on the traditional land transaction process? Well we have got some figures to change your mind"
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
