import Image from "next/image";
import Link from "next/link";
import Hero from "../components/frontend/Hero";
import MarketList from "../components/frontend/MarketList";
import CategoryList from "../components/frontend/CategoryList";
import CommunityTrainings from "../components/frontend/CommunityTrainings";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import TestCol from "../components/frontend/TestCol";
import CategoryListNewLayout from "../components/frontend/CategoryListNewLayout";
import CommunityTrainingsFP from "../components/frontend/CommunityTrainingsFP";

export default async function Home() {
  const categoriesData = await getData("categories");
  const categories = await categoriesData.filter((category) => {
    return category.products.length > 3;
  });
  const trainings = await getData("trainings");
  const session = await getServerSession(authOptions);
  console.log(session?.user);

  return (
    <div className="w-full min-h-screen">
      <Hero />
      <MarketList />
      {categories.map((category, i) => (
        // <div className="py-1" key={i}>
        //   <CategoryList isMarketPage={false} category={category} />
        <div className="" key={i}>
          <CategoryListNewLayout isMarketPage={false} category={category} />
        </div>
      ))}

      {/* Uncomment this if needed */}
      {categories.map((category, i) => (
        <div className="py-1" key={i}>
          <CategoryList isMarketPage={false} category={category} />
        </div>
      ))}
      <div className="py-8">
        <CommunityTrainingsFP
          title="Featured Trainings"
          trainings={trainings.slice(0, 4)}
        />
      </div>
      <div className="py-8">
        <TestCol />
      </div>
    </div>
  );
}

// {/* <div className="w-full min-h-screen">
// <Hero />
// {/* <MarketList /> */}
// {categories.map((category, i) => {
//   return (

//     <div className="py-1" key={i}>
//       <CategoryList isMarketPage={false} category={category} />

//     {/* <div className="py-1" key={i}>
//       <CategoryList category={category} />
//     </div> */}
//    {/* <div className="" key={i}>
//      <CategoryListNewLayout category={category} />

//     // </div> */}
//   );
// })}

// <div className="py-8">
//   <CommunityTrainings />
// </div>
// <div className="py-8">
//   <TestCol />
// </div>
// </div>
// );
// } */}
