"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel } from "nuka-carousel";
export default function HeroCarousel() {
  return (
    <Carousel showArrows autoplay>
      <img src="/weed.jpg" alt="alt" />

      <img src="/weed1.jpg" alt="alt" />

      <img src="/weed.jpg" alt="alt" />

      <img src="/weed1.jpg" alt="alt" />
    </Carousel>
  );
}
