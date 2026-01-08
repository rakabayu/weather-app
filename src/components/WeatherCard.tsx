"use client";

import { Weather } from "../types/weather";
import getWeatherIconMap from "../utils/weatherIconMap";

type WeatherCardProps = {
  data: Weather;
  onDelete: (id: number) => void;
};

export default function WeatherCard({ data, onDelete }: WeatherCardProps) {
  function handleDeleteCard() {
    onDelete(data.id);
  }

  const iconSrc = getWeatherIconMap(data.weather);

  function capitalizeWord(description: string) {
    if (!description) return "";

    return description
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <div className="flex items-center gap-8">
        <div className="flex flex-col min-w-0 flex-1 text-left">
          <span className="text-xs text-slate-500 truncate">
            {data.country}
          </span>
          <h3 className="block text-lg font-semibold w-40 text-slate-800 text-left">
            {data.city}
          </h3>
        </div>
        <div className="flex text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            {Math.round(data.temperature)}°C
          </h3>
        </div>
        <div className="w-20">
          <img src={iconSrc} alt={data.weather} className="w-10 h-10" />
          <span className=" block text-sm text-slate-600 text-left">
            {capitalizeWord(data.description)}
          </span>
        </div>
        <button
          className="text-xs text-slate-400 hover:text-red-500"
          onClick={handleDeleteCard}
        >
          X
        </button>
      </div>
    </div>
  );
}
