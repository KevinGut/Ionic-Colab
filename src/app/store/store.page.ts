import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';



@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor(public navCtrl: NavController,
    private menu: MenuController) { }

  ngOnInit() {
  }

  backHome(){
    this.navCtrl.navigateRoot('');
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
