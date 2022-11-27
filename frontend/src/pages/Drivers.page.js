import React, {useContext, useEffect, useState} from 'react';
import DriverList from "./DriverList";
import SearchDriver from "./SearchDriver";
//import '../style/Home.css';
//import {UserContext} from "./contexts/user.context";

function Drivers() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [listItems, setListItems] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        setListItems([]);
        fetch(`http://localhost:3001/driver?surname=${searchString}`)
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
            <div className="SearchUser">
                <input placeholder="Search Driver" onChange={e => setSearchString(e.target.value)}/>
                {/* <input placeholder="Search User"/>  */}
            </div>
        <DriverList
            listDrivers={listItems}
        />
        </div>
    );
}

export default Drivers;
