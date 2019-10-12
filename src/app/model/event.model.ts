import { Player } from "./player.model";

export interface Event {
  title: string;
  location: string;
  date: string;
  time: string;
  players: Players[];
}

export interface Players {
  players: [];
}