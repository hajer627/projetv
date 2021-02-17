import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../shared/card/card.component";
import './women.css';
export default class Women extends React.Component {
    render() {
        return (
            <div>
                <h1>Women Clothing</h1>
                <img src="https://kind-wescoff-1a57a1.netlify.app/static/media/women_clothing.427a20e0.jpg" class="img-fluid"/><hr/>
                <div class="row">
                    <div class="col">
                        <Card image="https://kind-wescoff-1a57a1.netlify.app/static/media/women_3.c0481d22.webp" title="Shirt" description="T-Shirt for all sizes available in all of our stores"/>
                    </div>
                    <div class="col">
                        <Card image="https://kind-wescoff-1a57a1.netlify.app/static/media/women_3.c0481d22.webp" title="Shirt" description="T-Shirt for all sizes available in all of our stores"/>
                    </div>
                    <div class="col">
                        <Card image="https://kind-wescoff-1a57a1.netlify.app/static/media/women_3.c0481d22.webp" title="Shirt" description="T-Shirt for all sizes available in all of our stores"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Card image="https://kind-wescoff-1a57a1.netlify.app/static/media/women_3.c0481d22.webp" title="Shirt" description="T-Shirt for all sizes available in all of our stores"/>
                    </div>
                    <div class="col">
                        <Card image="https://kind-wescoff-1a57a1.netlify.app/static/media/women_3.c0481d22.webp" title="Shirt" description="T-Shirt for all sizes available in all of our stores"/>
                    </div>
                    <div class="col">
                        <Card image="https://kind-wescoff-1a57a1.netlify.app/static/media/women_3.c0481d22.webp" title="Shirt" description="T-Shirt for all sizes available in all of our stores"/>
                    </div>
                </div>
            </div>
                  );
    }
  }