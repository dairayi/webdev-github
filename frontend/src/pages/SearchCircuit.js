const SearchCircuit = (
    {setSearchString}
) => {

    return (
        <div className="SearchCircuit">
            <input placeholder="Search Circuit" onChange={e => setSearchString(e.target.value)}/>
            {/* <input placeholder="Search User"/>  */}
        </div>
    );
}

export default SearchCircuit;