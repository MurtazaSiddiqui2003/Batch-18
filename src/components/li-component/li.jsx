import React from 'react';

const Li_Component = (props) => {
    console.log('Li Props: ', props);
    const { liData, delHandler, liKey } = props;
    return (
        <li>
            {liData}
            <div>
            <button id='delBtn' onClick={() => delHandler(liKey)}> Delete Item </button>
            {/* <button onClick={() => editItem(index, item)}> Edit Item </button> */}
            </div>
        </li>
    )
}

export default Li_Component;