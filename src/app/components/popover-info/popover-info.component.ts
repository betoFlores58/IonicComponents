import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {
  items = Array(40);
  constructor(private popOver: PopoverController) {}

  ngOnInit() {}

  onClick(valor: number){
    this.popOver.dismiss({
      item: valor
    });
  }
}
