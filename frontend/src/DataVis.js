import React from "react";
import "./datavis.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Button, Card, Icon, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Notiflix from "notiflix";
import Crop from './Crops';
import Poverty from './Poverty';

export default function DataVis() {
    return (
        <div id="container">
             <div id="crop">
                <Crop />
             </div>
             <div id="poverty">
            <Poverty />
            </div>
            <div id="text">
                <p>These graphs present a visual aspect to the effect COVID-19 has had on our country. As seen in the graph at left, there has been a drop in price for all major crops. 
                    According to the Law of Supply and Demand we can infer that <b style={{color: "red"}}>demand has increased while supply is constant</b> thus decreasing the equilibrium price and creating a <b style={{color: "red"}}>surplus</b>. </p>
            </div>
        </div>
    );
}