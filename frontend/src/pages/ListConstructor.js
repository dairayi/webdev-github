import React, { useState, useEffect } from "react";

//import './ListDriver.css';

const ListConstructor = ({
                         constructorId, constructorRef, name, nationality, url
                     }) => {
    const [editConstructor, setEditConstructor] = useState({});
    const [inputconstructorId, setconstructorId] = useState(Number(constructorId));
    const [inputconstructorRef, setconstructorRef] = useState(constructorRef);
    const [inputname, setname] = useState(name);
    const [inputnationality, setnationality] = useState(nationality);
    const [inputurl, seturl] = useState(url);
    const [editMessage, setEditMessage] = useState("");

    const handleConstructorIdFieldChange = (event) => {
        event.preventDefault();
        setconstructorId(event.target.value);
    }

    const handleConstructorRefFieldChange = (event) => {
        event.preventDefault();
        setconstructorRef(event.target.value);
    }

    const handleNameFieldChange = (event) => {
        event.preventDefault();
        setname(event.target.value);
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
        if (Object.entries(editConstructor).length !== 0) {
            fetch(`http://localhost:3001/constructor`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editConstructor)
            })
                .then(
                    res => res.json()
                ).then((result) => {
                setEditMessage("Edited")
            })
        }
    }, [editConstructor])

    return (
        <div className="ListConstructor">
            <div className="ListConstructor-cell">
                <label>constructorId</label>
                <input
                    type="text"
                    placeholder=""
                    value={constructorId}
                    onChange={(e) => handleConstructorIdFieldChange(e)}
                />
            </div>

            <div className="ListConstructor-cell">
                <label>constructorRef</label>
                <input
                    type="text"
                    placeholder=""
                    value={constructorRef}
                    onChange={(e) => handleConstructorRefFieldChange(e)}
                />
            </div>

            <div className="ListConstructor-cell">
                <label>name</label>
                <input
                    type="text"
                    placeholder=""
                    value={name}
                    onChange={(e) => handleNameFieldChange(e)}
                />
            </div>

            <div className="ListConstructor-cell">
                <label>nationality</label>
                <input
                    type="text"
                    placeholder=""
                    value={nationality}
                    onChange={(e) => handleNationalityFieldChange(e)}
                />
            </div>

            <div className="ListConstructor-cell">
                <label>wikipedia url</label>
                <input
                    type="text"
                    placeholder="http://url"
                    value={url}
                    onChange={(e) => handleUrlFieldChange(e)}
                />
            </div>

            <div className="ListConstructor-cell">
                <button
                    className="ListItem-button"
                    onClick={() => setEditConstructor({
                        constructorId: inputconstructorId,
                        constructorRef: inputconstructorRef,
                        name: inputname,
                        nationality: inputnationality,
                        url: inputurl
                    })}>
                    Edit
                </button>
            </div>

            <div className="ListConstructor-cell">
                <span>{editMessage}</span>
            </div>

        </div>
    );
}
export default ListConstructor;