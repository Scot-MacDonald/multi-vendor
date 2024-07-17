import React from "react";
import NewFarmerForm from "@/app/components/backoffice/NewFarmerForm";
import { getData } from "@/lib/getData";

export default async function page({params:{id}}){
    const user = await getData(`users/${id}`)
    console.log(user)
    return (
        <div className="flex flex-col gap-6 p-16">
            <div className="max-w-4xl p-4 mx-auto">
                <h2>Hello {user?.name}, Tell more about yourself</h2>
            </div>
            
            <NewFarmerForm user={user}/>
        </div>
    )
}