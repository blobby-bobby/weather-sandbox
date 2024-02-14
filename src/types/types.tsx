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
      description: string;
    }[];
    wind: {
      speed: number;
    }
  }