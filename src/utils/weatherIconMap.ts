const weatherIcon: Record<string, string> = {
  Clear: "/weather-icons/clear.png",
  Clouds: "/weather-icons/clouds.png",
  Rain: "/weather-icons/rain.png",
  Drizzle: "/weather-icons/drizzle.png",
  Thunderstorm: "/weather-icons/thunderstorm.png",
  Snow: "/weather-icons/snow.png",
};

export default function getWeatherIconMap(condition: string) {
  return weatherIcon[condition] || "/weather-icons/atmosphere.png";
}
