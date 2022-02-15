import Navbar from "./Shared/Navbar.js";
import "./App.css";
import { Fragment } from "react";
import FirstSection from "./Pages/FirstSection.js";
import SecondSection from "./Pages/SecondSection.js";
import SectionThree from "./Pages/SectionThree.js";
import FourthSection from "./Pages/FourthSection.js";
import FifthSection from "./Pages/FifthSection.js";
import SixthSection from "./Pages/SixthSection.js";
import SeventhSection from "./Pages/SeventhSection.js";
import EightSection from "./Pages/EightSection.js";
import Footer from "./Pages/Footer.js";
function App() {
  return (
    <Fragment>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <SectionThree />
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <EightSection/>
      <Footer/>
    </Fragment>
  );
}

export default App;
