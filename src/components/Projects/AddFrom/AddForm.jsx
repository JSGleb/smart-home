import React from 'react'
import lightOff from '../../../img/icons8-выключить-свет-96.png';

export default function AddForm({ tools, setAdd, setTools }) {
    const subHandler = (e) => {
        e.preventDefault();
        setAdd(false);
        
        const obj = {
            id: tools.length + 1,
            name: e.target[0].value,
            img: lightOff,
            state: false,
        }
        setTools([...tools, obj]);
    }

    return (
        <form onSubmit={subHandler}>
            <input type="text"/>

            <button>Добавить</button>
        </form>
    )
}
