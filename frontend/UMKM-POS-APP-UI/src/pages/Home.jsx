import Headline from "./section/Headline"
import SocialProof from "./section/SocialProof";
import TopFeature from "./section/TopFeature";
import UserReview from "./section/UserReview"
import FinalCTA from "./section/FinalCTA"
import Footer from "./section/Footer"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <Headline/>
      <SocialProof/>
      <TopFeature/>
      <UserReview/>
      <FinalCTA/>
      <Footer/>
    </>
  );
}
