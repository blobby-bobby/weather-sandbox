import { useTheme } from "../context/ThemeContext";
import { SplineGroup3D } from "../types/types";

export const mapWeatherToModel = (weatherMain: string): string => {

    const { theme } = useTheme();

    switch (weatherMain) {
        case 'Thunderstorm':
            return SplineGroup3D.Thunderstorm;
        case 'Drizzle':
            return SplineGroup3D.Drizzle;
        case 'Rain':
            return SplineGroup3D.Rain;
        case 'Snow':
            return SplineGroup3D.Snow;
        case 'Atmosphere':
            return SplineGroup3D.Atmosphere;
        case theme === "daytime" && 'Clear':
            return SplineGroup3D.ClearDay;
        case theme === "nighttime" && 'Clear':
            return SplineGroup3D.ClearNight;
        case 'Clouds':
            return SplineGroup3D.Clouds; 
        default:
            return SplineGroup3D.ClearDay; // Optional default model
    }
}