import React from 'react';

const AsComponent = ({ as = "div", children, ...props }) => {
    return React.createElement(as, props, children);
}

export default AsComponent;