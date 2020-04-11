import { Component, OnInit } from '@angular/core';
import { take, orderBy, map, chain } from 'lodash-es';

const players = [
  { player: 'Aleksandar Mitrovic', goals: 10, shots: 118 },
  { player: 'Mohamed Salah', goals: 19, shots: 116 },
  { player: 'Harry Kane', goals: 17, shots: 110 },
  { player: 'Sergio Agüero', goals: 19, shots: 99 },
  { player: 'Raùl Jiménez', goals: 12, shots: 96 },
  { player: 'Paul Pogba', goals: 13, shots: 93 },
  { player: 'Eden Hazard', goals: 16, shots: 86 },
  { player: 'Pierre-Emerick Aubameyang', goals: 18, shots: 81 },
  { player: 'Gylfi Sigurdsson', goals: 12, shots: 78 },
  { player: 'Sadio Manè', goals: 18, shots: 77 },
];

@Component({
  selector: 'xavitest-mylib',
  templateUrl: './mylib.component.html',
  styleUrls: ['./mylib.component.css']
})
export class MylibComponent implements OnInit {
  showAlert = false;
  res;
  /* sorted: any[];
  top3: any[];
  result: any; */
  constructor() { }

  ngOnInit(): void {
   /*  this.sorted = orderBy(players, ['goals', 'shots'], ['desc', 'asc']);
    this.top3= take(this.sorted, 3);
    this.result = map(this.top3, 'player'); */

    this.res = chain(players)
      .orderBy(['goals', 'shots'], ['desc', 'asc'])
      .take(3)
      .map('player');

  }



}
