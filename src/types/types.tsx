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

export enum SplineGroup3D {
  Thunderstorm = "l8nwvhrL1sCwKvjb",
  Drizzle = "l8nwvhrL1sCwKvjb",
  Rain = "l8nwvhrL1sCwKvjb",
  Snow = "l8nwvhrL1sCwKvjb",
  Atmosphere = "l8nwvhrL1sCwKvjb",
  ClearNight = "5nWvSaiVjSstpT9J",
  ClearDay = "k9Vs3ChSVQ0wCXXC",
  Clouds = "l8nwvhrL1sCwKvjb"
}