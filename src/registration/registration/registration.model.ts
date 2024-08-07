import * as mangoose from 'mongoose';

export const registrationSchema = new mangoose.Schema({
    firstName: {type: String, required : true},
    lastName : {type: String, required : true},
    password : {type: String, required : true},
    email : {type : String, required : true},
    contact : {type : Number, required : true}
})


export interface Registration {
    _id: number; 
    firstName: String, 
    lastName : String, 
    password : String, 
    email : String, 
    contact : Number,
}

