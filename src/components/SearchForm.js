import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Search..."
          id="term"
        />
        <i className="fa fa-search p-2"
            type="submit" 
            onClick={props.handleSearch} 
            >
        </i>
      </div>
    </form>
  );
}

export default SearchForm;