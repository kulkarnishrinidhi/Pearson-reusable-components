
import RACFactory from './RACFactory.jsx';
import React from 'react';
import { ReactDOM } from 'react-dom';

class JsonConverter extends React.Component {
  //converts json string to javascript object
  jsonParse(json) {
    return JSON.parse(json)
  };

  //converts js object to json string
  createJson(object){
    return JSON.stringify(object)
  }
};

export default class ParagraphEditor extends JsonConverter {
  constructor(props) {
    super(props);
    this.setParagraphText = this.setParagraphText.bind(this);
    this.setParagraphImage = this.setParagraphImage.bind(this);

    this.state = {
      json: props.json,
      object: this.jsonParse(props.json),
    }
    this.updateState = this.updateState.bind(this);
  };

  updateState(e) {
    this.setState({ data: e.target.value });
  };
  
  
  setParagraphText(dataFromChild){
    console.log('ParagraphEditor');
    var objectFromText = this.state.object;
    objectFromText.inlineContents[0].text = dataFromChild;

    this.setState({ object: objectFromText});
    this.setState({ json: this.createJson(objectFromText) });
  };

  setParagraphImage = (dataFromChild) => {
    var objectFromImage = this.state.object;
    objectFromImage.inlineContents[1].resourcePath = dataFromChild;
    
    this.setState({ object: objectFromImage });
    this.setState({ json: this.createJson(objectFromImage)});
  }

  render() {
    var dataText = { 
      type: 'text', 
      data: this.state.object.inlineContents[0].text,
      callback: this.setParagraphText 
    };
    var TextEditorRAC = RACFactory.build(dataText);
    var dataImage = { 
      type: 'image', 
      data: this.state.object.inlineContents[1].resourcePath,
      callback: this.setParagraphImage 
    };
    var ImageEditorRAC = RACFactory.build(dataImage);
    
    return (
      <div >
        <h1> Pragraph Editor  </h1>
        {ImageEditorRAC}
        {TextEditorRAC}     
        <h1> JSON after Editing</h1>
        <h4>{this.state.json} </h4>
      </div>
    );
  }

}

