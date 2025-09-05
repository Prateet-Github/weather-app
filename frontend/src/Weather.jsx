import { useState } from "react";
import { getWeather } from "../helper";

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      setError("");
      const weatherData = await getWeather(city);
      setData(weatherData);
    } catch (err) {
      setError("Could not fetch weather. Check city name or server.");
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <button
        onClick={fetchWeather}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Get Weather
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {data && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-semibold text-center">
            {data.location.name}, {data.location.country}
          </h2>
          <div className="text-center mt-2">
            <p>🌡 Temp: {data.current.temp_c}°C</p>
            <p>☁ Condition: {data.current.condition.text}</p>
            <p>💧 Humidity: {data.current.humidity}%</p>
            <p>💨 Wind: {data.current.wind_kph} kph</p>
          </div>
        </div>
      )}
    </div>
  );
}
