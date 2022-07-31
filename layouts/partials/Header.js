import Logo from "@components/Logo";
import menu from "@config/menu.json";
import Search from "@layouts/Search";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [modal, setModal] = useState(false);

  // distructuring the main menu from menu object
  const { main } = menu;

  // states
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.pageYOffset >= 1) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
  });

  return (
    <>
      <header className=" pt-16">
        <nav className="container flex flex-wrap items-center justify-between">
          {/* logo */}
          <div className="order-0">
            <Logo />
          </div>
          {/* navbar toggler */}
          <input id="nav-toggle" type="checkbox" className="hidden" />
          <label
            id="show-button"
            htmlFor="nav-toggle"
            className="order-2 flex cursor-pointer items-center md:order-1 md:hidden"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          </label>
          <label
            id="hide-button"
            htmlFor="nav-toggle"
            className="order-2 hidden cursor-pointer items-center md:order-1"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          </label>
          {/* /navbar toggler */}

          <ul
            id="nav-menu"
            className="navbar order-3 hidden w-full md:order-1 md:flex md:w-auto md:space-x-2"
          >
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <a className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </a>
                    <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link href={child.url} passHref>
                            <a className="nav-dropdown-link block">
                              {child.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link href={menu.url} passHref>
                      <a className="nav-link block">{menu.name}</a>
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
          <div
            className="order-1 ml-auto cursor-pointer hover:text-primary md:order-2 md:ml-0"
            onClick={() => {
              setModal(true);
            }}
          >
            <IoSearch />
          </div>
        </nav>
      </header>
      <Search modal={modal} setModal={setModal} />
    </>
  );
};

export default Header;
