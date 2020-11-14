import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import '../../index.css'


const useStyles = makeStyles({
    pageRoot: {
        // background: '#020c1b',
        // color: var(--navy),
    },
});

//* / Site Layout
export const AppLayout = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.pageRoot}>

            {props.children}
            {/* <DataFetch /> */}
        </div>
    );
}