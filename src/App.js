import React from 'react';
import { render } from 'react-dom';
import ParagraphEditor from './ParagraphEditor.jsx';

class App extends React.Component {
  
  render() {
    var jsonString = 
    `{ 
      "schema": "http://schemas.pearson.com/PUF_schema/textBlock#/definitions/textBlock", 
      "type": "textBlock", 
      "textBlockType": "paragraph", 
      "inlineContents": [
        { "type": "text", "text": "This is a paragraph with " }, 
        { "type": "inlineImage", 
          "altText": "The alt text", 
          "longDescription": "the long description", 
          "imageId": "image id value", 
          "resourcePath": "http://placekitten.com/g/64/64" 
        }
      ] 
    }`;
    
    return (
      <div >
          <h1> Input JSON </h1>
          <h4>{jsonString}</h4>
          <ParagraphEditor json={jsonString}/>
      </div>
    );
  }

}

export default App;
