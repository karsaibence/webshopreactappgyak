import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { KosarContext } from '../../context/KosarbaTesz'

const NavItem = (props) => {
    const { kosarMeret } = useContext(KosarContext)
    return (
        <li className={props.link}>
            <Link to={props.link}>{props.nev}</Link>
            {props.nev === 'Kosár' && kosarMeret() > 0 && (
                <span className='kosar-meret'>{kosarMeret()}</span>
            )}
        </li>
    )
}

export default NavItem