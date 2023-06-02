import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import lightOff from './../../img/icons8-выключить-свет-96.png';
import garageOff from '../../img/icons8-гараж-закрыт-96.png';
import AddForm from './AddFrom/AddForm'
import ToolCard from './toolCard/ToolCard';
import './Project.css';

export default function Projects() {
    const [tools, setTools] = useState([
        {id: 1, name: 'Лампочка', img: lightOff, state: false},
        {id: 1, name: 'Гараж', img: garageOff, state: false}
    ])
    const [add, setAdd] = useState(false);
    const regHandler = () => {
        setAdd(true);
    }
    return (
        <>
            <h1 style={{textAlign: 'center', margin: '20px 0'}}>Проекты</h1>

            { add ? null : <Button onClick={regHandler} variant='dark'>Добавить</Button> }

            { add ? <AddForm tools={tools} setTools={setTools} setAdd={setAdd}/> : <div className='flexContainer'>
                {tools.map((el) => {
                    return <ToolCard key={el.id} el={el} setTools={setTools} tools={tools}/>
                })}
            </div>}

        </>
    )
}
