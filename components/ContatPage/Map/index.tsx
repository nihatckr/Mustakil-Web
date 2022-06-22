/* import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { blueMap, grayMap } from '../../../styles/mapStyles';
import React, { useState } from 'react'
import { MustakilIcon } from '../../Header/Logo/MustakilIcon';

const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 40.969829,
    lng: 29.109596
};
const options = {
    styles: grayMap
}


const Map = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBYuW4nIR7xnyOY8Lj-J3riwGzXe53QfAY",
    })

    const [map, setMap] = useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    if (loadError) return "Error Loading Maps"
    if (!isLoaded) return "Loading Maps"
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={options}
        >
            <Marker position={{
                lat: 40.969829,
                lng: 29.109596
            }}
                icon={{ url: '/svg/mustakil-icon.svg', scaledSize: new window.google.maps.Size(30, 30) }}
            />

        </GoogleMap>
    ) : <></>
}
export default React.memo(Map)
 */
import React from 'react'
import { blueMap, grayMap } from '../../../styles/mapStyles';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 40.969829,
    lng: 29.109596
};
const options = {
    styles: grayMap
}


function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBYuW4nIR7xnyOY8Lj-J3riwGzXe53QfAY"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
        /*    options={options} */
        >

            <> <Marker position={{
                lat: 40.969829,
                lng: 29.109596
            }}
                icon={{ url: '/svg/mustakil-icon.svg', scaledSize: new window.google.maps.Size(30, 30), fillColor: '#ffffff' }}
            /></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)