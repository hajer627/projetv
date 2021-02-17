
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Card extends React.Component {
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top image" src={this.props.image} alt="Card image cap" />
                        <div className="card-body" style={{textAlign:'center'}}>
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text " >{this.props.description}</p>
                            <a href="#" className=" btn btn-primary">Buy Now</a>
                        </div>
                
            </div>  
        );
    }
  }