import React from 'react';
import './List-item.scss';

const ListItem = ({ listItem }) => {
    return <li className="list-item">{ listItem }</li>
}

export default ListItem;