import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false,
      slot: 'start'
    },
    {
      name: 'secondary',
      selected: true,
      slot: 'end'
    },
    {
      name: 'tertiary',
      selected: false,
      slot: 'start'
    },
    {
      name: 'success',
      selected: true,
      slot: 'end'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  onClick(item){
    console.log(item);
  }
}
