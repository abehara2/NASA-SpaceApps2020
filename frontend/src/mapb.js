import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl, {Marker} from 'mapbox-gl';
import "./site.css";


mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: -89.3985,
        lat: 40.45,
        zoom: 5.5,
        };
    }
    
    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });

        map.on('style.load', function (e) {
            console.log(e.style.sprite);
            map.addSource('markers', {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-89.3985, 39.45]
                        },
                        "properties": {
                            "title": "Gingrich Farms",
                            "marker": "default_marker",
                        },
                    }, {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-90, 41]
                        },
                        "properties": {
                            "title": "Random Farm",
                            "marker-color": "#ff00ff",
                            "marker-symbol": "secondary_marker",
                        }
                    }]
                }
            });
        
            map.addLayer({
                "id": "markers",
                "source": "markers",
                "type": "symbol",
                "layout": {
                    "icon-image": "{marker-symbol}",
                    "text-field": "{title}",
                    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                    "text-offset": [0, 0.6],
                    "text-anchor": "top"
                }
            });
        });
        // const marker = new mapboxgl.Marker()
        //     .setLngLat([-89.3985, 45])
        //     marker.addTo(map);
    }
    
    render() {
        return (
        <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
        </div>
        )
    }
}

export default Application;