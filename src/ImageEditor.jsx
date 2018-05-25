import React from 'react';

export default class ImageEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
    this.updateState = this.updateState.bind(this);
    this.callback = this.props.callback;
    this.callback = this.callback.bind(this);
    this.onDoneButton = this.onDoneButton.bind(this);
  };

  updateState(e) {
    this.setState({ data: e.target.value });
  }

  onDoneButton() {
    this.callback(this.state.data);
  };
  
  render() {
    return (
      <div>
        <h2> Please enter image url </h2>
        <input type="text" value={this.state.data}
          onChange={this.updateState} />

        <button onClick={this.onDoneButton}>Done</button>
        <h2/>
         <img src={this.state.data} alt={` picture`} className="img-responsive" />
      </div>
    );
  }
}

