import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import menuItems from "../../../Data/menuItems";
import logo from "../../../assets/images/Logo/fp25.png";

export default function NavBar(props) {
  const toggleHamburger = useRef(null);

  const toggleHamburgerFunc = (e) => {
    if (e.current.classList.contains("fa-list-ul")) {
      e.current.classList.remove("fa-list-ul");
      e.current.classList.add("fa-xmark");
    } else {
      e.current.classList.remove("fa-xmark");
      e.current.classList.add("fa-list-ul");
    }
  };

  function openMenu(event) {
    event.currentTarget.childNodes[1].style = "display:block";
  }

  function closeMenuNext(event) {
    event.currentTarget.childNodes[1].style = "display:none";
  }

  function closeMenu(event) {
    event.currentTarget.parentNode.parentNode.style = "display:none";
  }

  return (
    <header className="nav-header">
      <Link to={"./home"} className="navbar-logo">
        <img src={logo} alt="Footprints'25" />
      </Link>

      <input type="checkbox" name="" id="menu-bar" />

      <label htmlFor="menu-bar" className="">
        <span>
          <i
            className="fa-solid fa-list-ul"
            id="navicon"
            style={{ color: "var(--yellow-to-black)" }}
            ref={toggleHamburger}
            onClick={(event) => {
              event.stopPropagation();
              toggleHamburgerFunc(toggleHamburger);
            }}
          ></i>
        </span>
      </label>

      <nav className="custom-navbar">
        <ul>
          {menuItems.map((item, idx) => (
           <li key={idx} onMouseEnter={openMenu} onMouseLeave={closeMenuNext}>
           {item.link ? (
             <Link to={item.link} style={{ cursor: "pointer" }}>
               {item.title}
               &nbsp; &nbsp;
               {item.title === "More" ? (
                 <i id="dots" className="fa-solid fa-ellipsis-vertical"></i>
               ) : (
                 ""
               )}
             </Link>
           ) : (
             <a style={{ cursor: "pointer" }}>
               {item.title}
               &nbsp; &nbsp;
               {item.title === "More" ? (
                 <i id="dots" className="fa-solid fa-ellipsis-vertical"></i>
               ) : (
                 ""
               )}
             </a>
           )}

              {item.subItems ? (
                <ul className="subItems">
                  {item.subItems.map((subItem, idx) => (
                    <li key={idx + 999}>
                      {subItem.link.charAt(0) === "/" ? (
                        <Link
                          className="thirdhirarchy"
                          target={
                            subItem.title === "Blog" ||
                            subItem.title === "WebTeam"
                              ? "_blank"
                              : ""
                          }
                          to={subItem.link || "#"}
                          onClick={closeMenu}
                        >
                          <span>{subItem.title}</span>
                        </Link>
                      ) : (
                        <a href={subItem.link} className="thirdhirarchy" target="_blank" rel="noopener noreferrer">
                          <span>{subItem.title}</span>
                        </a>
                      )}

                      <ul>
                        {subItem.subItems &&
                          subItem.subItems.map((subsubItem, subIdx) => (
                            <li key={subIdx + 9999} className="">
                              <Link
                                id="subsubEvent"
                                target=""
                                to={subsubItem.link || "#"}
                              >
                                {subsubItem.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}