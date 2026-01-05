"use client";

import { useState } from "react";
import SearchBar from "@/src/components/SearchBar";
import { fetchWeather } from "../../api/fetchWeather";
import WeatherCard from "../components/WeatherCard";
import { Weather } from "../types/weather";
import { fetchCountryName } from "@/api/fetchCountryName";
import WeatherCardSkeleton from "../components/WeatherCardSkeleton";

export default function WeatherApp() {
  const [weatherCards, setWeatherCards] = useState<Weather[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [fetchSucceed, setFetchSucceed] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch(city: string) {
    setIsLoading(true);
    const res = await fetchWeather(city);

    if (res) {
      const countryName = await fetchCountryName(res.sys.country);

      const newWeatherData = {
        id: res.id,
        country: countryName[0].name.common,
        city: res.name,
        temperature: res.main.temp,
        weather: res.weather[0].main,
        description: res.weather[0].description,
      };

      setWeatherCards((prev) => {
        // code by AI
        const filtered = prev.filter((card) => card.id !== newWeatherData.id);
        return [newWeatherData, ...filtered];
      });

      setErrorMessage("");
      setFetchSucceed((prev) => prev + 1);
    } else {
      setErrorMessage(
        "City not found — please check the spelling and try again"
      );
    }
    setIsLoading(false);
  }

  console.log(weatherCards);

  function handleDeleteCard(id: number) {
    setWeatherCards(weatherCards.filter((n) => n.id !== id));
  }

  return (
    <main className="min-h-screen bg-slate-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-md space-y-6">
        <header className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-slate-800">Weather App</h1>
          <p className="text-sm text-slate-600">
            Check the weather in your city
          </p>
          <div>
            <SearchBar onSearch={handleSearch} fetchSucceed={fetchSucceed} />
          </div>
          {isLoading && <WeatherCardSkeleton />}
          {errorMessage && (
            <p className="text-xs text-red-500">{errorMessage}</p>
          )}
          <section className="space-y-4">
            {weatherCards.map((data) => (
              <WeatherCard
                key={data.id}
                data={data}
                onDelete={handleDeleteCard}
              />
            ))}
          </section>
        </header>
      </div>
    </main>
  );
}
