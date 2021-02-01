
export interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  time: string;
  players: [{name:string,state:string}];
}

export interface Player {
  name: string;
  state: string;
}

export interface Players {
  player: Player;
}

