import mongoose,{Schema} from "mongoose";
import { User } from "../user/userTypes";

const userSchema=new Schema<User>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
// collection will be taken in plural form

export default mongoose.model<User>("user",userSchema)