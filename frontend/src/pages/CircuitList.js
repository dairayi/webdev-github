import ListCircuit from './ListCircuit';
import React, { useContext } from "react";
//import authContext from "../auth/authContext";

const CircuitList = ({
                       listCircuits
                   }) => {

    return (
        <div className="ListCircuit">

            {console.log(listCircuits)}
            {listCircuits.map(item => (
                <ListCircuit
                    className="ListCircuit"
                    circuitId={item.circuitId}
                    circuitRef={item.circuitRef}
                    name={item.name}
                    location={item.location}
                    country={item.country}
                    lat={item.lat}
                    lng={item.lng}
                    alt={item.alt}
                    url={item.url}
                />
            ))}
        </div>
    );
}

export default CircuitList;