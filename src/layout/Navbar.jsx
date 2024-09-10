import React from "react";
import navLogo from "../assets/IMG_6318 1.png";
import "../Styles/Navbar.css";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import menuImg from "../assets/menu-image.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="container py-2 d-flex justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <img src={navLogo} alt="nav-logo" className="img-fluid" />
          <h2>Innoson Group</h2>
        </div>
        <ul className="d-none list-unstyled d-lg-flex align-items-center gap-5">
          <li>Home</li>
          <li>Companies</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Off-Canva */}
        <div className="d-md-block d-lg-none mt-2">
          <div className="d-lg-none" onClick={handleShow}>
            <img className="menu-img" src={menuImg} alt="menu-img" />
          </div>

          <Alert variant="info" className="d-none d-lg-block">
            Resize your browser to show the responsive offcanvas toggle.
          </Alert>

          <Offcanvas show={show} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p className="mb-0">
                <ul className="d-flex row list-unstyled pt-3 gap-3">
                  <li>Home</li>
                  <li>Companies</li>
                  <li>Products</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
                {/* This is content within an <code>.offcanvas-lg</code>. */}
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
