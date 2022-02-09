import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = ({tab}) => {
    
    
    return (
        <Navbar bg="success">
            {
                tab && tab === 'food'&& <h1 style={{color: "white"}}>Your all Food Here</h1>
            }
            {
                tab && tab === 'student'&& <h1 style={{color: "white"}}>All Students</h1>
            }
            {
                tab && tab === 'distribution'&& <h1 style={{color: "white"}}>Distibution Management</h1>
            }
        </Navbar>
    );
};

export default Header;