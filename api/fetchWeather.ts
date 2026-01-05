export async function fetchWeather(city: string) {
  const apiKey = "f45faf2f106588cb6bd1a52a61be4cdd";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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
