import Image from "next/image";
import Link from "next/link";
import Hero from "../components/frontend/Hero";
import MarketList from "../components/frontend/MarketList";
import CategoryList from "../components/frontend/CategoryList";
import CommunityTrainings from "../components/frontend/CommunityTrainings";

export default function Home() {
  return (
    <div className="w-full min-h-screen ">
      <Hero />
      <MarketList />
      <div className="py-8">
        <CategoryList />
      </div>
      <div className="py-8">
        <CategoryList />
      </div>
      <div className="py-8">
        <CategoryList />
      </div>
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
