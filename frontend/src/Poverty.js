import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Poverty extends React.Component {
    render() {
      return (
        <Plot
        
        data={[
          {
            x: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME",
                "MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA",
                "RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
            y: [10.55,16.24,7.99,10.23,20.57,9.25,17.97,11.44,25.04,18.01,23.42,8.2,12.4,8.89,12.06,7.95,13.04,
                17.26,15.27,9.91,16.52,23.09,14.93,17.11,9.37,11.8,6.53,26.75,17.61,14.95,12.95,19.92,13.76,7.85,
                13.18,8.62,15.16,17.35,18.84,12.3,6.03,10.15,10.57,5.85,18.16,10.79,31.2,14.79,10.81,6.42],
            type: 'bar',
            mode: 'lines+markers',
            marker: {color: "b7b7b7"} 
          }
        ]}
          layout={ 
              {   xaxis: {
                      title: {
                          text: "States"
                      } 
                  },
                  yaxis: {
                      title: {
                          text: "Percent Unemployment "
                      } 
                  },
                  showlegend: false,
                  
                  width: "700px", 
                  height: "400px", 
                  title:{text:"<b>Percent Unemployment across States as of 5/19</b>", 'xanchor': 'center', 'yanchor': 'top'}
                  
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