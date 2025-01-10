import React from "react";
import { addToCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { ShoppingCart } from "lucide-react"; // Ensure you have the icon library installed
import { useDispatch } from "react-redux";

export default function ProductNewLayout({ product, isLarge }) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(addToCart(product));
    toast.success("item added successfully");
  }
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      <Link href={`/products/${product.slug}`}>
        <h2 className="justify-center font-bold text-[16px] uppercase text-black dark:text-white mb-10">
          {product.title}
        </h2>
      </Link>

      {/* Image Link */}
      <Link
        href={`/products/${product.slug}`}
        className="flex justify-center items-center w-full h-full"
      >
        <Image
          src={product.imageUrl}
          width={isLarge ? 350 : 200} // Larger for the big div, smaller for the others
          height={isLarge ? 350 : 200}
          alt={product.title}
          className="object-contain"
        />
      </Link>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center w-full px-3 py-2">
        {/* Price */}
        <p className="text-left">€ {product.salePrice}</p>

        {/* Add to Cart Button */}
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
