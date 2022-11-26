const SearchConstructor = (
    {setSearchString}
) => {

    return (
        <div className="SearchConstructor">
            <input placeholder="Search Constructor" onChange={e => setSearchString(e.target.value)}/>
            {/* <input placeholder="Search User"/>  */}
        </div>
    );
}

export default SearchConstructor;