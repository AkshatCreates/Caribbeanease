import React from "react";
import "./PhoneNumber.css";

function PhoneNumber() {
    return (
        <div className="main-container">
            <div className="header">
                <div className="nav-bar">
                    <div className="icon3">
                        <img src="assets/Group.jpg"></img>
                        <img style={{width:"135px", height:"20px"}} src="assets/CARIBBEANEAZE.png"></img>
                    </div>
                    <div>
                        <button className="badge3"> Become a User</button>
                    </div>
                </div>
                <hr></hr>
                <div className="Title3">
                    <b>Complete these Steps</b>
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
                            <b style={{ opacity: ".5" }}>Passport/ID Varification</b>
                            <div style={{ fontSize: "13px", paddingLeft: "96px", opacity: ".5" }}>Verify Yourself</div>
                        </div>
                        <div style={{ height: "33px", width: "30px", background: "#F1F5F9", borderRadius: "50%", padding: "5px 0 0 7px" }}>
                            <img src="assets/personalcard.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#94A3B8", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
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
                    <b>Step 3/8</b>
                    <div className="heading">Verify Phone Number</div>
                    {/* lorem ipsum dolor emet conseteur */}

                    <form >
                        <div className="form2">
                            <div >
                                <div><label for="Mobile">Mobile No.</label></div>
                                <input className="form-input2" type="number" id="Mobile"></input>
                            </div>
                            <div>
                                <b style={{ visibility:"hidden"}}>........................</b>
                                <button className="badge3" style={{ width: "90px" }}> Verify</button>
                            </div>
                        </div>
                        <div style={{ fontSize: "20px", fontWeight: "bolder", marginTop: "30px" }}>Enter 6 Digit Code and Verfiy your Phone Number</div>
                        <div className="pin-code">
                            <input type="number" className="form-input-2a"></input>
                            <input type="number" className="form-input-2a"></input>
                            <input type="number" className="form-input-2a"></input>
                            <input type="number" className="form-input-2a"></input>
                            <input type="number" className="form-input-2a"></input>
                            <input type="number" className="form-input-2a"></input>
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


export default PhoneNumber;