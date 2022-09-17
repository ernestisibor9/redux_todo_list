import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
    const myCart = useSelector(store=>store)
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary navbar-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {myCart.countCart}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav h6 ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
