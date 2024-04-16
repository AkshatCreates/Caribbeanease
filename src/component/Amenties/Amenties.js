import React from "react";
import "./Amenties.css";

function Amenties() {
    return (
        <div className="main-container">
            <div className="header">
                <div className="nav-bar">
                    <div className="icon5">
                        <img src="assets/Group.jpg"></img>
                        <img style={{width:"135px", height:"20px"}} src="assets/CARIBBEANEAZE.png"></img>
                    </div>
                    <div>
                        <button className="badge5"> Become a User</button>
                    </div>
                </div>
                <hr></hr>
                <div className="Title5">
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
                <div className="side-bar side-bar2">

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
                            <b style={{ paddingLeft: "14px"}}>Property images</b>
                            <div style={{ fontSize: "13px"}}>Upload Property Images</div>
                        </div>
                        <div style={{ height: "33px", width: "30px", background: "#FEF0EC", borderRadius: "50%", padding: "6px 0 0 7px" }}>
                            <img src="assets/gallery2.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#F15A29", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
                    </div>

                    <div className="side-bar-info">
                        <div>
                            <b style={{ paddingLeft: "10px"}}>Amenties & Services</b>
                            <div style={{ fontSize: "13px"}}>Choose Amenties & Services</div>
                        </div>
                        <div style={{ height: "33px", width: "30px", background: "#FEF0EC", borderRadius: "50%", padding: "5px 0 0 7px" }}>
                            <img src="assets/home-wifi2.png"></img>
                        </div>
                        <div className="dot" style={{ height: "10px", width: "10px", background: "#F15A29", borderRadius: "50%", margin: "10px 0 0 0" }}></div>
                    </div>
                </div>
                <div className="discription">
                    <div className="discription-heading" >
                        <b>Step 8/8</b>
                        <div className="heading">Choose Amenties and Extra Services</div>
                        <nav>Choose Amenties & Extra Service which you are providing </nav>
                    </div> 
                    <br></br> 
                    <b>Amenties</b>
                    <div className="btn-container">
                        <button className="Amenties-btn">Wifi</button>
                        <button className="Amenties-btn">Washer</button>
                        <button className="Amenties-btn">Kitchen</button>
                        <button className="Amenties-btn">Dryer</button>
                        <button className="Amenties-btn">Air Conditioning</button>
                        <button className="Amenties-btn">Heating</button>
                        <button className="Amenties-btn">Hair Dryer</button>
                        <button className="Amenties-btn">TV</button>
                        <button className="Amenties-btn">Dedicated Workspace</button>
                        <button className="Amenties-btn">Iron</button>
                    </div> 
                    <br></br> 
                    <b>Extra Service</b>
                    <div className="btn-container">
                        <button className="Amenties-btn" style={{background:"#F15A29",color:"white"}}>Rafting</button>
                        <button className="Amenties-btn" style={{background:"#F15A29",color:"white"}}>Exotic Food</button>
                        <button className="Amenties-btn">Pick and Drop</button>
                        <button className="Amenties-btn">Breakfast</button>
                        <button className="Amenties-btn">BBQ</button>
                    </div>                 
                    <form >
                        <br></br>
                        <hr style={{opacity:".5"}}></hr>
                        <br></br>
                        <b>Rafting</b>
                        <div className="form6">

                            <div>
                                <div><label className="form-label"  for="Price">Select Service for Number of Guest</label></div>
                                <input className="form-input6" id="Price" value="1"></input>
                            </div>
                            <div>
                                <div><label className="form-label"  for="Price">Price </label></div>
                                <input className="form-input6" id="Price"></input>
                            </div>
                            <div>
                                <div><label for="Description">Rafting Description</label></div>
                                <textarea rows={4.5} cols={97} id="Description" placeholder="Enter your Property Description" ></textarea>
                            </div>
                        </div>
                        <p>Rafting Certifcate</p>
                        <div className="info-div">
                            <div>Drag your files or <b>Browse</b></div>
                            <div>Add Both Side Image of National ID Card</div>
                        </div>
                        <br></br>
                        <hr  style={{opacity:".5"}}></hr>
                        <br></br>
                        <b>Exotic Food</b>
                        <div className="form6">

                            <div>
                                <div><label className="form-label"  for="Price">Select Service for Number of Guest</label></div>
                                <input className="form-input6" id="Price" value="5"></input>
                            </div>
                            <div>
                                <div><label className="form-label"  for="Price">Price </label></div>
                                <input className="form-input6" id="Price"></input>
                            </div>
                            <div>
                                <div><label for="Description">Exotic Food Description</label></div>
                                <textarea rows={4.5} cols={97} id="Description" placeholder="Enter your Property Description" ></textarea>
                            </div>
                        </div>
                        <p>Upload Certifcate</p>
                        <div className="info-div">
                            <div>Drag your files or <b>Browse</b></div>
                            <div>Add Both Side Image of National ID Card</div>
                        </div>
                        <div className="button-div1">
                            <button type="submit" className="button" style={{ background: "#ffffff", color: "#000" }} > Back </button>
                            <button type="submit" className="button" > Finish </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Amenties;