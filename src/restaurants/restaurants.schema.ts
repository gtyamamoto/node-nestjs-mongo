import * as mongoose from 'mongoose';

export const RestaurantsSchema = new mongoose.Schema({
  name: String,
  address: String,
  photoURL:String,
  startDay: String,
  startHourMinutes:String,
  endDay:String,
  endHourMinutes:String
});
