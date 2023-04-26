import React from 'react'
import {useTitle} from "../hooks/useTitle";


export function GetMainPage() {
    useTitle()
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <h1 className="mx-auto text-center font-bold text-2xl">Hi, you've landed on a knowledge check site.</h1>
        </div>
    )
}
