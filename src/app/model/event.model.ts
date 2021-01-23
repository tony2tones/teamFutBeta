
export interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  time: string;
  players: Players[];
}

export interface Player {
  name: string;
  state: string;
}

export interface Players {
  players: Player;
}

