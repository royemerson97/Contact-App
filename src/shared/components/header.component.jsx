import React from 'react'
import InjectSheet from 'react-jss'

const styles = (theme) => ({
    header : {
        background : theme.colors.background,
        color : theme.colors.white,
        padding : '1em'     
    },
    login : {
        float : 'right',
        cursor : 'pointer',
        background : theme.colors.secundary,
    }
});

const Header = ({classes}) => (
    <header className={classes.header}>
        Contact App
        <div className={classes.login}>
            login
        </div>
    </header>
);

export const StyledHeader = InjectSheet(styles)(Header);