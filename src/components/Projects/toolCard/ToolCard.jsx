import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import lightOff from '../../../img/icons8-выключить-свет-96.png';
import garageOff from '../../../img/icons8-гараж-закрыт-96.png';
import garageOn from '../../../img/icons8-гараж-открыт-96.png';
import lightOn from '../../../img/icons8-включить-свет-96.png';

export default function ToolCard({ el, setTools, tools }) {

    const clickHandler = () => {
        const temp = tools.filter((i) => el.id !== i.id);
        const obj = {
            id: el.id,
            name: el.name,
            img: el.name === 'Лампочка' ? (el.state?lightOff:lightOn) : (el.state?garageOff:garageOn),
            state: !el.state
        }
        temp.push(obj);
        temp.sort((a,b) => a.id-b.id);
        setTools(temp);
    }

    return (
        <>
            <Card style={{ width: '18rem', marginTop: '10px' }}>
                <Card.Img variant="top" style={{width: '100px', margin: '0 auto'}} src={el.img} />
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text>
                        Чтобы изменить состояние нажмите на кнопку
                    </Card.Text>
                    <Button onClick={clickHandler} varient="primary">{el.state ? 'Выкл' : 'Вкл'}</Button>
                </Card.Body>
            </Card>
        </>
    )
}
