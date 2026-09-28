import { useEffect, useState } from "react";

// Vite exposes env vars prefixed with VITE_ through import.meta.env
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export default function App() {
  const [status, setStatus] = useState("checking...");

  // Runs once when the component first appears on screen
  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("backend offline"));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "4rem" }}>
      <h1>Vaani</h1>
      <p>Sign language → text → speech</p>
      <p>
        Backend status: <strong>{status}</strong>
      </p>
    </main>
  );
}