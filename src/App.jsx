import { Outlet } from "react-router-dom";
import CardNav from "./Components/NavBar/CardNav"
import Footer from "./Components/Footer/Footer";

const App = () => {

  const handleScrollToContact = () => {
    const footerElement = document.getElementById('contact');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div>
      <CardNav scrollToContact={handleScrollToContact}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App;