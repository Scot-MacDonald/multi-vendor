import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      sku,
      barcode,
      categoryId,
      description,
      userId: farmerId,
      imageUrl,
      isActive,
      isWholesale,
      productCode,
      productPrice,
      salePrice,
      slug,
      tags,
      title,
      unit,
      wholesalePrice,
      wholesaleQty,
      productStock,
      qty,
    } = await request.json();
    const existingProduct = await db.product.findUnique({
      where: {
        slug,
      },
    });
    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product already exists",
        },
        { status: 409 }
      );
    }
    const newProduct = await db.product.create({
      data: {
        sku,
        barcode,
        categoryId,
        description,
        userId: farmerId,
        imageUrl,
        isActive,
        isWholesale,
        productCode,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        slug,
        tags,
        title,
        unit,
        wholesalePrice: parseFloat(wholesalePrice),
        wholesaleQty: parseInt(wholesaleQty),
        productStock: parseInt(productStock),
        qty: parseInt(qty),
      },
    });
    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { maessage: "failed to create Product", error },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const products = await db.product
      .findMany
      //   {
      //   orderBy: {
      //     createdAt: "desc",
      //   },
      // }
      ();
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { maessage: "failed to fetch product", error },
      { status: 500 }
    );
  }
}
