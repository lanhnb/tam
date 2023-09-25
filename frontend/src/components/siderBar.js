import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import NavBar from './NavBar';
import { Link } from "react-router-dom";
import { logoutUser } from "./slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useState } from 'react'




const SiderBar = () => {
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);
    const Hclose = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);

        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    console.log(auth);

    const [isShown, setIsShown] = useState(false);
    const [hideF, sethideF] = useState(true)

    return <>
        <Helmet>
            <script src="" type="text/javascript"></script>
        </Helmet>
        

        <div id="mySidebar" className="w3-sidebar w3-bar-block w3-border-right w3-animate-left"
        >
            <Link to="/" className="w3-bar-item w3-button w3-border-bottom w3-large">
                <img className="w3-circle" src="" alt='name' /></Link>
            {/* <button id="myOverlay" onclick={Hclose} className="w3-bar-item w3-large">Close
                &times;</button> */}
            <button className="b11" onClick={Hclose}><span onClick={() => sethideF(!hideF)}>
                {hideF ? "X" : ""}
            </span></button>
            <Link to="/" className="w3-bar-item w3-button w3-red">Home</Link>
            <Link to="/nhadat" className="w3-bar-item w3-button"> <i className="fa fa-building"></i>  Nhà đất</Link>
            <Link to="/xkld" className="w3-bar-item w3-button"><i className="fa fa-heartbeat"></i>  Xuất khẩu lao động</Link>
            <Link to="/shop" className="w3-bar-item w3-button"><i className="fa fa-shopping-cart"></i> Shop</Link>
            <Link to="/shop/tracker" className="w3-bar-item w3-button"><i className="fa fa-check-circle"></i>  Tracker</Link>
            <Link to="/nhadat/contact" className="w3-bar-item w3-button"><i className="fa fa-fw fa-envelope"></i> Contact</Link>
            <div>
                <Link to className="w3-bar-item w3-button" onclick="myAccordion('demodr')" Link to="javascript:void(0)">SignUp <i
                    className="fa fa-caret-down"></i></Link>
                <div id="demodr" className="w3-hide">
                    {auth._id ? (
                        <Links>

                            {auth.isAdmin ? (
                                <div>
                                    <Link to="/admin/summary">Admin</Link>
                                </div>
                            ) : null}
                            <div
                                onClick={() => {
                                    dispatch(logoutUser(null));
                                    toast.warning("Logged out!", { position: "bottom-left" });
                                }}
                            >
                                Logout
                            </div>
                        </Links>
                    ) : (
                        <AuthLinks>
                            <Link to="/login">Login</Link>
                            <Link to="register">Register</Link>
                        </AuthLinks>
                    )}
                </div>
            </div>
            <Link to="/modals" className="w3-bar-item w3-button w3-red" >Chính
                sách website</Link>
        </div>

    </>

}



const AuthLinks = styled.div`
  a {
    &:last-child {
      margin-left: 2rem;
    }
  }
`;

const Links = styled.div`
  color: white;
  display: flex;

  div {
    cursor: pointer;

    &:last-child {
      margin-left: 2rem;
    }
  }
  img.logo1 {
    height: 35px;
}
`;
export default SiderBar;