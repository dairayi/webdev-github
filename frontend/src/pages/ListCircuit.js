import React, { useState, useEffect } from "react";

//import './ListDriver.css';

const ListCircuit = ({
                        circuitId, circuitRef, name, location, country, lat, lng, alt, url
                    }) => {
    const [editCircuit, setEditCircuit] = useState({});
    const [inputcircuitId, setcircuitId] = useState(Number(circuitId));
    const [inputcircuitRef, setcircuitRef] = useState(circuitRef);
    const [inputname, setname] = useState(name);
    const [inputlocation, setlocation] = useState(location);
    const [inputcountry, setcountry] = useState(country);
    const [inputlat, setlat] = useState(lat);
    const [inputlng, setlng] = useState(lng);
    const [inputalt, setalt] = useState(alt);
    const [inputurl, seturl] = useState(url);
    const [editMessage, setEditMessage] = useState("");

    const handleCircuitIdFieldChange = (event) => {
        event.preventDefault();
        setcircuitId(event.target.value);
    }

    const handleCircuitRefFieldChange = (event) => {
        event.preventDefault();
        setcircuitRef(event.target.value);
    }

    const handleNameFieldChange = (event) => {
        event.preventDefault();
        setname(event.target.value);
    }

    const handleLocationFieldChange = (event) => {
        event.preventDefault();
        setlocation(event.target.value);
    }

    const handleCountryFieldChange = (event) => {
        event.preventDefault();
        setcountry(event.target.value);
    }

    const handleLatFieldChange = (event) => {
        event.preventDefault();
        setlat(event.target.value);
    }

    const handleLngFieldChange = (event) => {
        event.preventDefault();
        setlng(event.target.value);
    }

    const handleAltFieldChange = (event) => {
        event.preventDefault();
        setalt(event.target.value);
    }

    const handleUrlFieldChange = (event) => {
        event.preventDefault();
        seturl(event.target.value);
    }
    useEffect(() => {
        if (Object.entries(editCircuit).length !== 0) {
            fetch(`http://localhost:3001/circuit`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editCircuit)
            })
                .then(
                    res => res.json()
                ).then((result) => {
                setEditMessage("Edited")
            })
        }
    }, [editCircuit])

    return (
        <div className="ListCircuit">
            <div className="ListCircuit-cell">
                <label>circuitId</label>
                <input
                    type="text"
                    placeholder=""
                    value={circuitId}
                    onChange={(e) => handleCircuitIdFieldChange(e)}
                />
            </div>

            <div className="ListCircuit-cell">
                <label>circuitRef</label>
                <input
                    type="text"
                    placeholder=""
                    value={circuitRef}
                    onChange={(e) => handleCircuitRefFieldChange(e)}
                />
            </div>

            <div className="ListCircuit-cell">
                <label>name</label>
                <input
                    type="text"
                    placeholder=""
                    value={name}
                    onChange={(e) => handleNameFieldChange(e)}
                />
            </div>

            <div className="ListCircuit-cell">
                <label>location</label>
                <input
                    type="text"
                    placeholder=""
                    value={location}
                    onChange={(e) => handleLocationFieldChange(e)}
                />
            </div>

            <div className="ListCircuit-cell">
                <label>country</label>
                <input
                    type="text"
                    placeholder=""
                    value={country}
                    onChange={(e) => handleCountryFieldChange(e)}
                />
            </div>

            <div className="ListCircuit-cell">
                <label>lat</label>
                <input
                    type="text"
                    placeholder=""
                    value={lat}
                    onChange={(e) => handleLatFieldChange(e)}
                />
            </div>

            <div className="ListCircuit-cell">
                <label>lng</label>
                <input
                    type="text"
                    placeholder=""
                    value={lng}
                    onChange={(e) => handleLngFieldChange(e)}
                />
            </div>

            <div className="ListCircuit-cell">
                <label>alt</label>
                <input
                    type="text"
                    placeholder=""
                    value={alt}
                    onChange={(e) => handleAltFieldChange(e)}
                />
            </div>

            <div className="ListCircuit-cell">
                <label>wikipedia url</label>
                <input
                    type="text"
                    placeholder="http://url"
                    value={url}
                    onChange={(e) => handleUrlFieldChange(e)}
                />
            </div>

            <div className="ListCircuit-cell">
                <button
                    className="ListItem-button"
                    onClick={() => setEditCircuit({
                        circuitId: inputcircuitId,
                        circuitRef: inputcircuitRef,
                        name: inputname,
                        location: inputlocation,
                        country: inputcountry,
                        lat: inputlat,
                        lng: inputlng,
                        alt: inputalt,
                        url: inputurl
                    })}>
                    Edit
                </button>
            </div>

            <div className="ListCircuit-cell">
                <span>{editMessage}</span>
            </div>

        </div>
    );
}
export default ListCircuit;