"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

export default function MarketsCarousel() {
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
  const slides = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
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
      {slides.map((slide, i) => {
        return (
          <Link key={i} href="#">
            <div className="flex flex-col items-center  ">
              <Image src="/MENU_2.jpg" width={400} height={400} />
              <h2 className="justify-center mb-10">mountain haze</h2>
            </div>
          </Link>
        );
      })}
    </Carousel>
  );
}
