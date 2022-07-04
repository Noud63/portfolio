import React from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';


const Map = () => {

   
    const markerIcon = new L.Icon.Default({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('../images/locationmarker.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    })

    return (
        <MapContainer center={[52.370216, 4.895168]} zoom={12} scrollWheelZoom={true} style={{ height: '380px' }} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.mapbox.com/styles/v1/noud/cl56mogbt002e15pjec6if314/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibm91ZCIsImEiOiJjbDU2bG82a2kxazVsM2JvNzZmeXNjbnVrIn0.OGAMlE8a8h1WlSZbDkpkmw"
            />
            <Marker position={[52.382903, 4.874689]} icon={markerIcon} />
        </MapContainer>

    )
}

export default Map
