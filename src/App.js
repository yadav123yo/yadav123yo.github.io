import './App.css';
import Navbar from "./Componants/Nav";
import About from "./Componants/About";
import Skills from "./Componants/Skills";
import Contact from "./Componants/Contact";
import {Helmet} from "react-helmet";
import Projects from "./Componants/Projects";
import Github from './Componants/Github';
import Footer from './Componants/Footer';
import {Text} from "@chakra-ui/react"
function App() {
  return (
    <div className="App">
 <Helmet>
                <meta charSet="utf-8" />
                <title>Yogesh_Yadav</title>
                
            </Helmet>


    <Navbar />
    <About />
    <Skills />
    <Text
            textTransform={"uppercase"}
            color={"red.600"}
            fontWeight={700}
            fontSize={"4xl"}
            marginLeft={"4%"}
            p={3}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            My Projects
          </Text>
    <Projects />
    <Github />
    <Contact />
    <Footer/>

    </div>
  );
}

export default App;
