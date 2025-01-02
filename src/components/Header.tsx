"use client";
import Link from "next/link";
import React, { useCallback, useState, useEffect } from "react";
import TheCutFlooringLogo from "../assets/images/the-cut-flooring-logo.png";

const Header = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const Menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Location",
      link: "/location",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const currentIndex = Menus.findIndex((menu) => menu.link === currentPath);
      setActive(currentIndex);
    }
  }, []);

  return (
    <header className="section header-section">
      <div className="header-menu-desktop">
        <div className="header-top">
          <div className="instagram-icon">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="header-logo">
            <Link className="header-link" href="/">
              <div className="wrapper-logo">
                <img
                  className="the-cut-logo"
                  src={TheCutFlooringLogo.src}
                  alt="The cut flooring Logo"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="divider-line" />
        <ul className="header-menu">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`header-menu-item ${
                active === index ? "is-active" : ""
              }`}
            >
              <Link href={menu.link} onClick={() => setActive(index)}>
                <span className="header-menu-link">{menu.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-menu-mobile">
        <div className="menu-mobile-top">
          <div className="header-logo">
            <Link className="header-link" href="/">
              <div className="wrapper-logo">
                <img
                  className="the-cut-logo"
                  src={TheCutFlooringLogo.src}
                  alt="The cut flooring Logo"
                />
              </div>
            </Link>
          </div>
          <div className="wrapper-hamburger-icon">
            <i
              className={`fa-solid ${
                isOpen ? "fa-xmark close-icon" : "fa-bars hamburger-icon"
              }`}
              onClick={toggleMenu}
            ></i>
          </div>
        </div>
        <ul
          className={`header-menu menu-mobile ${
            isOpen ? "menu-mobile-open" : ""
          }`}
        >
          <li className="header-menu-item is-active">
            <Link className="header-menu-link" href="/">
              Home
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/services">
              Services
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/about">
              About
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/gallery">
              Gallery
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/location">
              Location
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/contact-us">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
