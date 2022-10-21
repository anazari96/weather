import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudRain,
  faSnowflake,
  faSun,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { IWeather } from "../../models/weather";
import moment from "moment";
import "./index.less";

interface IProps {
  size: "big" | "small";
  weather: IWeather;
}

interface IState {}

class ForcastBox extends React.Component<IProps, IState> {
  renderIcon() {
    switch (this._getType().toLowerCase()) {
      case "clouds":
        return faCloud;
      case "rain":
        return faCloudRain;
      case "snow":
        return faSnowflake;
      case "wind":
        return faWind;
      case "sun":
      case "clear":
      default:
        return faSun;
    }
  }

  _getDay() {
    const mmnt = moment(this.props.weather.dt_txt);
    if (mmnt.isSame(moment(), "day")) {
      return "Today";
    } else {
      return mmnt.format("ddd");
    }
  }

  _getTemp() {
    return Math.floor(this.props.weather.main.temp);
  }

  _getType() {
    return this.props.weather.weather[0].main;
  }

  render(): React.ReactNode {
    return (
      <div className="flex flex-col justify-center items-center forcast-box rounded-md py-8 px-6 md:px-12 hover:shadow-md transition ease-in-out duration-300">
        <h4
          className={`${
            this.props.size === "big" ? "text-4xl" : "text-xl md:text-4xl"
          }  text-slate-600`}
        >
          {this._getDay()}
        </h4>
        <div
          className={`${
            this.props.size === "big" ? "flex-row mt-4" : "flex-col"
          } flex justify-center items-center`}
        >
          <div
            className={`flex ${
              this.props.size === "big" ? "text-8xl" : "text-3xl md:text-5xl"
            } ${this.props.size === "big" ? "mx-6" : ""} my-5 icon`}
          >
            <FontAwesomeIcon icon={this.renderIcon()} />
          </div>
          <div className="mb-2">
            <p
              className={`${
                this.props.size === "big" ? "text-6xl" : "text-3xl"
              } text-slate-800`}
            >
              {this._getTemp()}°
            </p>
            {this.props.size === "big" && (
              <p className="text-4xl text-slate-700">{this._getType()}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ForcastBox;
