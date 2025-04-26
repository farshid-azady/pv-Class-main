import {CURRENTLINE, ORANGE, PINK} from "../../helpers/colors";
import Loader from "../Loader";
import {Contact} from "./Contact";

export const Contacts = ({ contacts,isloading}) => {
    return (
        <>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">

                            <p className="h3">
                                <button className="btn btn-lg mx-2" style={{backgroundColor: PINK}}>
                                   افزودن مخاطب
                                    {" "}
                                    <i className="fas fa-plus-circle"/>
                                </button>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            {isloading?<Loader/>: <section className="container">
                <div className="row">
                    {contacts.length>0?contacts.map(contact=> <Contact key={contact.id}/>):(

                        <div className="text-center py-5" style={{backgroundColor:CURRENTLINE}}>
                            <p className="h3" style={{color:ORANGE}}>
                                مخاطب یافت نشد .
                            </p>
                            <img className="w-25" alt="not Found" src={require("../../assets/no-found.gif")}/>
                        </div>
                    )}

                </div>
            </section>}
           
        </>
    )
}

