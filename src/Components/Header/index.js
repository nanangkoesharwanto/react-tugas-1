import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import logo from "../../logo.svg";
import first from "../../slide-1.jpg";
import second from "../../slide-2.jpg";
import third from "../../slide-3.jpg";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function onClick() {
    document.querySelector(".App-header").classList.toggle("hide-element");
    document.querySelector(".main-header").classList.toggle("hide-element");
    document.querySelector(".main-content").classList.toggle("hide-element");
    document.querySelector(".main-footer").classList.toggle("hide-element");
    document.querySelector(".left-sidebar").classList.toggle("hide-element");
    document.querySelector(".right-sidebar").classList.toggle("hide-element");
}

function Navigation() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showright, setShowRight] = useState(false);
    const handleCloseRight = () => setShowRight(false);
    const handleShowRight = () => setShowRight(true);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="35"
                            height="35"
                            className="d-inline-block align-top img-nav"
                        />{" "}
                        React-Bootstrap-Camp
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={onClick}>Home</Nav.Link>
                            <Nav.Link href="#link" onClick={handleShow}>
                                Left Sidebar
                            </Nav.Link>
                            <Nav.Link href="#link" onClick={handleShowRight}>
                                Right Sidebar
                            </Nav.Link>
                            <NavDropdown title="Features" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Newsletter</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Tutorial
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Video
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Contact Us
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Type Keyword ..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Kata Bijak</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ol>
                        <li>Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.</li>
                        <li className='mt-2'>Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.</li>
                        <li className='mt-2'>Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.</li>
                        <li className='mt-2'>Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.</li>
                        <li className='mt-2'>Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.</li>
                        <li className='mt-2'>Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.</li>
                    </ol>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showright} onHide={handleCloseRight} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Tertawa Sejenak</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ol>
                        <li>Berenang jauh para ikan
                            <br />Mereka bebas hatinya senang
                            <br />Badan kurus kurang makan
                            <br />Kalau ditiup goyang-goyang</li>
                        <li className='mt-2'>Jalan-jalan ke pinggir empang
                            <br />Nemu katak di pinggir empang
                            <br />Hati siapa tak bimbang
                            <br />Kamu botak minta dikepang</li>
                        <li className='mt-2'>Tetangga baru namanya Rahmat
                            <br />Punya istri namanya Cua
                            <br />Kakek cerita terlalu semangat
                            <br />Gigi palsunya copot semua</li>
                    </ol>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function CarouselSlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={first} alt="First slide" />
                <Carousel.Caption>
                    <h3>Easy to use</h3>
                    <p>you're just a few shortcuts away from becoming a master</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={second} alt="Second slide" />
                <Carousel.Caption>
                    <h3>Portable</h3>
                    <p>being a plain text format you can read and edit it using any editor</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={third} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Custom symbols</h3>
                    <p>you can replace the default symbols with any of the supported ones</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function Header() {
    return (
        <div className="main-header hide-element">
            <Navigation />
            <CarouselSlider />
        </div>
    );
}

export default Header;
