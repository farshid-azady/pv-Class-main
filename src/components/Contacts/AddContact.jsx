import { Link } from "react-router-dom";
import  {Contact}  from "./Contact";


import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";
import Loader from "../Loader";

const AddContact = ({
  isloading,
  contact,
  setContactInfo,
  groups,
  createContactForm,
}) => {
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <>
          <section className="p-3">
            <img
            alt="man taking note"
              src={require("../../assets/man-taking-note.png")}
              height="400px"
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "130px",
                left: "100px",
                opacity: "50%",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: GREEN }}
                  >
                    ساخت مخاطب جدید
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col-md-4">
                  <form onSubmit={createContactForm}>
                    <div className="mb-2">
                      <input
                        name="fullname"
                        type="text"
                        value={Contact.fullname}
                        onChange={setContactInfo}
                        className="form-control"
                        placeholder="نام و نام خانوادگی"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="photo"
                        type="text"
                        value={Contact.photo}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="آدرس تصویر"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="mobile"
                        type="number"
                        value={Contact.mobile}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="شماره موبایل"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        name="email"
                        value={Contact.email}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="آدرس ایمیل"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="job"
                        value={Contact.job}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="شغل"
                      />
                    </div>
                   
                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: PURPLE }}
                        value="ساخت مخاطب"
                      />
                      <Link
                        to={"/contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: COMMENT }}
                      >
                        انصراف
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AddContact;
