//import './ListUsers.css';
import React, { useContext } from "react";
//import authContext from "../auth/authContext";
import ListDriver from "./ListDriver";

const DriverList = ({
                       listDrivers
                   }) => {

    return (
        <div className="DriverList">

            {console.log(listDrivers)}
            {listDrivers.map(item => (
                <ListDriver
                    className="ListDriver"
                    driverId={item.driverId}
                    driverRef={item.driverRef}
                    number={item.number}
                    code={item.code}
                    forename={item.forename}
                    surname={item.surname}
                    dob={item.dob}
                    nationality={item.nationality}
                    url={item.url}
                />
            ))}
        </div>
    );
}

export default DriverList;