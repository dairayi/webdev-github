//import "./SearchUser.css";

const SearchDriver = (
    {setSearchString}
) => {

    return (
        <div className="SearchUser">
            <input placeholder="Search Driver" onChange={e => setSearchString(e.target.value)}/>
            {/* <input placeholder="Search User"/>  */}
        </div>
    );
}

export default SearchDriver;