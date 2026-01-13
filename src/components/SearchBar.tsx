"use client";

import { useEffect, useState } from "react";

type SearchBarProps = {
  onSearch: (city: string) => void;
  fetchSucceed: number;
};

export default function SearchBar({ onSearch, fetchSucceed }: SearchBarProps) {
  const [city, setCity] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!city.trim()) return;

    onSearch(city);
  }

  useEffect(() => {
    setCity("");
  }, [fetchSucceed]);

  return (
    <form className="flex gap-2 py-2" onSubmit={handleSubmit}>
      <input
        className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Search City..."
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button
        className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
