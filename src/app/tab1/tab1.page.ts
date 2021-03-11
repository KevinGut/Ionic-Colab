import { Component, OnInit} from '@angular/core';
import { CITIES } from '../../../setupConfig';
import { ModalController } from '@ionic/angular';
import { CityComponent } from '../city/city.component';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(public modalCntrl: ModalController,
    private storage: Storage,) {}
  cities;
  ngOnInit(){
    this.cities = CITIES;
    
  }

  async cardModal(city){
    console.log(city);
    this.storage.set("City", city);
    const modal = await this.modalCntrl.create({
      component: CityComponent,
    });
    return await modal.present();
  }
  
}
