# React Awesome Stars Rating

React Awesome Stars Rating is a simple star component with easy integration for your React applications.

- Half stars
- Custom size and color
- Value shows with high precision
- Easy integration with Redux
- Accessibility
- SVG Icons

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Documentation](#documentation)

## Installation

`npm install react-awesome-stars-rating`

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import ReactStarsRating from 'react-awesome-stars-rating';

const onChange = (value) => {
  console.log(`React Stars Rating value is ${value}`);
};

const ReactStarsExample = ({ value }) => {
  return <ReactStarsRating onChange={onChange} value={value} />;
};

ReactDOM.render(<ReactStarsExample />, document.getElementById('root'));
```

## Documentation

| Name          | Description                                              | Type     | Default |
| :-------------| :------------------------------------------------------- | :------- | :------ |
| value         | Value                                                    | Number   | 0       |
| onChange      | A function, that will be invoked when value have changed | Function | null    |
| isEdit        | If `true` the rating is in editing mode                  | Boolean  | true    |
| isHalf        | If `true` half stars are available                       | Boolean  | true    |
| count         | Count of the stars                                       | Number   | 5       |
| size          | Size of the stars                                        | Number   | 25      |
| primaryColor  | Star's color when star is active                         | String   | 'yellow'|
| secondaryColor| Star's color when star isn't active                      | String   | 'grey'  |

## Examples

  You can see live examples by below links:

* [Simple Example](https://repl.it/@fedoryakubovich/React-Awesome-Stars-Rating-Simple-Example)
* [Integration](https://repl.it/@fedoryakubovich/React-Awesome-Stars-Rating-Redux-Form-Example) with [redux-form](https://github.com/erikras/redux-form)