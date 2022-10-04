import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componentes } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  /*componentes: Componente[] = [
    {
    icon: 'american-football',
    name: 'T.J. Watt',
    redirectTo: '/action-sheet'
    },
    {
    icon: 'basketball-outline',
    name: 'LeBron James',
    redirectTo: '/action-sheet'
    },
    {
    icon: 'baseball-outline',
    name: 'Derek Jeter',
    redirectTo: '/action-sheet'
    }
];*/
  componentes: Observable<Componentes[]>;

  constructor(private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }
  mostrarMenu(){
    this.menuCtrl.open();
  }
}
