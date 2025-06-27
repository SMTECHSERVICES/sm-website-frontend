// src/pages/About.jsx
import Navbar from "../components/layout/Navbar";
import AboutIntro from "../components/layout/AboutIntro";
import MissionVision from "../components/layout/MissionVision";
import LeadershipTeam from "../components/layout/LeadershipTeam";
import Timeline from "../components/layout/Timeline";
import Footer from "../components/layout/Footer";
import LoginCommonLayout from "../components/layout/LoginCommonLayout";
import about from '/about.jpg'

const heading = 'About SM Services: Your Trusted Partner in Excellence';
const paragraph = "SM Services delivers innovative, reliable, and expert-driven solutions that empower businesses and communities.With a client-first approach, we ensure quality, safety, and success in every project we undertake."


const About = () => {
  return (
    <div>
      <Navbar />
      {/* <AboutIntro /> */}
      <LoginCommonLayout login1={'Services'} login2={'Contact'} to1={'/services'} to2={'/contact'} hero={about} heading={heading} paragraph={paragraph} />
      <MissionVision />
      <LeadershipTeam />
      <Timeline />
      <Footer />
    </div>
  );
};

export default About;
