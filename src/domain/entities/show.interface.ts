import { Image } from "react-native";
import { Externals } from "./externals.interface";
import { Links } from "./links.interface";
import { Network } from "./network.interface";
import { Rating2 } from "./rating2.interface";
import { Schedule } from "./schedule.interface";

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: any[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: any;
  officialSite: string;
  schedule: Schedule;
  rating: Rating2;
  weight: number;
  network: Network;
  webChannel: any;
  dvdCountry: any;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}
