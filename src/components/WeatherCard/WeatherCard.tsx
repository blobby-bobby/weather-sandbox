import Spline from "@splinetool/react-spline";
import styles from './weatherCard.module.scss';
import { FunctionComponent } from "react";
import { FiDroplet, FiWind } from "react-icons/fi";
import { WeatherData } from "../../types/types";

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard: FunctionComponent<WeatherCardProps> = (props) => {

  return (
      <div className={styles.card}>

        {/* HEAD */}
        <div className={styles["card__header"]}>
          <div className={styles["card__header--location"]}>
            <h2>{props.weather.name}</h2>
            <span>{props.weather.sys.country}</span>
          </div>
          <p className={styles["card__header--desc"]}>{props.weather.weather[0].description.slice(0,1).toUpperCase()}{props.weather.weather[0].description.slice(1)}</p>
          <p className={styles["card__header--temp"]}>{Math.round(props.weather.main.temp)}°</p>
        </div>

        {/* 3D VIEW */}
        <Spline scene="https://prod.spline.design/hQ8K-cYRUiNMdXij/scene.splinecode" className={styles.model}/>
        
        {/* ATMOSPHERE INFOS */}
        <div className={styles["card__footer"]}>
          <div>
            <FiWind size={24} /><p>{props.weather.wind.speed} m/s</p>
          </div>

          <div>
            <FiDroplet size={24} /><p>{props.weather.main.humidity}%</p>
          </div>
        </div>
      </div>
  )
}