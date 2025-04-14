"use client";

import { useEffect } from "react";

export function NotFound() {
  useEffect(() => {
    console.log("NotFoundComponent mounted");
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          The page you are looking for does not exist.
        </p>
      </main>
    </div>
  );
}
