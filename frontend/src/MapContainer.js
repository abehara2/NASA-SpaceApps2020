import React, { Component } from 'react';
import {useState, useEffect} from 'react'
import { Map, GoogleApiWrapper, MarkerWithLabel } from 'google-maps-react';
import {getFarmPosts} from "./utils/apiWrapper"




export function MapContainer() {
  let markerData = []
  useEffect(()=> {
    async function getFarms() {
      let object = await getFarmPosts();
      for (let json in object.body.data) {
        let data = {
          "name": json.name,
          "latlong": {
            "lat": json.lat,
            "long": json.long,
          }
        }
        markerData.push(data);
      }
    }
    getFarms()
  },[]);
  return (
      <Map
        google={this.props.google}
        zoom={7}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      >
        {
          markerData.map(data => (
            <MarkerWithLabel
              position={{ lat: -34.397, lng: 150.644 }}
              labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
            >
              <div>{data.name}</div>
            </MarkerWithLabel>
            // <Marker position={data.latlong} />
          ))
        }
      </Map>
    
    );
}


export default GoogleApiWrapper({
  apiKey: process.env.APIKEYMAP
})(MapContainer);