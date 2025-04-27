import React from 'react'
import {CURRENTLINE, ORANGE, PURPLE, RED} from "../../helpers/colors";

export const Contact = ({contact}) => {
    return (
        <div className="col-md-6 ">
            <div style={{backgroundColor: CURRENTLINE}} className="card my-2">
                <div className="card-body">
                    <div className="row aling-items-center d-flex justify-content-around">
                        <div className="col-md-4 col-sm-4">
                            <img src={contact.photo} alt={contact.name}
                                 style={{border: `1px solid ${PURPLE}`}} className="img-fluid rounded"/>

                        </div>
                        <div className="col-md-7 col-sm-7">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark">نام و نام
                                    خانوادگی: <span className="fw-bold">
                                              {"   "}  {contact.fullname}
                                                </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">شماره موبایل:
                                    <span className="fw-bold">
                                                 {"  "} {contact.mobile}
                                                </span>
                                </li>
                                <li className="list-group-item list-group-item-dark"> ایمیل :{" "} <span
                                    className="fw-bold">
                                                {"  "} {contact.email}
                                                </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 flex-column align-items-center d-flex">
                            <button className="btn  " style={{backgroundColor: RED}}>
                                <i className="fa fa-eye"/>
                            </button>

                            <button className="btn my-1" style={{backgroundColor: ORANGE}}>
                                <i className="fa fa-edit"/>
                            </button>

                            <button className="btn  " style={{backgroundColor: PURPLE}}>
                                <i className="fa fa-trash"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
