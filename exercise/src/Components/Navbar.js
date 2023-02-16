import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-md ">
        <Link class="navbar-brand  text-light " to="/home">
          Fitbod
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="btn">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active ">
              <Link class="nav-link  " to="/home">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item ">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
          
            <li class="nav-item">
              <Link class="nav-link " to="/login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/form">
                Form
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
