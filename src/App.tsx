import React from "react";

export default function App(): JSX.Element {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Hello, PWA (React + TypeScript)</h1>
        <p>Minimal template — ready to build on.</p>
      </div>
    </main>
  );
}