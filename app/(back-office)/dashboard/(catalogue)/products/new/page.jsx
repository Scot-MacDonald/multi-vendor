import NewProductForm from "@/app/components/backoffice/NewProductForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function NewProduct() {
  const categoriesData = await getData("categories");
  const usersData = await getData("users");
  const farmersData = usersData.filter((user) => user.role === "FARMER");

  const farmers = farmersData.map((farmer) => ({
    id: farmer.id,
    title: farmer.name,
  }));

  const categories = categoriesData.map((category) => ({
    id: category.id,
    title: category.title,
  }));

  return <NewProductForm categories={categories} farmers={farmers} />;
}
