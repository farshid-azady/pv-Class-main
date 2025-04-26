import React from 'react'
import {PURPLE} from "../../helpers/colors";

export const SearchContact = () => {
    return (
        <div className="col">
            <div className="input-group mx-2 w-75" dir="ltr">
                <span className="input-group-text"
                      id="basic-addon1"
                      style={{ backgroundColor: PURPLE }}><i className="fas fa-search"/></span>
                <input dir="rtl"
                       type="text"
                       className="form-control"
                       placeholder="جستجوی مخاطب"
                       aria-label="Search"
                       aria-describedby="basic-addon1"/>
            </div>
        </div>
    )
}
