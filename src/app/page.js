"use client";

import ModelSelection from "../components/ModelSelection";

import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';

import LoginManagerInstance from "./auth/loginManager";

export default function Home() {
  const [signedIn, setSignedIn] = useState(true);


  useEffect(() => {
    // if (LoginManagerInstance.isSignedIn()) {
    //   setSignedIn(true);
    // } else {
    //   redirect("/login");
    // }
  }, []);

  const getPostSignInContent = () => {
    return <>
      {<SideBar />}
      {<MainContent />}
    </>;
  };

  return (
    <main className="overflow-hidden w-full h-screen relative flex">
      {getPostSignInContent()}
    </main>

  );
}
