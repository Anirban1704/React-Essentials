import React from "react";
import { useState } from "react";

import { EXAMPLES } from "../data.jsx";
import TabButton from "./TabButton.jsx";
import TabItem from "./TabItem.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <section id="examples">
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
      <TabItem value={EXAMPLES[selectedTopic]} />
    </section>
  );
}
