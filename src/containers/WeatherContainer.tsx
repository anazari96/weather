import React from "react";
import ForcastBox from "../components/ForcastBox";
import LoadingBox from "../components/LoadingBox";
import { ICity } from "../models/country";
import { IWeather } from "../models/weather";
import { getForcastByCountry } from "../services/weather";

interface IProps {
  selectedCity: ICity;
}

interface IState {
  weathers: IWeather[];
  loading: boolean;
}

class WeatherContainer extends React.Component<IProps, IState> {
  weathers: IWeather[] = [];
  loading = true;

  constructor(props: IProps) {
    super(props);

    this.state = {
      weathers: [],
      loading: true,
    };
  }

  onGetForcast() {
    this.setState({
      loading: true,
    });
    getForcastByCountry(this.props.selectedCity).then((d) => {
      this.setState({
        weathers: d,
        loading: false,
      });
    });
  }

  componentDidMount(): void {
    this.onGetForcast();
  }

  componentDidUpdate(prevProps: Readonly<IProps>): void {
    if (prevProps.selectedCity !== this.props.selectedCity) {
      this.onGetForcast();
    }
  }

  render(): React.ReactNode {
    return this.state.loading ? (
      <LoadingBox />
    ) : (
      <div className="w-fit h-full shadow-lg  rounded-lg border-8 border-white bg-white">
        <div className="border-b-8 border-white rounded-lg">
          {this.state.weathers?.[0] && (
            <ForcastBox size="big" weather={this.state.weathers[0]} />
          )}
        </div>
        <div className="grid grid-cols-4 gap-x-2">
          {this.state.weathers?.map(
            (weather, i) =>
              i !== 0 && <ForcastBox size="small" weather={weather} key={i} />
          )}
        </div>
      </div>
    );
  }
}

export default WeatherContainer;
