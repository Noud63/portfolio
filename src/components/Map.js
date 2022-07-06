import React from 'react'
import { Marker, TileLayer, MapContainer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
//import marker from '/images/marker.png'
import shadow from 'leaflet/dist/images/marker-shadow.png'
import './Map.css'

const Map = () => {

    const positionMap = [52.382903, 4.874645]
    const positionMarker = [52.382903, 4.874645]
   
    const icon = new L.Icon({
        iconUrl: require('../images/marker.png'),
        shadowUrl: shadow,
        iconSize: [30, 50],
        shadowSize: [80, 54],
        shadowAnchor: [25, 40],
    })

    return (
        <MapContainer center={positionMap} zoom={11} scrollWheelZoom={true} style={{ height: '357px' }}>
            <TileLayer
                attribution='<a href="https://www.openstreetmap.org">&copy; OpenStreetMap</a>'
                url="https://api.mapbox.com/styles/v1/noud/cl58279uz000514pfq3fax2ku/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibm91ZCIsImEiOiJjanYyY205MjExbW82M3ptMjVxd21ma2w2In0.rpsoE0GNWh9fWdkNikufxg"
            />
            <Marker position={positionMarker} icon={icon}>
            </Marker>
        </MapContainer>
    )
}

export default Map

