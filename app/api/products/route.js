import db from "@/lib/db";
import { NextResponse } from "next/server";

// POST function to create a new product
export async function POST(request) {
  try {
    const {
      sku,
      barcode,
      categoryId,
      description,
      userId: farmerId,
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
      productImages,
    } = await request.json();

    const existingProduct = await db.product.findUnique({
      where: { slug },
    });

    if (existingProduct) {
      return NextResponse.json(
        { data: null, message: "Product already exists" },
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
        productImages,
        imageUrl: productImages[0],
        isActive,
        isWholesale,
        productCode,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        slug,
        tags,
        title,
        unit,
        wholesalePrice: isWholesale ? parseFloat(wholesalePrice) : null,
        wholesaleQty: isWholesale ? parseInt(wholesaleQty) : null,
        productStock: parseInt(productStock),
        qty: parseInt(qty),
      },
    });

    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create Product", error },
      { status: 500 }
    );
  }
}

// GET function to fetch all products
export async function GET(request) {
  const categoryId = request.nextUrl.searchParams.get("catId");
  const sortBy = request.nextUrl.searchParams.get("sort");
  // console.log(sortBy, categoryId);
  const min = request.nextUrl.searchParams.get("min");
  const max = request.nextUrl.searchParams.get("max");

  let where = {
    categoryId,
  };
  if (min && max) {
    where.salePrice = {
      gte: parseFloat(min),
      lte: parseFloat(max),
    };
  } else if (min) {
    where.salePrice = {
      gte: parseFloat(min),
    };
  } else if (max) {
    where.salePrice = {
      lte: parseFloat(max),
    };
  }
  let products;
  try {
    if (categoryId && sortBy) {
      products = await db.product.findMany({
        where,
        orderBy: {
          salePrice: sortBy === "asc" ? "asc" : "desc",
        },
      });
    } else if (categoryId) {
      products = await db.product.findMany({
        where,
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      products = await db.product.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
    }
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch products", error },
      { status: 500 }
    );
  }
}
