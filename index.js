const React = require('react');

const AsComponent = ({ as = "div", children, ...props }) => {
    return React.createElement(as, props, children);
}

module.exports = AsComponent;