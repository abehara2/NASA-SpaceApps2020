import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Poverty extends React.Component {
    render() {
      return (
        <Plot
        
        data={[
          {
            x: ["AK","CA","CO","CT","DE","FL","GA","HI","IL","IA","KY","LA","ME", 
                "MA","MI","MN","MS", "NV","NH","NJ","NM","NY","NC","OH","OR","PA",
                "RI","VT","WA","WV","WI"],
            y: [16.24,20.57,9.25,17.97,11.44,25.04,18.01,23.42,12.4,12.06,13.04,
                17.26,15.27,16.52,23.09,14.93,17.11,26.75,17.61,14.95,12.95,19.92,13.76,
                13.18,15.16,17.35,18.84,18.16,31.2,14.79,10.81],
            type: 'bar',
            name: "May 2020",
            mode: 'lines+markers',
            marker: {color: "#FF5A60"} 
          },
          {
            type: 'bar', 
            x: ["AK","CA","CO","CT","DE","FL","GA","HI","IL","IA","KY","LA","ME", 
                "MA","MI","MN","MS", "NV","NH","NJ","NM","NY","NC","OH","OR","PA",
                "RI","VT","WA","WV","WI"],
            y: [2.83,1.75,0.71,2.22,1.12,0.37,0.56,0.93,1.85,1.7,0.98,0.81,0.98,1.81,1.38,1.91,0.73,
                1.41,0.56,2.23,1.16,1.51,0.45,1.16,1.48,2.03,1.76,1.3,1.85,2.09,1.27],
            name: "December 2019", 
            mode: 'lines+markers', 
            marker: { color:"666666" }}
        ]}
          layout={ 
              {   xaxis: {
                      title: {
                          text: "States"
                      } 
                  },
                  yaxis: {
                      title: {
                          text: "% Unemployment "
                      } 
                  },
                  showlegend: true,
                  
                  width: "700px", 
                  height: "400px", 
                  title:{text:"<b>% Unemployment across States through COVID-19 </b>", 'xanchor': 'center', 'yanchor': 'top'}
                  
              } 
          }
        />
      );
    }
  }
  
  export default Poverty;
// class PieChart extends React.Component {
//   render() {
//     return (

// <Plot 
//       data = {[ {
//         values: [19, 26, 55],
//         labels: ['Residential', 'Non-Residential', 'Utility'],
//         type: 'pie'
//       }
//       ]}
//         layout = {
//             {
//             height: 400,
//             width: 500
//             }
//         }
//       />
//     );
//     }
// }   

// export default PieChart;