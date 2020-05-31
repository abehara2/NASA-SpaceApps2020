import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Crop extends React.Component {
  render() {
    return (
      <Plot
      
      data={[
        {
          x: ["Soybeans", "Chicken", "Maize", "Beef"],
          y: [375.51/375.51, 1.85/1.85, 166.33/166.33, 5.94/5.94],
          type: 'bar',
          name: "December 2019",
          mode: 'lines+markers',
          marker: {color: "b7b7b7"}
        },
        {type: 'bar', x: ["Soybeans", "Chicken", "Maize", "Beef"], y: [361.26/375.51, 1.27/1.85, 146.91/166.33, 4.45/5.94], name: "May 2020", mode: 'lines+markers', marker: { color:"666666" }}
      ]}
        layout={ 
            {   xaxis: {
                    title: {
                        text: "Commodity"
                    } 
                },
                yaxis: {
                    title: {
                        text: "% Price Change before/after COVID-19"
                    } 
                },
                showlegend: true,
                width: "700px", 
                height: "400px", 
                title: {"text": '<b>Commodity Prices Decline Over Past 4 months</b>', "xanchor": 'center', "yanchor": 'top'}
                
                
            } 
        }
      />
    );
  }
}

export default Crop;
