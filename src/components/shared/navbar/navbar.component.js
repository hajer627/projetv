import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="#home" className="navbar-brand">Clothes Store</a>
                <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="justify-content-end navbar-collapse collapse" id="basic-navbar-nav">
                    <div className="navbar-nav">
                        <a className="ml-5 black" href="/">Home</a>
                        <a className="ml-5 black" href="/men">Men</a>
                        <a className="mx-5 black" href="/women">Women</a>
                    </div>
                </div>
            </nav>
        );
    }
  }
