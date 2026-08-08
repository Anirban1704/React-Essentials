import React from "react";
// import { useState } from "react";

import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  // const [selectedTopic, setSelectedTopic] = useState("");

  //function handleClick(tabName) {
  //setTabContent(EXAMPLES[tabName]);
  //}

  // let tabContent = <p>Please Select a topic</p>;

  // if (selectedTopic != "") {
  //   tabContent = (
  //     <div id="tab-content">
  //       <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].description}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Header />
      <main>
        {
          /* <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item, index) => (
              <CoreConcept key={index} {...item} />
            ))}
          </ul>
        </section> */ <CoreConcepts />
        }
        {
          /* <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => setSelectedTopic("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => setSelectedTopic("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => setSelectedTopic("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => setSelectedTopic("state")}
            >
              State
            </TabButton>
          </menu>
           {
             {tabContent ? (
            <div id="tab-content">
              <h3>{tabContent.title}</h3>
              <p>{tabContent.description}</p>
              <pre>
                <code>{tabContent.code}</code>
              </pre>
            </div>
          ) : (
            <p>Please Select a topic</p>
          )} 
          } 
          <TabItem value={EXAMPLES[selectedTopic]} />
        </section> */ <Examples />
        }
      </main>
    </div>
  );
}

export default App;
