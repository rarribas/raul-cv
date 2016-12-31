var React = require('react');
var ReactDOM = require('react-dom');


var Main = React.createClass({
  render: function(){
    return(
      <div>
       MENU
       {this.props.children}
      </div>
    )
  }
});

module.exports = Main;