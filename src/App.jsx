import React from "react";
import Hero_1 from "./Component/Hero_1/Hero_1";
import Hero_2 from "./Component/Hero_2/Hero_2";
import Services from "./Component/Section 3 Services/Services";
import Projects from "./Component/Section 4 Projects/Projects";
import Cta from "./Component/Section 5 CTA/Cta";

const App = () => {
  return (
    <div>
      <Hero_1 />
      <Hero_2 />
      <Services />
      <Projects />
      <Cta />
    </div>
  );
};

export default App;
