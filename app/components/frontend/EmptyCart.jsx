import Link from "next/link";
import React from "react";

export default function EmptyCart() {
  return (
    <div>
      <p>
        No Items in your cart.{" "}
        <Link className="text-green-600" href="/">
          Start buying
        </Link>
      </p>
    </div>
  );
}
