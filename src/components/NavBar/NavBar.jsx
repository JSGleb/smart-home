import { Link } from 'react-router-dom'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link className='link' to={'/'}>Я</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link
                            className='link'
                            to={'/projects'}>Проекты</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link 
                            className='link'
                            to={'/about'}>Обо мне</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link 
                            className='link'
                            to={'/reg'}>Регистрация</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}
