
// import Main from "./Main";
// import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Client from "./Client";
import Testmonial from "./Testmonial";
import Footer from "./Footer";
import Bot from "./Bot";
import Works from "./Works"

function App() {
  return (
    <div className="App bg-gradient-to-b from-green-50 to-green-100">
      <Navbar />
      <Bot/>
      <Hero/>
      <Client/>
      <Works/>
      <Testmonial/>
      <Footer/>
   
     
    </div>
  );
}

export default App;
