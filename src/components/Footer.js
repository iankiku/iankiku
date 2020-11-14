import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";


// const useStyles = makeStyles({
//     footer: {
//         background: '#ccc',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'black',

//         padding: '0 30px',
//     },
//     footerItems: {
//         // background: '#fbf9fb',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'red',

//         padding: '0 30px',
//     },
// });


export const Footer = () => {
    return (

        <section>
            <Container>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/api">Api Doc</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </Container>

        </section>

    );
}

