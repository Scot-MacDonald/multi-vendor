// "use client";
import React from "react";
import Navbar from "../components/frontend/Navbar";
import Footer from "../components/frontend/Footer";
import SecondNav from "../components/frontend/SecondNav";
import { useSession } from "next-auth/react";
import Loading from "../loading";
export default function layout({ children }) {
  // const { status } = useSession();

  // // Wait until session status is loaded (either authenticated or unauthenticated)
  // if (status === "loading") {
  //   return <Loading />; // Show a centralized loading spinner or message
  // }
  return (
    <div className="m-6 ">
      <Navbar />
      {/* <SecondNav /> */}
      <div className="flex bg-white dark:bg-[#252525]">{children}</div>
      <Footer />
    </div>
  );
}
