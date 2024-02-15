export interface WeatherData {
    name: string,
    main: {
      temp: number;
      humidity: number;
    };
    sys: {
      country: string;
    }
    weather: {
      main: string;
      description: string;
    }[];
    wind: {
      speed: number;
    }
  }

interface SplineData {
  main: string, 
  urlId: string,
}

export const SplineSelectionDay: SplineData[] = [
    {main: "Thunderstorm", urlId: ""},
    {main: "Drizzle", urlId: ""},
    {main: "Rain", urlId: ""},
    {main: "Snow", urlId: ""},
    {main: "Atmosphere", urlId: ""},
    {main: "Clear", urlId: ""},
    {main: "Clouds", urlId: ""},
]