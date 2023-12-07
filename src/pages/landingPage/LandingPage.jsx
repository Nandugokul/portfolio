import Footer from "../../uiComponents/Footer";
import NavBar from "../../uiComponents/NavBar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Works from "./components/works/Works";

function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <TechStack />
      <Works />
      <Footer />
    </>
  );
}
export default LandingPage;
