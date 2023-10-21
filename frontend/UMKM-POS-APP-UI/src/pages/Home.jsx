import React from "react";
import Headline from "./section/Headline"
import SocialProof from "./section/SocialProof";
import TopFeature from "./section/TopFeature";
import UserReview from "./section/UserReview"
import Contributor from "./section/Contributor"
import FinalCTA from "./section/FinalCTA"
import Footer from "./section/Footer"
import Router from "../components/Router"

export default function Home() {
  return (
    <>
      <Headline/>
      <SocialProof/>
      <TopFeature/>
      <UserReview/>
      <Contributor/>
      <FinalCTA/>
      <Footer/>
      <Router/>
    </>
  );
}
