import React from "react";

import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.jsx";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <CoreConcept key={index} {...item} />
        ))}
      </ul>
    </section>
  );
}
