import React from 'react'
import Kartyak from '../components/kartyak/Kartyak'
import { termekek } from '../components/forras/termekek'
import "./fooldal.css"


const Fooldal = () => {
    return (
        <article>
            <Kartyak lista={termekek} />
        </article>
    )
}

export default Fooldal