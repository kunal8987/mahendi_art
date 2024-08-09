import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Landing from "./artPages/landing/Landing";
import Wedding from "./art link/wedding/Wedding";
import Hero from "./artPages/landing/Hero";
import About from "./artPages/landing/About";
import Design from "./art link/deginer/Design";
import Baby from "./art link/baby/Baby";
import Arabic from "./art link/arebic/Arebic";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <hr className="border border-black" />
      <Hero/>
      <hr className="border border-black" />
      <About/>
      <hr className="border border-black" />
      <Wedding/>
      <hr className="border border-black" />
      <Baby/>
      <hr className="border border-black" />
      <Arabic/>
      <hr className="border border-black" />
      <Design/>
      <Footer />
    </div>
  );
}
