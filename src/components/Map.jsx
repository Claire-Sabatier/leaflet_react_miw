import './Map.css';
import React, { useContext, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import mapContext from './context_reducer/mapContext'
import DataUser from './DataUser'

L.Icon.Default.imagePath = 'images/'
const maPosition = [43.8333, 4.35]; // longitude et latitude de Nimes

const GeoLoc = () => {
    const map = useMap()

    useEffect(() => {
        if('geolocalisation' in navigator){
            navigator.geolocation.getCurrentPosition((pos) => {
                const {latitude, longitude} = pos.coords
                map.setView([latitude, longitude])
            })
        }
    },[])

    return <></>
}

const LocMarker = () => {
    const {state, dispatch} = useContext(mapContext);
    useEffect(()=> console.log(state.markers), [state.markers])

    const map = useMapEvents({
        click(e) {
            const {lat, lng} = e.latlng 
            dispatch({ marker: [lat, lng], type: 'markerClick'})

            if('vibrate' in navigator) navigator.vibrate(200);
        }
    })
    return <></>
}

const Map = () => {
    const {state} = useContext(mapContext);
    return <>
    <div className="content">
        {state.user ? <DataUser/>  : ''}
        <MapContainer center={maPosition} zoom={13} scrollWheelZoom={true} className="map">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <LocMarker/>
            <GeoLoc/>
            {state.markers.map((position, i) => <Marker position={position} key={i} />)}
        </MapContainer>
    </div>
        
    </>
}

export default Map