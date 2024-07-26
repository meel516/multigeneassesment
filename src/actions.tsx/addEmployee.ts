'use server'
import { revalidatePath } from "next/cache"
import {createEmployee} from "../_utils/_api"
export const addEmployee = async(formData:FormData)=>{
    'use server'
console.log(formData,"honey")
try{
    const formObject = Object.fromEntries(formData.entries());
let res=await createEmployee(formObject)
console.log(res)
revalidatePath("/")
return "success"
}
catch(err){
    console.error(err)
}
}