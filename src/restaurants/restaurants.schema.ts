import * as mongoose from 'mongoose';

export const RestaurantsSchema = new mongoose.Schema({
  name: String,
  address: String,
  photoURL:String,
  startDay: Number,
  startHourMinutes:{
    type:String,
    validate: {
       validator:function(value) {
        const timeEnds = Number(this.endHourMinutes.split(':')[0])*60 + Number(this.endHourMinutes.split(':')[1])
        const timeStarts = Number(value.split(':')[0])*60 
        + Number(value.split(':')[1])
          return ((timeStarts+15)<=timeEnds);
      }
  }},
  endDay:Number,
  endHourMinutes:{
    type:String,
    validate:{ 
      validator : function (value) {
        const timeEnds = Number(value.split(':')[0])*60 + Number(value.split(':')[1])
        const timeStarts = Number(this.startHourMinutes.split(':')[0])*60 
        + Number(this.startHourMinutes.split(':')[1])
          return ((timeStarts+15)<=timeEnds);
      }
    }
  }
});
