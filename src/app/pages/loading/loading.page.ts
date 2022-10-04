import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;
  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async mostrarLoading(){
    this.loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
      spinner: 'lines-small'
    });

    this.loading.present();
  }
}
