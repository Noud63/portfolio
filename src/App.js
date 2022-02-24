import Home from './components/Home.js'
import About from './components/About/About.js'
import Projects from './components/Projects/Projects.js'
import Art from './components/Art/Art.js'
import Contact from './components/Contact/Contact.js'
import SingleProject from './components/SingleProject/SingleProject.js'
import ScrollToTop from "./ScrollToTop.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects/' element={<Projects />} />
          <Route path='/singleproject/:id' element={<SingleProject />} />
          <Route path='/art' element={<Art />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </Router>

  );
}

export default App;
