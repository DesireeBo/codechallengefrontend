import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    const history = useHistory();
    function logOut() {
        localStorage.clear();
        history.push('/register')
    }
    return (
        <div>
            {/* <h1>Header Product</h1> */}
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Code challange</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                    {/* <Nav.Link href="#home">Home</Nav.Link> */}

                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/add">Add Product</Link>
                                <Link to="/update">Update Product</Link>
                                <Link to="/search">Search Ticket</Link>
                                <Link to="/searchOrganization">Search Organization</Link>
                                <Link to="/OrganizationSearch">Organization Search</Link>
                                <Link to="/UserSearch">User Search</Link>
                                <Link to="/SearchUser">Search User</Link>
                                <Link to="/TicketSearch">Search Tickets</Link>
                                <Link to="/SearchTicket">Tickets Search</Link>






                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }


                </Nav>
                {/* {localStorage.getItem('user-info')} */}
                <Nav>
                    <NavDropdown title={user && user.name}></NavDropdown>
                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </Nav>
                {/* :null */}
            </Navbar>
        </div>
    )
}

export default Header