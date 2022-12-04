import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Order } from '../shared/models/order.model';
import { OrderSevice } from '../shared/models/order.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  order1 : Order[] = [];
  map!: L.Map;
  innerHeight: any;
  containerHeight!:number;
  icon:any;
  pendingOrders!: Order[];
  @Input() pickUp!: (order:Order) => void;
  dateNow = new Date();
  vreme: Date;
  // @Input() userId!: number;

  constructor(private orderService:OrderSevice) { }

  ngOnInit() {
    this.initMap();
    this.defineIcons();
    this.getPendingOrders()
  }

  defineIcons() {
    let iconUrl = '../assets/img/icons8-google-maps-old.svg';
    this.icon = L.icon({
      iconUrl
    });
  }

  initMap() {
    this.map = L.map('map', {
      center: [ 45.2396, 19.8227],
      zoom: 14
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    tiles.addTo(this.map);
  }
  getPendingOrders() {
    this.orderService.getOrders().subscribe(

      data => {
        data.forEach((item) => {
          if(item.deliverer===""){
          this.order1.push(item);

          }
        
        }
        )
        this.pendingOrders = this.order1;
        this.addOrderMarkers(this.pendingOrders)
      }
    )
  }
  addOrderMarkers(orders:Order[]){
    orders.forEach(element => {

      let marker = L.marker([element.lat, element.lon], {icon:this.icon});
      marker.addTo(this.map);
      marker.on('click', (e) => {
        this.pickup(element);
      });
    });
  }

  pickup(order: Order) {
    order.deliverer = localStorage.getItem('emaill');

    this.vreme = new Date(new Date(this.dateNow).getTime())
    if(this.vreme.getMinutes()>44)
         order.time=(this.vreme.getHours()+1).toString()+":"+(this.vreme.getMinutes()-45).toString();
    else
         order.time=this.vreme.getHours().toString()+":"+(this.vreme.getMinutes()+15).toString();

    this.orderService.updateOrder(order).subscribe(// mora se neko pretlatiti
         data =>{
          window.location.reload();
         },
         error=>{
           alert("Greska")
         }
    )
  }

}
