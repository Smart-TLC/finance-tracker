import React from 'react'
import {
    Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {motion} from 'framer-motion';

const useStyles = makeStyles((theme) => ({
    remain: {
        color: theme.palette.warning.light,
    },
    budget: {
        color: theme.palette.success.main,
    },
    expense: {
        color: theme.palette.error.main,
    },
}));

const textVariants = {
    hidden: {
        opacity: 0,
        x: -100,
        y: -30,
    },
    visible: {
        opacity: 1, 
        x: 0,
        y: -30,
        transition: {
            type: 'spring',
            delay: 1.2,
            stiffness: 200
        }
    }, 
    hover: {
        scale: 1.6,
        textShadow: "0px 0px 8px rgb(255,255,255)"
    }
}

export default function Balance() {
    const classes = useStyles();
    
    return (
        <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
        >
        <Grid container>
            <Grid item xs={4}
                container
                direction="column"
                alignItems="center"
            >
                <Grid item>
                    <motion.h1 
                        className={classes.remain}
                        variants={textVariants}
                        whileHover='hover'
                    >
                        Remaining
                    </motion.h1>
                </Grid>
                <Grid item >
                    <motion.h2 
                        className={classes.remain}
                        variants={textVariants}
                    >
                        $200
                    </motion.h2>
                </Grid>
            </Grid>
            <Grid item xs={4}
                container
                direction="column"
                alignItems="center"
            >
                <Grid item>
                    <motion.h1 
                        className={classes.budget}
                        variants={textVariants}
                        whileHover='hover'
                    >
                        Budget
                    </motion.h1>
                </Grid>
                <Grid item>
                    <motion.h2 
                        className={classes.budget}
                        variants={textVariants}
                    >
                        $300
                    </motion.h2>
                </Grid>
            </Grid>
            <Grid item xs={4}
                container
                direction="column"
                alignItems="center"
            >
                <Grid item>
                    <motion.h1 
                        className={classes.expense}
                        variants={textVariants}
                        whileHover='hover'
                    >
                        Expense
                    </motion.h1>
                </Grid>
                <Grid item>
                    <motion.h2 
                        className={classes.expense}
                        variants={textVariants}
                    >
                        $100
                    </motion.h2>
                </Grid>
            </Grid>
        </Grid>
    </motion.div>
    )
}