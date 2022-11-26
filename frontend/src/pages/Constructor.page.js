import React, {useContext, useEffect, useState} from 'react';
import ConstructorList from "./ConstructorList";
import SearchConstructor from "./SearchConstructor";
//import '../style/Home.css';
//import {UserContext} from "./contexts/user.context";

function Constructor() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [listItems, setListItems] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        setListItems([]);
        fetch(`http://localhost:3001/constructor?constructorRef=${searchString}`)
            .then(
                res => res.json()
            ).then((result) => {
                setIsLoaded(true);
                setListItems(result);
            }
        )
    }, [searchString])

    // const handleNewUser = (newData) => {
    //     console.log(newData);
    //     setListItems([...listItems, {
    //         driverId:newData.driverId,
    //         driverRef:newData.driverRef,
    //         number:newData.number,
    //         code:newData.code,
    //         forename:newData.forename,
    //         surname:newData.surname,
    //         dob:newData.dob,
    //         nationality:newData.nationality,
    //         url:newData.url}]);
    // }


    return (
        <div>
            <SearchConstructor
                setSearchString={searchString}
            />
            <ConstructorList
                listConstructor={listItems}
            />
        </div>
    );
}

export default Constructor;