import React from 'react';
import NavigationBar from './NavigationBar'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    header: {
        height: 150,
        // backgroundColor: "red"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    }
}));


export const Header = () => {
    const classes = useStyles();




    return (


        <div className={classes.header}>
            <Container>
                <NavigationBar />
            </Container>
        </div>


    );
}
