import { Product } from "./product.model";


export class Order{

  id : number;
  address:string;
  quantity: number = 0;
  comment: string = "";
  deliverer: string="";
  delivered:boolean=false;

  price: number=0;
  customer:string="";
  nameOfProduct : string="";
  priceOfProduct: number=0;
  ingredients: string ="";
  time: string="";
  min:number;
lon: number=0;
lat: number=0;



}
