var React = require('react');
var ReactDOM = require('react-dom');

var Home = React.createClass({
  render: function(){
    console.log('HOME??');
    return(
      <div>
        Hello from home!!
      </div>
    )
  }
});

module.exports = Home;