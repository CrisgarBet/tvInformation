import { Links2 } from "./links2.interface";
import { Rating } from "./rating.interface";
import { Show } from "./show.interface";

export interface TvShow {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: Rating;
  image: any;
  summary: any;
  show: Show;
  _links: Links2;
}
