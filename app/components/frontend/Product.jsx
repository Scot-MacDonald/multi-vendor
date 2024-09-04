"use client";
import { addToCart } from "@/redux/slices/cartSlice";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(addToCart(product));
    toast.success("item added successfully");
  }
  return (
    <div className="flex flex-col items-center min-h-96 border border-[#666666] ">
      <Link href={`/products/${product.slug}`}>
        <Image
          src={product.imageUrl}
          width={200}
          height={200}
          alt={product.title}
          className="w-full  object-contain "
        />
      </Link>
      <Link href={`/products/${product.slug}`}>
        <h2 className="justify-center mb-10">{product.title}</h2>
      </Link>
      <div className="flex justify-between w-full px-3 py-3">
        <p>€ {product.salePrice}</p>
        <button
          onClick={() => handleAddToCart()}
          className="flex items-center space-x-2"
        >
          <ShoppingCart />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}
