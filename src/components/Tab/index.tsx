import React from "react";
import { ICity } from "../../models/country";
import "./index.less";

interface IProps {
  country: ICity;
  selected: boolean;
  onSelect(city: ICity): void;
}

class Tab extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <span className="mx-1 md:mx-5">
        <a
          data-title={this.props.country.name}
          href={`#${this.props.country.country}`}
          className={`${
            this.props.selected ? "active" : "font-thin"
          } inline-block transition ease-in-out duration-300 hover:drop-shadow-xl title text-2xl md:text-5xl mx-3 md:mx-5 whitespace-nowrap`}
          onClick={this.props.onSelect.bind(this, this.props.country)}
        >
          {this.props.country.name}
        </a>
      </span>
    );
  }
}

export default Tab;
