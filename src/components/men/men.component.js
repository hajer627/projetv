import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../shared/card/card.component";
import './men.css';
export default class Men extends React.Component {
    render() {
        return (
            <div>
                <h1>Women Clothing</h1>
                <img src="https://kind-wescoff-1a57a1.netlify.app/static/media/men_clothing.05dbfba3.jpg" class="img-fluid"/><hr/>
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
                </div><div class="row">
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