import {Document } from 'mongoose';


export interface Restaurant extends Document{
    _id?: string;
    name: string;
    address: string;
     photoURL:string;
  startDay?: string;
  startHourMinutes?:string;
  endDay?:string;
  endHourMinutes?:string
}