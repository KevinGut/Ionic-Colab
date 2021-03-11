import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {

  constructor(private storage: Storage,) { }
  city
  cityname
  ngOnInit() {
    this.storage.get("City").then(city => {
      this.city = city;
      this.cityname = city['capital'];
    });
  }

}
