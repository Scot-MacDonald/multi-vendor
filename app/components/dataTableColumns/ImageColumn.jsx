import React from "react";
import Image from "next/image";

export default function ImageColumn({ row, accessorKey }) {
  const imageUrl = row.getValue(`${accessorKey}`);

  return (
    <div className="shrink-0">
      <Image
        width={500}
        height={500}
        src={imageUrl}
        alt={`${accessorKey}`}
        className="w-14 h-14 object-cover rounded-full"
      />
    </div>
  );
}
