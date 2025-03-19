import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar"
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
      <NavBar scrollToContact={handleScrollToContact}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App;