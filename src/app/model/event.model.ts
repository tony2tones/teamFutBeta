import { Player } from "./player.model";

export interface Event {
  eventId: string;
  title: string;
  location: string;
  date: string;
  time: string;
  players: Players[];
}

export interface Players {
  players: Player;
}