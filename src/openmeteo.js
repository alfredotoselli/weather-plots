import { fetchWeatherApi } from "openmeteo";

export async function fetchWeather() {
  const params = {
    latitude: 41.8919,
    longitude: 12.5113,
    start_date: "2014-11-30",
    end_date: "2024-12-05",
    daily: "temperature_2m_mean",
    timezone: "Europe/Rome",
  };
  const url = "https://archive-api.open-meteo.com/v1/archive";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const daily = response.daily();

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
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

  return weatherData;
}
