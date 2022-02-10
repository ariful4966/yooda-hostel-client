import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { DataProvider } from '../../App';

const Header = ({tab}) => {
    const user = useContext(DataProvider);
    
    return (
        <Navbar bg="success d-flex justify-content-between " >
           <div className="headerTitle mx-5">
           {
                tab && tab === 'food'&& <h1 style={{color: "white"}}>Your all Food Here</h1>
            }
            {
                tab && tab === 'student'&& <h1 style={{color: "white"}}>All Students</h1>
            }
            {
                tab && tab === 'distribution'&& <h1 style={{color: "white"}}>Distibution Management</h1>
            }
           </div>
           <div className="user_name mx-5">
               {user && <h2 className='text-warning'>{user.name || "Admin"}</h2> }
           </div>
        </Navbar>
    );
};

export default Header;