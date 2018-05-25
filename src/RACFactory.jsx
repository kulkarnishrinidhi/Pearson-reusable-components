import React from 'react';
import { render } from 'react-dom';
import TextEditor from './TextEditor.jsx';
import ImageEditor from './ImageEditor.jsx'

export default class RACFactory {
    static build(data) {
        switch (data.type) {
            case 'text':
                return <TextEditor data={data.data} callback={data.callback}/>;
            case 'image':
                return <ImageEditor data={data.data} callback={data.callback}/>;
            default:
                return undefined;
        }
    }
}