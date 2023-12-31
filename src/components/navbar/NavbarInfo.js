import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    NavbarToggler,
} from 'reactstrap';
import "./infoStyle.css";
import { useState } from 'react';

function NavbarInfo() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // function toggleSelect() {
    //     const language = document.getElementById('buttonBox');
    //     language.classList.toggle('show');
    // }

    return (
        <div>
            <Navbar expand="md" fixed='top' color='dark' className='navbar-brend fs-6'>
                <NavbarBrand>
                    <NavLink href="tel:+998 99 877 14 12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24">
                            <path fill="white" d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296a11.421 11.421 0 0 0 4.583 1.364a1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995A15.51 15.51 0 0 1 18.5 21C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.421 11.421 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884Zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.45 12.45 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.441 12.441 0 0 1-.75-1.588Z" />
                        </svg>
                        <span className='fs-6 ms-1 phone-number'>+998 99 877 14 12</span>
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className='bg-warning' />
                <Collapse navbar isOpen={isOpen}>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="mailto:info@solara.uz">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path fill="white" d="M3 5v-.75a.75.75 0 0 0-.75.75H3Zm18 0h.75a.75.75 0 0 0-.75-.75V5ZM3 5.75h18v-1.5H3v1.5ZM20.25 5v12h1.5V5h-1.5ZM19 18.25H5v1.5h14v-1.5ZM3.75 17V5h-1.5v12h1.5ZM5 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 19.75v-1.5ZM20.25 17c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 21.75 17h-1.5Z" />
                                        <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 5l9 9l9-9" />
                                    </g>
                                </svg>
                                <span className='ms-1'>info@solara.uz</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.facebook.com/SolaraUzbekistan">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.instagram.com/solara.uz/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText className='text-light' style={{ cursor: "pointer" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                        </svg>
                        <span className='ms-1 me-1'>Py</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 48 48">
                            <g transform="rotate(-90 24 24)">
                                <path fill="currentColor" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 36L19 24L31 12" />
                            </g>
                        </svg>
                    </NavbarText>
                </Collapse>
                {/* <div id='buttonBox'>
                    <Button color='dark' outline className='text-light'>uz</Button>
                    <Button color='dark' outline className='text-light'>ru</Button>
                    <Button color='dark' outline className='text-light'>eng</Button>
                </div> */}
            </Navbar>
        </div>
    );
}

export default NavbarInfo;