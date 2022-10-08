import { Navbar,Container,Nav } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import searchMovie from "./App"


const NavigationBar = () =>{
    return(
    <div>
       <Navbar>
        <Container>
            <Navbar.Brand><h1 className="text-danger">Movielist</h1></Navbar.Brand>
            <Form className="d-flex" onSubmit={searchMovie}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Nav>
            <Button className="me-3" variant="outline-danger">Login</Button>{' '}
            <Button variant="outline-danger">Sign Up</Button>{' '}
            </Nav>
        </Container>
       </Navbar>
    </div>
    )
}

export default NavigationBar


