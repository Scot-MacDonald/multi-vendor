import React from "react";
("use client");
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

// Sample products array
const products = [
  {
    imageUrl: "/path/to/image1.jpg",
    title: "Product 1",
    salePrice: 100,
  },
  {
    imageUrl: "/path/to/image2.jpg",
    title: "Product 2",
    salePrice: 150,
  },
  // Add more products as needed
];

export default function Category() {
  return (
    <div>
      {products.map((product, i) => {
        return (
          <div key={i} className="">
            <div className="flex flex-col items-center pt-10 min-h-[300px] bg-[#f8f8f8]">
              <Link href="#">
                <Image
                  src={product.imageUrl}
                  width={200}
                  height={200}
                  alt={product.title}
                  className="w-full object-contain"
                />
              </Link>
              <Link href="#">
                <h2 className="justify-center mb-10">{product.title}</h2>
              </Link>
              <div className="flex justify-between w-full px-3 py-3">
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
    </div>
  );
}
