import React from 'react'
import {SearchContact} from "./Contacts/SearchContact";
import {PURPLE,BACKGROUND} from "../helpers/colors";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark  shadow-lg" style={{backgroundColor:BACKGROUND}}>
            <div className="container">
                <div className="row w-100">
                    <div className="col ">
                        <div className='navbar-brand'>
                            <i className="fas fa-id-badge " style={{color: PURPLE}}/>
                            {"  "}
                            وب اپلیکیشن مدیریت{"  "}

                            <span style={{color: PURPLE}}>دانشجویان دوره</span>

                        </div>

                    </div>
                    <SearchContact/>
                </div>
            </div>
        </nav>
    )
}
