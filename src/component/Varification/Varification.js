import React from "react";
import "./Varification.css";

function Varification() {
    return (
        <div className="main-container">
            <div className="header">
                <div className="nav-bar">
                    <div className="icon4">
                        <img src="assets/Group.jpg"></img>
                        <img style={{width:"135px", height:"20px"}} src="assets/CARIBBEANEAZE.png"></img>
                    </div>
                    <div>
                        <button className="badge4"> Become a User</button>
                    </div>
                </div>
                <hr></hr>
                <div className="Title4">
                    <b>Complete these Steps</b>
                    {/* <div>lorem ipsum dolor emet conseteur </div> */}
                </div>
            </div>
            <hr width="87%"></hr>
            <div className="middle-container">
                <input type="checkbox" id="check" />
                <div class="btn_one">
                    <label for="check" >
                        <i class="fa-solid fa-bars"></i>
                    </label>
                </div>
                <div className="side-bar">

                    <div class="btn_two">
                        <label for="check">
                            <i class="fa-solid fa-xmark"></i>
                        </label>
                    </div>
                    <div className="side-bar-info">
                        <div>
                            <b>Personal Information</b>
                            <div style={{ fontSize: "13px", paddingLeft: "42px" }}>Enter and Complete</div>
                        </div>
                        <div style={{ height: "33px", width: "30px", background: "#FEF0EC", borderRadius: "50%", padding: "5px 0 0 7px" }}>
                            <img src="assets/user.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#F15A29", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
                    </div>

                    <div className="side-bar-info">
                        <div>
                            <b>Upload Profile Picture</b>
                            <div style={{ fontSize: "13px", paddingLeft: "49px" }}>Upload Information</div>
                        </div>
                        <div style={{ height: "33px", width: "30px", background: "#FEF0EC", borderRadius: "50%", padding: "5px 0 0 7px" }}>
                            <img src="assets/camera2.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#F15A29", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
                    </div>

                    <div className="side-bar-info">
                        <div>
                            <b>Verify Phone Number</b>
                            <div style={{ fontSize: "13px", paddingLeft: "24px" }}>Register Phone Number</div>
                        </div>
                        <div style={{ height: "33px", width: "30px", background: "#FEF0EC", borderRadius: "50%", padding: "5px 0 0 7px" }}>
                            <img src="assets/mobile2.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#F15A29", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
                    </div>

                    <div className="side-bar-info">
                        <div>
                            <b>Passport/ID Varification</b>
                            <div style={{ fontSize: "13px", paddingLeft: "96px" }}>Verify Yourself</div>
                        </div>
                        <div style={{ height: "33px", width: "30px", background: "#FEF0EC", borderRadius: "50%", padding: "5px 0 0 7px" }}>
                            <img src="assets/personalcard2.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#F15A29", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
                    </div>

                    <div className="side-bar-info">
                        <div>
                            <b style={{ opacity: ".5" }}>List your Property</b>
                            <div style={{ fontSize: "13px", paddingLeft: "38px", opacity: ".5" }}>Fill Property Info</div>
                        </div>
                        <div style={{ height: "33px", width: "30px", background: "#F1F5F9", borderRadius: "50%", padding: "5px 0 0 7px" }}>
                            <img src="assets/Home.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#94A3B8", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
                    </div>
                    <div className="side-bar-info">
                        <div>
                            <b style={{ paddingLeft: "12px", opacity: ".5" }}>Property Location</b>
                            <div style={{ fontSize: "13px", opacity: ".5" }}>Choose Property Location</div>
                        </div>
                        <div style={{ height: "32px", width: "29px", background: "#F1F5F9", borderRadius: "50%", padding: "6px 0 0 11px" }}>
                            <img src="assets/location.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#94A3B8", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
                    </div>

                    <div className="side-bar-info">
                        <div>
                            <b style={{ paddingLeft: "14px", opacity: ".5" }}>Property images</b>
                            <div style={{ fontSize: "13px", opacity: ".5" }}>Upload Property Images</div>
                        </div>
                        <div style={{ height: "33px", width: "30px", background: "#F1F5F9", borderRadius: "50%", padding: "6px 0 0 7px" }}>
                            <img src="assets/gallery.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#94A3B8", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
                    </div>

                    <div className="side-bar-info">
                        <div>
                            <b style={{ paddingLeft: "10px", opacity: ".5" }}>Amenties & Services</b>
                            <div style={{ fontSize: "13px", opacity: ".5" }}>Choose Amenties & Services</div>
                        </div>
                        <div style={{ height: "33px", width: "30px", background: "#F1F5F9", borderRadius: "50%", padding: "5px 0 0 7px" }}>
                            <img src="assets/home-wifi.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#94A3B8", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
                    </div>
                </div>
                <div className="discription">
                    <b>Step 4/8</b>
                    <div className="heading">Passport/ID Verfication </div>
                    <p >Upload a goverment-issued ID that clearly shows your full name and complete photo.The doucment must be a cleared high-resolution color copy of the complete (uncropped) orginal doucment with no information obscured by camera’s flash.</p>
                    <form >
                        <div className="form3">
                            <div >
                                <div><label for="Country">Country</label></div>
                                <input className="form-input3" type="text" id="Country"></input>
                            </div>
                            <div>
                                <input type="radio" id="Passport" name="id" value="Passport"></input><label for="Passport">Passport</label><br></br>
                                <input type="radio" id="NationalID" name="id" value="NationalID"></input><label for="NationalID">National ID</label>
                            </div>
                        </div>
                        <div className="info-div">
                            <div>Drag your files or <b>Browse</b></div>
                            <div>Add Both Side Image of National ID Card</div>
                        </div>
                        <div className="button-div">
                            <button type="submit" className="button" style={{ background: "#ffffff", color: "#000" }} > Back </button>
                            <button type="submit" className="button" > Next </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Varification;