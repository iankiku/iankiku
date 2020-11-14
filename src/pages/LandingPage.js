import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid } from '@material-ui/core';
import ApiTabs from '../components/tabs-component'
import useFetchData from '../components/dataFetch'

// https://use.fontawesome.com/releases/v5.12.0/css/all.css',

// background: #f9f9ff
// color: #443385;
// background: #eeeeff;


const useStyles = makeStyles((theme) => ({

    homeHero: {
        flexGrow: 1,
        // backgroundColor: "#fff"
    },
    codeArea: {
        color: "#64ffda",
        backgroundColor: '#0a192f;',
        height: 150,
        padding: 10,
    },
    call_to_action: {
        fontSize: "1.5rem",

        padding: 20
    },
    faded: {

    },
    placeholder: {

    }

}));


export const LandingPage = () => {
    const classes = useStyles();
    const [posts] = useFetchData();
    console.log(posts)

    return (


        <React.Fragment>

            <section className={classes.placeholder}>
                <Container>


                    <Grid container >
                        <Grid item xs={12} sm={6} className="hero-heading">

                            <div className="tiny-heading">
                                <h1>Hello world, my name is </h1>
                            </div>
                            <div className="big-heading faded">
                                <h2>Ian Kiku</h2>
                            </div>
                            <div className="big-heading">
                                <h2>I'm a Software Engineer, I build things.</h2>
                            </div>
                            <div className="call2action_text">
                                <p>#Python, C#, Node.Js, Ruby on Rails</p>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div  >
                                <h3>My API</h3>
                                <Paper className={classes.codeArea}>
                                    <ApiTabs />
                                </Paper>

                            </div>
                        </Grid>

                    </Grid>
                </Container>

            </section>

            <section>
                <Container>
                    display some data here
                    <ul>
                        {
                            posts.map(post => (<li key={post.id}>{post.title}</li>))
                        }
                    </ul>
                </Container>
            </section>
        </React.Fragment>


    );
}