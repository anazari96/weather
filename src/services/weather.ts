import moment from "moment";
import { ICity } from "../models/country";
import { IWeather } from "../models/weather";
import api, { appid } from "./api";

export const getForcastByCountry = async (city: ICity) => {
  try {
    const { data } = await api.get<{
      cnt: number;
      list: IWeather[];
    }>("/data/2.5/forecast", {
      params: {
        lat: city.lat,
        lon: city.lon,
        appid,
        units: "metric",
      },
    });

    const firstMoment = moment(data.list[0].dt_txt);
    const list: IWeather[] = [];
    for (let i = 0; i < 5; i++) {
      const tmp = data.list.find((item) =>
        firstMoment.isSame(moment(item.dt_txt), "day")
      );
      if (tmp) {
        list.push(tmp);
      }
      firstMoment.add(1, "d");
    }

    return list;
  } catch (error: any) {
    console.log("Error: ", error);
    throw error?.response.data;
  }
};
