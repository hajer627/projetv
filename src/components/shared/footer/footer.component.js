import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="bg-dark" style={{textAlign:'center'}}>
                <a id="footer-link-react-copyright" href="#">
                    Clothes Store
            </a>
                <span className="textColor"> © 2021. </span>
                <br />
                <span className="textColor" >Powered by </span>
                <a id="footer-link-react-copyright" href="#">
                    Clothes
            </a>
            </div>
        );
    }
  }