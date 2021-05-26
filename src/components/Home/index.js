import React, {useEffect, useRef, useState} from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import styles from './styles';

const Home = ( props ) => {
    const {classes} = props;
    const { history } = props;

    console.log("================================== Home ======================================");

    // Component States

    // Setup Component
    useEffect(() => {

    }, []);

    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Container maxWidth={false} className={classes.blockBackground0}>
                    <div className={classes.mainBlock}>
                        Home page content....
                    </div>
                </Container>
            </main>
        </div>
    );
};

export default withStyles( styles )( Home );