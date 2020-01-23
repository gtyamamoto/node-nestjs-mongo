import * as mongoose from 'mongoose';
const {Schema} = mongoose;
export const ProductSchema = new mongoose.Schema({
  name: {
    type:String,
  },
  category: String,
  photoURL:String,
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
  promoDay: Number,
  price:Number,
  pricePromo:Number,
  startHourMinutes:{
    type:String}
});
