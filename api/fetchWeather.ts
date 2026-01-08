export async function fetchWeather(city: string) {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    //if API returns 404, 401, etc.
    if (!res.ok) {
      throw new Error(`Failed to fetch weather for "${city}"`);
    }

    const data = await res.json();
    console.log("fetch weather :", data);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("Weather API Error:", err.message);
    } else {
      console.log("Unknown error:", err);
    }

    return null;
  }
}
