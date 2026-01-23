import Link from '../../Components/NavBar/CardNav.jsx' // Kept this just in case, but actually I should clean up imports properly.
import LogoLoop from "../../Components/LogoLoop/LogoLoop.jsx";
import Countdown from "../../Components/Countdown/Countdown.jsx";
import About from "../../Components/Home/About.jsx";
import Hero from "../../Components/Home/Hero.jsx"
import HomeDept from "../../Components/Home/HomeDept/HomeDept.jsx";


const Home = () => {

  const handleScrollToContact = () => {
    const footerElement = document.getElementById('contact');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div>
        <Hero scrollToContact={handleScrollToContact} />
        <About />
        <HomeDept />
        <Countdown />
        <LogoLoop />
      </div>
    </div>
  )
}

export default Home