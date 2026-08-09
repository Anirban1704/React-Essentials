import React from "react";
import { useState } from "react";

import { EXAMPLES } from "../data.jsx";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import TabItem from "./TabItem.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <Section title={"Examples"} id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => setSelectedTopic("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => setSelectedTopic("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => setSelectedTopic("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => setSelectedTopic("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        <TabItem value={EXAMPLES[selectedTopic]} />
      </Tabs>
      {/* <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => setSelectedTopic("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => setSelectedTopic("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => setSelectedTopic("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => setSelectedTopic("state")}
        >
          State
        </TabButton>
      </menu>
      <TabItem value={EXAMPLES[selectedTopic]} /> */}
    </Section>
  );
}
