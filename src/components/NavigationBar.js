// eslint-disable-next-line
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,

    },
    navItems: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    },
    hrLine: {
        width: 120,


    },

    siteTile: {
        marginBottom: 0,
        paddingBottom: 0

    },
    tagLine: {
        fontSize: "1em",
        margin: 0,
        padding: 0
    }
}));


const NavigationBar = (props) => {
    const { history } = props;
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // console.log(isMobile)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);



    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuClick = (pageUrl) => {
        history.push(pageUrl)
        setAnchorEl(null);
    };

    // get menu items from api pass it as props
    const menuItems = [
        {
            pageTitle: 'Home',
            pageURI: '/',
            id: 1
        },
        {
            pageTitle: 'About',
            pageURI: '/about',
            id: 3
        },
        {
            pageTitle: 'Home3',
            pageURI: '/',
            id: 2
        },
        {
            pageTitle: 'Home4',
            pageURI: '/',
            id: 4
        }
    ]

    return (
        <div className={classes.root}>

            {/* <AppBar position="static"> */}
            <Toolbar>

                <div className={classes.title}>

                    {isMobile ?
                        (<>
                            <div >
                                <h3 className="text-logo">Ian Kiku</h3>
                            </div>

                        </>) : (
                            <div >
                                <h3 className="text-logo">Ian Kiku</h3>
                            </div>
                        )

                    }
                </div>

                <div>


                    {isMobile ?
                        (
                            <div>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleMenu} aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    {/* // */}
                                    {
                                        menuItems.map(menuItem => {
                                            const { pageTitle, pageURI, id } = menuItem;
                                            return (<MenuItem key={id} onClick={() => handleMenuClick(pageURI)}>{pageTitle}</MenuItem>)
                                        })
                                    }

                                </Menu>
                            </div>
                        )

                        : (
                            <div className={classes.navItems}>

                                {
                                    menuItems.map(menuItem => {
                                        const { pageTitle, pageURI, id } = menuItem;
                                        return (<MenuItem key={id} onClick={() => handleMenuClick(pageURI)}>{pageTitle}</MenuItem>)
                                    })
                                }


                            </div>
                        )
                    }
                </div>

            </Toolbar>
            {/* </AppBar> */}
        </div>
    );
}

export default withRouter(NavigationBar)