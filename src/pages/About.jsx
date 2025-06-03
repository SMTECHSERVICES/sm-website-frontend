// src/pages/About.jsx
import Navbar from "../components/layout/Navbar";
import AboutIntro from "../components/layout/AboutIntro";
import MissionVision from "../components/layout/MissionVision";
import LeadershipTeam from "../components/layout/LeadershipTeam";
import Timeline from "../components/layout/Timeline";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutIntro />
      <MissionVision />
      <LeadershipTeam />
      <Timeline />
      <Footer />
    </div>
  );
};

export default About;
