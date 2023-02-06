import React from 'react'
import "./styles/LocationInfo.css"

const LocationInfo = ({location}) => {
return (
    <div>
        <section className='Locationinfo'>
            <h2 className='Locationinfo__name'>{location?.name}</h2>
            <ul className='Locationinfo__list'>
                <li className='Locationinfo__item'><span>Type: </span>{location?.type}</li>
                <li className='Locationinfo__item'><span>Dimension: </span>{location?.dimension}</li>
                <li className='Locationinfo__item'><span>Population: </span>{location?.residents.length}</li>
            </ul>
        </section>
    </div>
)
}

export default LocationInfo