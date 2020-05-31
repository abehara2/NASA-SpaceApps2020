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
            <Grid style={{ marginLeft: "7.5%", marginRight: "7.5%", marginTop: "2.5%" }}>
            <Grid.Row>
                <Grid.Column width={8}>
                    <div id="crop">
                        <Crop />
                    </div>
                </Grid.Column>
                <Grid.Column width={8}>
                    <div id="poverty">
                        <Poverty />
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <div id="text">
                    <p>These graphs present a visual aspect to the effect COVID-19 has had on our country. As seen in the graph at left, there has been a drop in price for all major crops. 
                        According to the Law of Supply and Demand we can infer that <b style={{color: "#FF5A60"}}>demand has increased at a constant supply</b> thus we can see that a <b style={{color: "#FF5A60"}}>surplus</b> has formed. 
                        The graph to the right displays the change in unemployment rates for various states from December 2019 to May 2020. The giant leap in unemployment 
                        shown in almost every state, further indicates how our solution provides the <b style={{color: "#FF5A60"}}>best of both worlds</b> for farmers and those in need. </p>
                </div>
            </Grid.Row>
            </Grid>
        </div>
    );
}