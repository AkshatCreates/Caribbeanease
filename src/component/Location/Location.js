import React from "react";
import "./Location.css";

function Location() {
    return (
        <div className="main-container">
            <div className="header">
                <div className="nav-bar">
                    <div className="icon6">
                        <img src="assets/Group.jpg"></img>
                        <img style={{width:"135px", height:"20px"}} src="assets/CARIBBEANEAZE.png"></img>
                    </div>
                    <div>
                        <button className="badge6"> Become a User</button>
                    </div>
                </div>
                <hr></hr>
                <div className="Title6">
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
                            <b>List your Property</b>
                            <div style={{ fontSize: "13px", paddingLeft: "38px" }}>Fill Property Info</div>
                        </div>
                        <div style={{ height: "33px", width: "30px", background: "#FEF0EC", borderRadius: "50%", padding: "5px 0 0 7px" }}>
                            <img src="assets/Home2.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#F15A29", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
                    </div>
                    <div className="side-bar-info">
                        <div>
                            <b style={{ paddingLeft: "12px" }}>Property Location</b>
                            <div style={{ fontSize: "13px" }}>Choose Property Location</div>
                        </div>
                        <div style={{ height: "32px", width: "29px", background: "#FEF0EC", borderRadius: "50%", padding: "6px 0 0 11px" }}>
                            <img src="assets/location2.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#F15A29", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
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
                    <div className="discription-heading" >
                        <b>Step 6/8</b>
                        <div className="heading">Where are you Located</div>
                       <nav> Please Complete these Location info of your property</nav>
                    </div>
                    <form >
                        <div className="form5">
                            <div >
                                <div><label for="Property">Select Country/Region</label></div>
                                <select className="form-select" id="Property">
                                    <option>Select Country</option>
                                </select>
                            </div>
                            <div >
                                <div><label for="Property">State</label></div>
                                <select className="form-select" id="Property">
                                    <option>Select State</option>
                                </select>
                            </div>
                            <div >
                                <div><label for="Property">City</label></div>
                                <select className="form-select" id="Property">
                                    <option>Select City </option>
                                </select>
                            </div>
                            <div >
                                <div><label for="Address">Street Address</label> </div>
                                <input className="form-input5" type="text" placeholder="Enter Your Street Address" id="Address"></input>
                            </div>
                            <div>
                                <button type="submit" className="submit-button">Use current location</button>
                            </div>
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


export default Location;