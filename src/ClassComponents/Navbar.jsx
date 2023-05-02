import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  getData(e) {
    this.setState({ search: e.target.value });
  }
  postData(e) {
    e.preventDefault();
    this.props.changeSearch(this.state.search);
    this.setState({ search: "" });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
          <div className="container-fluid">
            <Link
              className="navbar-brand text-light"
              to="/"
              onClick={() => this.props.changeSearch("")}
            >
              NewsApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/All"
                    onClick={() => this.props.changeSearch("")}
                  >
                    ALL
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/politics"
                    onClick={() => this.props.changeSearch("")}
                  >
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/crime"
                    onClick={() => this.props.changeSearch("")}
                  >
                    Crime
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="education"
                    onClick={() => this.props.changeSearch("")}
                  >
                    Education
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-light dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Others
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/science"
                        onClick={() => this.props.changeSearch("")}
                      >
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/technology"
                        onClick={() => this.props.changeSearch("")}
                      >
                        technology
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="games"
                        onClick={() => this.props.changeSearch("")}
                      >
                        Games
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/cricket"
                        onClick={() => this.props.changeSearch("")}
                      >
                        Cricket
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/fifa"
                        onClick={() => this.props.changeSearch("")}
                      >
                        Fifa
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/world"
                        onClick={() => this.props.changeSearch("")}
                      >
                        World
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/india"
                        onClick={() => this.props.changeSearch("")}
                      >
                        India
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/jokes"
                        onClick={() => this.props.changeSearch("")}
                      >
                        Jokes
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/covid"
                        onClick={() => this.props.changeSearch("")}
                      >
                        Covid
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-light dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.changeLanguage("hi")}
                      >
                        Hindi
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.changeLanguage("en")}
                      >
                        English
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
              <form
                className="d-flex"
                role="search"
                onSubmit={(e) => this.postData(e)}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="Search"
                  onChange={(e) => this.getData(e)}
                  value={this.state.search}
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
