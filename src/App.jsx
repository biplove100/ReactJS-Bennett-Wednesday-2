import CoreConcept from "./components/CoreConcept";
import Components from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import CoreConceptsCall from "./components/CoreConceptsCall.jsx";
import Examples from "./components/Examples.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [buttonClickedName, setButtonClickedName] = useState('Seven');
  
  function handleClick(buttonName){
        setButtonClickedName(buttonName);
        console.log(buttonClickedName);
    }

    const comp="This is my Component";
    const jsx= "this is my JSX";

    console.log('App component rendered');

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConceptsCall />
            
          </ul>
        </section>

        <section id="examples">
          <h3>EXAMPLES</h3>
          <menu>
          <Examples onSelect={() => handleClick('Components')}>Components</Examples>
          <Examples onSelect={() => handleClick('JSX')}>JSX</Examples>
          <Examples onSelect={() => handleClick('Props')}>Props</Examples>
          <Examples onSelect={() => handleClick('State')}>State</Examples>
          </menu>
          {buttonClickedName === 'Components' ? comp : ''}
          {buttonClickedName === 'JSX' ? jsx : ''}
        </section>
      </main>
    </div>
  );
}

export default App;
