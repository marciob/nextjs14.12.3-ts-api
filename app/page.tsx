"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("/api/hello");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchMessage();
  }, []);

  return (
    <main className="flex justify-center items-center h-screen bg-gray-800">
      <div className="text-white text-2xl">
        {error ? `Error: ${error}` : message}
      </div>
    </main>
  );
}
