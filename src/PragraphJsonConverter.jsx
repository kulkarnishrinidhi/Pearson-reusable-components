import React from 'react';
import RACFactory from './RACFactory.jsx';
import { ReactDOM } from 'react-dom';

export default class ParagraphJsonConverter extends React.Component {
  jsonParse(json){return JSON.parse(json)};
  createJson(object){return JSON.stringify(object)}
};