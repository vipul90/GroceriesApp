import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import {Grid,Typography} from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';

export default class Home extends Component {
    render(){
        return (
            <div>
                <Grid container>
                    <Grid container className="">
                        <Grid item xs={10} sm={10} md={10} lg={10}>
                                <NavLink to="/"><HomeIcon style={{ fontSize: 48,color: 'black' }}></HomeIcon></NavLink>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} className="gridRightAlign">
                                <NavLink to="/AddItem"><ShoppingCartIcon style={{ fontSize: 48,color: 'black' }}></ShoppingCartIcon></NavLink>
                        </Grid>
                    </Grid>

                    {/* <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Typography component="h3" variant="h4">
                            Grocery App
                        </Typography>
                    </Grid> */}
                   
                </Grid>
                <br />
            </div>
                // <div>
                // <h1>Grocery App</h1>
                // <ul className="header">
                //     <li><NavLink to="/">Home</NavLink></li>
                //     <li><NavLink to="/AddItem">Add Item</NavLink></li>
                // </ul>
                // <br/>
                // <br/>
                // <br/>
                // </div>
        );
    }
}
