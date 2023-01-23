import React from "react";
import "./search.css"

class SearchInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {searchValue: ""};
    }
  
    handleChange = (event) => {
      this.setState({searchValue: event.target.value});
    }
  
    render() {
      return (
        <div>
          <input
            className="in" type="text"
            placeholder="Search..."
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }


  export default SearchInput;
  