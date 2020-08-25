import React from 'react';

class Greet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', isSubmit: false};
    this.updateName = this.updateName.bind(this);
    this.toggleSubmit = this.toggleSubmit.bind(this);
  }

  updateName({target}) {
    this.setState(() => ({name: target.value}));
  }

  toggleSubmit() {
    this.setState((state) => ({isSubmit: !state.isSubmit}));
  }

  render() {
    let nameBox = (
      <input
        placeholder="Name"
        value={this.state.name}
        onChange={this.updateName}
      ></input>
    );
    let buttonText = 'Say hello';

    if (this.state.isSubmit) {
      buttonText = 'Enter other name';
      nameBox = <p>hello {this.state.name}</p>;
    }

    return (
      <div>
        {nameBox}
        <button onClick={this.toggleSubmit}>{buttonText}</button>
      </div>
    );
  }
}

export default Greet;
