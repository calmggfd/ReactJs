import { useState } from "react"

export function App ()  {
    const [fact, setFact]   = useState('lorem ipsum  cat fact whatever')
    return(
        <main>
            <h1>App De Gatitos</h1>
            <p>{fact} </p>
        </main>

    )
}