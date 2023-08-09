import { Nextepisode } from "./nextepisode.interface";
import { Previousepisode } from "./previusepisode.interface";
import { Self } from "./self.interface";

export interface Links {
  self: Self;
  previousepisode: Previousepisode;
  nextepisode: Nextepisode;
}
