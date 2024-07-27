'use server'
import { revalidatePath } from "next/cache"
import {deleteEmployee} from "../_utils/_api"

export const deleteAction = async(id:any)=>{
    'use server'
 
try{
    // const formObject = Object.fromEntries(formData.entries());
let res=await deleteEmployee(id)
console.log(res)
revalidatePath('/');
return "success"

}
catch(err){
    console.error(err)
}
}