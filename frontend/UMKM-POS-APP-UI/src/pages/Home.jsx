import React from "react";
import Headline from "./section/Headline"
import SocialProof from "./section/SocialProof";
import TopFeature from "./section/TopFeature";
import UserReview from "./section/UserReview"
import Contributor from "./section/Contributor"
import FinalCTA from "./section/FinalCTA"
import Footer from "./section/Footer"
import Navbar from "../components/Navbar"
import Register from "../pages/Register"
import Login from "../pages/Login"

export default function Home() {
  return (
    <>
      <Navbar />
      <Headline/>
      <SocialProof/>
      <TopFeature/>
      <UserReview/>
      <Contributor/>
      <FinalCTA/>
      <Footer/>
      <Register/>
      <Login/>
    </>
  );
}
