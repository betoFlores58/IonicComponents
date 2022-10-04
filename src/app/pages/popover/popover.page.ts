import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  roleMsg = '';

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: e,
      translucent: true,
      backdropDismiss: false
    });

    await popover.present();

    //obetner la data de la lista popoverinfo
    const {data} = await popover.onWillDismiss();
    console.log(data);
  }
}
