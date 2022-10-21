import { ICity } from "../models/country";

export const CITY_LIST: ICity[] = [
  {
    name: "London",
    lat: 51.5085,
    lon: -0.1257,
    country: "GB",
  },
  {
    name: "Toronto",
    lat: 43.6534817,
    lon: -79.3839347,
    country: "CA",
  },
  {
    name: "New York",
    lat: 40.7127281,
    lon: -74.0060152,
    country: "US",
  },
];

export const getCities = () => {
  return CITY_LIST;
};
