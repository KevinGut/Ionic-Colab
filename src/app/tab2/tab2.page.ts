import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorePage } from '../store/store.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public navCtrl: NavController) {}
  
  button = "GO AN OTHER PAGE";
  goAnOtherPage(){
    this.navCtrl.navigateRoot('store');
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.changeTextButton();
    }, 2000);
  }
  changeTextButton(){
    this.button = "Actualizado"
  }
}
