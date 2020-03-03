import React from 'react'
import style from "../styles/Header.module.css";
import {Link} from "react-scroll";


export const LinkComponent = ({link}) =>{
    return(
        <Link
            activeClass={style.active}
            to={link.nameLink}
            spy={true}
            smooth={true}
            offset={link.indent}
            duration={500}>
            {link.nameLink}</Link>
    )
}