import React from 'react'
import Kartyak from '../kartyak/Kartyak'
import { termekek } from "../forras/termekek"

const Fooldal = () => {
    return (
        <article>
            <Kartyak termekek={termekek} />
        </article>
    )
}

export default Fooldal