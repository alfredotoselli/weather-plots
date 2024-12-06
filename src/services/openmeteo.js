import { fetchWeatherApi } from "openmeteo";

export async function fetchDailyTemperatures(cities) {
  const params = {
    latitude: cities.map((city) => city.lat),
    longitude: cities.map((city) => city.lon),
    start_date: "2023-11-30",
    end_date: "2024-12-05",
    daily: "temperature_2m_mean",
    timezone: cities.map((city) => city.timezone),
  };
  const url = "https://archive-api.open-meteo.com/v1/archive";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  const weatherData = responses.map((response, i) => {
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const daily = response.daily();

    return {
      location: {
        name: cities[i].name,
        latitude,
        longitude,
        timezone,
        timezoneAbbreviation,
      },
      daily: {
        time: range(
          Number(daily.time()),
          Number(daily.timeEnd()),
          daily.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2mMean: Array.from(
          new Float32Array(daily.variables(0).valuesArray())
        ),
      },
    };
  });

  return weatherData;
}
