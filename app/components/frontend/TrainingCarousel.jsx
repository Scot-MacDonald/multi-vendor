"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

export default function TrainingCarousel({ trainings }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
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
      itemClass="px-2 "
    >
      {/* Blue Dream SC cut */}
      {/* Cloud Forest */}
      {trainings.map((training, i) => {
        return (
          <div>
            <div className="flex flex-col   ">
              <Link key={i} href="#">
                <Image
                  src={training.imageUrl}
                  width={430}
                  height={430}
                  alt={training.title}
                  className="w-full h-96 object-cover"
                />
              </Link>
              <h2 className="text-center mb-30 py-1 font-semibold">
                {training.title}
              </h2>
              <p className="line-clamp-3  ">{training.description}</p>
              <div className="flex justify-between items-center py-2">
                <Link className="text-green-400" href="#">
                  Read more
                </Link>
                <Link className="text-green-400" href="#">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
