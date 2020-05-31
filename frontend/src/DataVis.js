import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Button, Card, Icon, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Notiflix from "notiflix";
import Crop from './Crops';
import Poverty from './Poverty';

export default function DataVis() {
    return (
        <div>
            <Crop />
            <Poverty />
        </div>
    );
}