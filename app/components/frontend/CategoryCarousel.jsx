"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Product from "./Product";

export default function CategoryCarousel({ products }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container  "
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      //   deviceType={}
      dotListClass="custom-dot-list-style"
      itemClass="px-1"
    >
      {products.map((product, i) => {
        return <Product product={product} key={i} />;
      })}
    </Carousel>
  );
}
