import React from "react"

function Search({filtered}) {


    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={filtered} />
        </div>
    );
}

export default Search;