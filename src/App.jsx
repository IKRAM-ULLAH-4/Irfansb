import AboutUs from "./Components/AboutUs";
import AdminPage from "./Components/AdminPage";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import HowWeWork from "./Components/HowWeWork";
import Navbar from "./Components/Navbar";
import ProblemSolutionSection from "./Components/ProblemSolutionSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <HowWeWork />
      <AboutUs />
      <AdminPage />
      <Footer />
    </div>
  );
};

export default App;
