import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick() {
    console.log('Input was clicked');
  }

  onFormSubmit = event => {
    event.preventDefault();
    console.log('this.state.term', this.state.term);
  };

  //   onFormSubmit(ecent) {
  //         event.preventDefault();
  //   }

  render() {
    return (
      <div className="ui segment">
        <form
          //onSubmit={(event) => this.onFormSubmit(event)}
          onSubmit={this.onFormSubmit}
          className="ui form"
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              //onClick={this.onInputClick}
              //onChange={(e) => { console.log(e.target.value) }}
              //onChange={this.onInputChange}
              //onChange={e => this.setState({ term: e.target.value.toUpperCase() })}
              onChange={e => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
