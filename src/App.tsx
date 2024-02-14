import { WeatherCard } from './components/WeatherCard/WeatherCard';
import { useEffect, useState } from 'react';
import { fetchLocalData } from './utils/getLocalWeather';
import { WeatherData } from './types/types';
import { SearchInput } from './components/SearchInput/SearchInput';
import { useTheme } from './context/ThemeContext';
import './index.scss'

export default function App() {

  const [weatherLocalData, setWeatherLocalData] = useState<WeatherData | null>(null);
  // const [searchCityData, setSearchCityData] = useState<WeatherData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Theming
  const { theme } = useTheme();

  // fetching the local weather
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          fetchLocalData(latitude, longitude)
            .then(data => setWeatherLocalData(data))
            .catch(error => setError(error.message));
        }
      );
    } else {
      setError('La géolocalisation n\'est pas supportée par votre navigateur');
    }
  }, []);

  return (
    <main className={theme}>
      {error && <p>{error}</p>}
      <h1>Is it Sunny ?</h1>

      <SearchInput />

      <div className="cards">
        {weatherLocalData && (<WeatherCard weather={weatherLocalData} />)}
      </div>
    </main>
  );
}
