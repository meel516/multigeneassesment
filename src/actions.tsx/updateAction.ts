'use server'
import { revalidatePath } from "next/cache"
import {updateEmployee} from "../_utils/_api"

export const updateAction = async(id:any,formData:FormData)=>{
    'use server'
console.log(formData,"honey")
try{
    const formObject = Object.fromEntries(formData.entries());
let res=await updateEmployee(id,formObject)
console.log(res)
revalidatePath('/');
return "success"

}
catch(err){
    console.error(err)
}
}