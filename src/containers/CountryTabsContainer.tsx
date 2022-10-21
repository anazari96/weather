import React from "react";
import Tab from "../components/Tab";
import { ICity } from "../models/country";
import { CITY_LIST, getCities } from "../services/country";

interface IProps {
  selectedCity: ICity;
  onSelectCity(city: ICity): void;
}

interface IState {}

class CountryTabsContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  _isSelected(city: ICity) {
    return this.props.selectedCity.name === city.name;
  }

  render(): React.ReactNode {
    return (
      <div className="w-fit flex flex-row justify-start md:justify-center pb-8 overflow-x-scroll">
        {getCities().map((city) => (
          <Tab
            selected={this._isSelected(city)}
            country={city}
            onSelect={this.props.onSelectCity.bind(this)}
            key={city.name}
          />
        ))}
      </div>
    );
  }
}

export default CountryTabsContainer;
