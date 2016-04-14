
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui grid';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this

    return (
      <div {...other} >
        {children}
      </div>
    );
  }
});

const Grid = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Grid;
