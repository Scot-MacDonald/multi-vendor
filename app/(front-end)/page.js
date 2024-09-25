import Image from "next/image";
import Link from "next/link";
import Hero from "../components/frontend/Hero";
import MarketList from "../components/frontend/MarketList";
import CategoryList from "../components/frontend/CategoryList";
import CommunityTrainings from "../components/frontend/CommunityTrainings";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Home() {
  const categoriesData = await getData("categories");
  const categories = await categoriesData.filter((category) => {
    return category.products.length > 3;
  });
  const session = await getServerSession(authOptions);
  console.log(session?.user);

  return (
    <div className="w-full min-h-screen">
      <Hero />
      <MarketList />
      {categories.map((category, i) => {
        return (
          <div className="py-1" key={i}>
            <CategoryList category={category} />
          </div>
        );
      })}

      <div className="py-8">
        <CommunityTrainings />
      </div>

      <h2 className="text-4xl">Ecommerce</h2>
      <Link className="my-4 underline" href="/register-farmer">
        Become a farmer
      </Link>
    </div>
  );
}
