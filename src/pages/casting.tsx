import { useEffect } from "react"

export default function Casting() {
    var x: unknown = 'hello'

    useEffect(() => {
        console.log((x as string).length)
        // casting means converting to another data type
    }, [])

    return (
        <>
            {x}
        </>
    )
}