import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Contact
        name="Tracy Gregory"
        img="https://randomuser.me/api/portraits/men/86.jpg"
        status={true}
      />
      <Contact
        name="Gabriel Lawson"
        img="https://randomuser.me/api/portraits/men/58.jpg"
        status={false}
      />
      <Contact
        name="Gabriel Lawson"
        img="https://randomuser.me/api/portraits/men/58.jpg"
        status={true}
      />
    </div>
  );
}

export default App;
