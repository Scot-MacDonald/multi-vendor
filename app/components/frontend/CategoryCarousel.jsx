"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CategoryCarousel({ products }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
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
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //   deviceType={}
      dotListClass="custom-dot-list-style"
      itemClass="px-2"
    >
      {/* Blue Dream SC cut */}
      {/* Cloud Forest */}
      {products.map((product, i) => {
        return (
          <div key={i}>
            <div className="flex flex-col items-center  ">
              <Link href="#">
                <Image
                  src={product.imageUrl}
                  width={400}
                  height={400}
                  alt={product.title}
                  className="w-full h-66 object-cover"
                />
              </Link>
              <Link href="#">
                <h2 className="justify-center mb-10">{product.title}</h2>
              </Link>
              <div className="flex justify-between w-full">
                <p>€ {product.salePrice}</p>
                <button className="flex items-center space-x-2">
                  <ShoppingCart />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}