import {Document } from 'mongoose';


export interface Product extends Document{
    _id?: string;
    name: string;
    category:string;
     photoURL:string;
     restaurant:string;
     price:number;
  pricePromo?: number;
  startHourMinutes?:string;
  promoDay?:string;
}