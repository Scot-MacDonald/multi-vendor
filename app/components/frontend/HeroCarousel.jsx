"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel } from "nuka-carousel";
export default function HeroCarousel({ banners }) {
  return (
    <Carousel showArrows autoplay>
      <img src="/weed.jpg" alt="alt" />
      {/* {banners.map((banner, i) => { */}
      return (
      {/* <Image
            width={1500}
            height={843}
            src={banner.imageUrl}
            alt={banner.title}
            className="w-full"
          /> */}
      );
      {/* })} */}
    </Carousel>
  );
}
