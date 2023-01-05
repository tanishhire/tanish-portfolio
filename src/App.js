import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { Scroll } from "scrollex";

const keyframes = {
  heading : ({ section, container }) => ({
    [section.topAt("container-bottom")] : {
      translateX:-container.width,
    },    
    [section.topAt("container-top") - container.height / 4] : {
      translateX:0,
    },    
    [section.topAt("container-top") + container.height / 4] : {
      translateX:0,
    },    
    [section.bottomAt("container-top")] : {
      translateX:container.width,
    },
  }),
};

function App() {
  return (
    <Scroll.Container scrollAxis="y" className="h-screen">
    <Scroll.Section className="h-screen  bg-1">
      <Scroll.Item keyframes={keyframes.heading}>
        <Navbar />
        <Hero /> 
      </Scroll.Item>
    </Scroll.Section>
    <Scroll.Section className="h-screen  bg-2">
    <Scroll.Item keyframes={keyframes.heading}>
        <About />
      </Scroll.Item>
    </Scroll.Section>
    <Scroll.Section className="h-screen  bg-1">
    <Scroll.Item keyframes={keyframes.heading}>
        <Skills /> 
      </Scroll.Item>
    </Scroll.Section>    
    <Scroll.Section className="h-screen  bg-1">
    <Scroll.Item keyframes={keyframes.heading}>
        <Projects /> 

        
      </Scroll.Item>
    </Scroll.Section>    
    {/* <Scroll.Section className="h-screen  ">
    <Scroll.Item keyframes={keyframes.heading}>
        
      </Scroll.Item>
    </Scroll.Section> */}
    <Footer /> 
  </Scroll.Container>
  );
}

export default App;

// <>
      
// <Navbar />
// <Hero />
// <About />
// <Skills />
// <Projects />
// <Footer />


// </>