"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

export default function MarketsCarousel({ markets }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
      itemClass="px-1"
    >
      {/* Blue Dream SC cut */}
      {/* Cloud Forest */}
      {markets.map((market, i) => {
        return (
          <Link key={i} href={`/market/${market.slug}`}>
            <div className="flex flex-col items-center  ">
              <Image
                width={400}
                height={400}
                src={market.logoUrl}
                alt={market.title}
                className="w-full  object-contain "
              />
              <h2 className="justify-center mb-10">{market.title}</h2>
            </div>
          </Link>
        );
      })}
    </Carousel>
  );
}
