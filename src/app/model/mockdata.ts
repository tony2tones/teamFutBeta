import { Injectable } from '@angular/core';
import { of } from 'rxjs';

 export interface Game {
  id: string;
  title: string;
  location: string;
  date: string;
  time: string;
  players: Players[];
}


 interface Players {
  name: string;
  state: string;
}

export const games = [
    {
    id: '1',
    title: 'Fives Sunday',
    location: 'Rhodes',
    date: '18 Jan 2021',
    time: '09:00',
    players: [
      { name: 'Tony', state: 'confirmed' },
      { name: 'Donny', state: 'confirmed' },
      { name: 'Kenny', state: 'maybe' },
      { name: 'Serg', state: 'confirmed' },
      { name: 'Farrel', state: 'confirmed' },
      { name: 'Kyle', state: 'confirmed' },
      { name: 'Braulio', state: 'confirmed' }
    ]
  },
  {
    id: '2',
    title: 'Mid week madness Wednesday',
    location: 'Century City',
    date: '24 Jan 2021',
    time: '11:00',
    players: [
      { name: 'Tony', state: 'confirmed' },
      { name: 'Donny', state: 'confirmed' },
      { name: 'Kenny', state: 'maybe' },
      { name: 'Serg', state: 'confirmed' }
    ]
  },
  {
    id: '3',
    title: 'Fives Sunday',
    location: 'Rhodes',
    date: '18 Jan 2021',
    time: '09:00',
    players: [
      { name: 'Tony', state: 'confirmed' },
      { name: 'Donny', state: 'confirmed' },
      { name: 'Kenny', state: 'maybe' },
      { name: 'Serg', state: 'confirmed' },
      { name: 'Farrel', state: 'confirmed' },
      { name: 'Kyle', state: 'confirmed' },
      { name: 'Braulio', state: 'confirmed' }
    ]
  },
  {
    id: '4',
    title: 'Mid week madness Wednesday',
    location: 'Century City',
    date: '24 Jan 2021',
    time: '11:00',
    players: [
      { name: 'Tony', state: 'confirmed' },
      { name: 'Donny', state: 'confirmed' },
      { name: 'Kenny', state: 'maybe' },
      { name: 'Serg', state: 'confirmed' }
    ]
  }
]

@Injectable()
export class MockValues {
  getMockValues() {
    return of(games);
  }
}