var React = require('react');
var ReactDOM = require('react-dom');

var Menu = require('../components/Menu');
var Header = require('../components/Header');


var Main = React.createClass({
  render: function(){
    return(
      <div>
       <Menu></Menu>
       <Header></Header>
       {this.props.children}
      </div>
    )
  }
});

module.exports = Main;