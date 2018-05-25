import React from 'react';

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.data};
    this.updateState = this.updateState.bind(this);
    this.callback = this.props.callback;
    this.callback = this.callback.bind(this);
    this.onDoneButton = this.onDoneButton.bind(this);
    console.log('text constructor' + this.callback);
  };

  updateState(e) {
    this.setState({ data: e.target.value });
  };

  onDoneButton(){
    this.callback(this.state.data);
  };

  render() {
    return (
      <div>
        <h2> Please enter paragraph text</h2>
        <input type="text" value={this.state.data}
          onChange={this.updateState} />
        <button onClick={this.onDoneButton}>Done</button>
      </div>
    );
  }
  
}