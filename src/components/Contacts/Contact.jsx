import React from 'react'
import {CURRENTLINE, ORANGE, PURPLE, RED} from "../../helpers/colors";

export const Contact = () => {
    return (
        <div className="col-md-6 ">
            <div style={{backgroundColor: CURRENTLINE}} className="card my-2">
                <div className="card-body">
                    <div className="row aling-items-center d-flex justify-content-around">
                        <div className="col-md-4 col-sm-4">
                            <img src="https://placehold.co/600x400" alt=""
                                 style={{border: `1px solid ${PURPLE}`}} className="img-fluid rounded"/>

                        </div>
                        <div className="col-md-7 col-sm-7">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark">نام و نام
                                    خانوادگی: <span className="fw-bold">
                                              {"   "} فرشید آزادی
                                                </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">شماره موبایل:
                                    <span className="fw-bold">
                                                 {"  "} 09112502502
                                                </span>
                                </li>
                                <li className="list-group-item list-group-item-dark"> ایمیل :{" "} <span
                                    className="fw-bold">
                                                {"  "} fafa@gmail.com
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
