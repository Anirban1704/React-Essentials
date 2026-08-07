import React from "react";
export default function TabItem(params) {
  return params.value ? (
    <div id="tab-content">
      <h3>{params.value.title}</h3>
      <p>{params.value.description}</p>
      <pre>
        <code>{params.value.code}</code>
      </pre>
    </div>
  ) : (
    <p>Please Select a topic</p>
  );
}
