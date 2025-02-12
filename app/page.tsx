"use client";

import { useEffect, useState } from "react";

// export default async function Home() {
export default function Home() {
  const [stuff, setStuff] = useState("asdf");

  useEffect(() => {
    const getData = async (): Promise<string> => {
      const response = await fetch("/api/message", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const result = await response.json();

      return JSON.stringify(result);
    };

    getData()
      .then((data) => {
        setStuff(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {stuff}
    </div>
  );
}
