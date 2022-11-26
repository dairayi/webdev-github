import React, { useContext } from "react";
import ListConstructor from "./ListConstructor";
//import authContext from "../auth/authContext";

const ConstructorList = ({
                         listConstructor
                     }) => {

    return (
        <div className="ListConstructor">

            {console.log(listConstructor)}
            {listConstructor.map(item => (
                <ListConstructor
                    className="ListConstructor"
                    constructorId={item.constructorId}
                    constructorRef={item.constructorRef}
                    name={item.name}
                    nationality={item.nationality}
                    url={item.url}
                />
            ))}
        </div>
    );
}

export default ConstructorList;