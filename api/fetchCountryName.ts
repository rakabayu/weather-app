export async function fetchCountryName(country: string) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);

    if (!res.ok) throw new Error(`Failed to fetch weather for "${country}"`);

    const data = await res.json();
    console.log("fetch country :", data);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Country API Error:", err.message);
    } else {
      console.error("Unknown Error:", err);
    }

    return null;
  }
}
