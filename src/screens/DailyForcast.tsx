import React from "react";
import CountryTabsContainer from "../containers/CountryTabsContainer";
import WeatherContainer from "../containers/WeatherContainer";
import MainLayout from "../layout/MainLayout";
import { ICity } from "../models/country";
import { CITY_LIST } from "../services/country";

interface IProps {}

interface IState {
  selectedCity: ICity;
}

class DailyForcast extends React.Component<IProps, IState> {
  selectedCity: ICity = null!;

  constructor(props: IProps) {
    super(props);

    this.state = {
      selectedCity: CITY_LIST[0],
    };
  }

  onSelectCity(city: ICity) {
    this.setState({
      ...this.state,
      selectedCity: city,
    });
  }

  render(): React.ReactNode {
    return (
      <MainLayout>
        <CountryTabsContainer
          selectedCity={this.state.selectedCity}
          onSelectCity={this.onSelectCity.bind(this)}
        />
        <WeatherContainer selectedCity={this.state.selectedCity} />
      </MainLayout>
    );
  }
}

export default DailyForcast;
