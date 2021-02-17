import React, { Component } from "react";
import Carrousel from '../shared/carrousel/carrousel.component';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../shared/card/card.component";
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1>Clothes Store</h1>
                        <p>Welcome To the the <b>#N°1 Selling</b> Clothes store in Tunisia.</p>
                    </div>
                </div>
                <Carrousel/>
                <div class="row">
                    <div class="col">
                        <Card image="https://kind-wescoff-1a57a1.netlify.app/static/media/men_1.5f0f380a.webp" title="Shirt" description="T-Shirt for all sizes available in all of our stores"/>
                    </div>
                    <div class="col">
                        <Card image="https://kind-wescoff-1a57a1.netlify.app/static/media/men_1.5f0f380a.webp" title="Shirt" description="T-Shirt for all sizes available in all of our stores"/>
                    </div>
                    <div class="col">
                        <Card image="https://kind-wescoff-1a57a1.netlify.app/static/media/men_1.5f0f380a.webp" title="Shirt" description="T-Shirt for all sizes available in all of our stores"/>
                    </div>
                </div>
                </div>
                );
    }
  }