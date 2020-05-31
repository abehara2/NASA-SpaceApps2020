import React, { Component } from 'react';
import {useState, useEffect, state} from 'react'
import { GoogleMap, GoogleApiWrapper, MarkerWithLabel } from 'google-maps-react';
import {getFarmPosts} from "./utils/apiWrapper"


export class MapContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // let markerData = [];
  //   async getFarms() {
  //     let object = await getFarmPosts();
  //     // console.log(object);
  //     for (let json in object.data.data.data) {
  //       let data = {
  //         "name": json.name,
  //         "latlong": {
  //           "lat": json.lat,
  //           "long": json.long,
  //         }
  //       }
  //       this.state.markerData.push(data);
  //     }
  //   }
  render() {
  return (
      <GoogleMap
        google={this.props.google}
        zoom={7}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      >
        {/* {
          this.state.markerData.map(data => (
            <MarkerWithLabel
              position={{ lat: -34.397, lng: 150.644 }}
              labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
            >
              <div>hello</div>
            </MarkerWithLabel>
            // <Marker position={data.latlong} />
          ))
        } */}
      </GoogleMap>
    
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyCrWk-gOi0LEVcfJMq_uqds2j-WCz78sP4"
})(MapContainer);