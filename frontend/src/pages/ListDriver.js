import React, { useState, useEffect } from "react";

//import './ListDriver.css';

const ListDriver = ({
                      driverId, driverRef, number, code, forename, surname, dob, nationality, url
                  }) => {
    const [editDriver, setEditDriver] = useState({});
    const [inputdriverId, setdriverId] = useState(Number(driverId));
    const [inputdriverRef, setdriverRef] = useState(driverRef);
    const [inputnumber, setnumber] = useState(number);
    const [inputcode, setcode] = useState(code);
    const [inputforename, setforename] = useState(forename);
    const [inputsurname, setsurname] = useState(surname);
    const [inputdob, setdob] = useState(dob);
    const [inputnationality, setnationality] = useState(nationality);
    const [inputurl, seturl] = useState(url);
    const [editMessage, setEditMessage] = useState("");

    const handleDriverIdFieldChange = (event) => {
        event.preventDefault();
        setdriverId(event.target.value);
    }

    const handleDriverRefFieldChange = (event) => {
        event.preventDefault();
        setdriverRef(event.target.value);
    }

    const handleNumberFieldChange = (event) => {
        event.preventDefault();
        setnumber(event.target.value);
    }

    const handleCodeFieldChange = (event) => {
        event.preventDefault();
        setcode(event.target.value);
    }

    const handleForenameFieldChange = (event) => {
        event.preventDefault();
        setforename(event.target.value);
    }

    const handleSurnameFieldChange = (event) => {
        event.preventDefault();
        setsurname(event.target.value);
    }

    const handleDobFieldChange = (event) => {
        event.preventDefault();
        setdob(event.target.value);
    }

    const handleNationalityFieldChange = (event) => {
        event.preventDefault();
        setnationality(event.target.value);
    }

    const handleUrlFieldChange = (event) => {
        event.preventDefault();
        seturl(event.target.value);
    }
        useEffect(() => {
            if (Object.entries(editDriver).length !== 0) {
                fetch(`http://localhost:3001/driver`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(editDriver)
                })
                    .then(
                        res => res.json()
                    ).then((result) => {
                    setEditMessage("Edited")
                })
            }
        }, [editDriver])

        return (
            <div className="ListDriver">
                <div className="ListDriver-cell">
                    <label>driverId</label>
                    <input
                        type="number"
                        placeholder="<855"
                        value={driverId}
                        onChange={(e) => handleDriverIdFieldChange(e)}
                    />
                </div>

                <div className="ListDriver-cell">
                    <label>driverRef</label>
                    <input
                        type="text"
                        placeholder=""
                        value={driverRef}
                        onChange={(e) => handleDriverRefFieldChange(e)}
                    />
                </div>

                <div className="ListDriver-cell">
                    <label>number</label>
                    <input
                        type="number"
                        placeholder="00"
                        value={number}
                        onChange={(e) => handleNumberFieldChange(e)}
                    />
                </div>

                <div className="ListDriver-cell">
                    <label>code</label>
                    <input
                        type="text"
                        placeholder="COD"
                        value={code}
                        onChange={(e) => handleCodeFieldChange(e)}
                    />
                </div>

                <div className="ListDriver-cell">
                    <label>forename</label>
                    <input
                        type="text"
                        placeholder=""
                        value={forename}
                        onChange={(e) => handleForenameFieldChange(e)}
                    />
                </div>

                <div className="ListDriver-cell">
                    <label>surname</label>
                    <input
                        type="text"
                        placeholder=""
                        value={surname}
                        onChange={(e) => handleSurnameFieldChange(e)}
                    />
                </div>

                <div className="ListDriver-cell">
                    <label>dob</label>
                    <input
                        type="text"
                        placeholder=""
                        value={dob}
                        onChange={(e) => handleDobFieldChange(e)}
                    />
                </div>

                <div className="ListDriver-cell">
                    <label>nationality</label>
                    <input
                        type="text"
                        placeholder=""
                        value={nationality}
                        onChange={(e) => handleNationalityFieldChange(e)}
                    />
                </div>

                <div className="ListDriver-cell">
                    <label>wikipedia url</label>
                    <input
                        type="text"
                        placeholder="http://url"
                        value={url}
                        onChange={(e) => handleUrlFieldChange(e)}
                    />
                </div>

                <div className="ListDriver-cell">
                    <button
                        className="ListItem-button"
                        onClick={() => setEditDriver({
                            driverId: inputdriverId,
                            driverRef: inputdriverRef,
                            number: inputnumber,
                            code: inputcode,
                            forename: inputforename,
                            surname: inputsurname,
                            dob: inputdob,
                            nationality: inputnationality,
                            url: inputurl
                        })}>
                        Edit
                    </button>
                </div>

                <div className="ListDriver-cell">
                    <span>{editMessage}</span>
                </div>

            </div>
        );
    }
export default ListDriver;