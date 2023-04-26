import {useEffect} from "react";


export function useTitle() {
    const title: string = process.env.REACT_APP_TITLE!
    useEffect(() => {
        const prevTitle = document.title
        document.title = title
        return () => {
            document.title = prevTitle
        }
    })
}