import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Service from "./components/Service";
import ServiceCharges from "./components/ServiceCharges";
import Apply from "./components/Apply";
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Term from "./components/Term";
import Confirmation from "./components/Confirmation";

const App=()=>{
  return(<>
   <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='service' element={<Service />} />
          <Route path='service-charge' element={<ServiceCharges />} />
          <Route path='apply' element={<Apply />} />
          <Route path='about' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='faq' element={<Faq />} />
          <Route path='term' element={<Term />} />
          <Route path='confirmation' element={<Confirmation />} />
          
          
       </Route>
      </Routes>
      </BrowserRouter>

  

  </>);
}
export default App;