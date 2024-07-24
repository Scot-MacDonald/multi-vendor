import Image from "next/image";
import Link from "next/link";
import Hero from "../components/frontend/Hero";

export default function Home() {
  return (
    <div className="w-full min-h-screen ">
      <Hero />
      <h2 className="text-4xl">Ecommerce</h2>
      <Link className="my-4 underline" href="/register-farmer">
        Become a farmer
      </Link>
    </div>
  );
}
