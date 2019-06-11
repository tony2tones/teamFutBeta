import { ConfirmedList } from "./confirmedList.model";

export interface Event {
  title: string;
  location: string;
  date: string;
  time: string;
  confirmed: ConfirmedList[];
}
