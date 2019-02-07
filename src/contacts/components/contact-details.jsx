import React from 'react'
import InjectSheet from 'react-jss'

const styles = (theme) => ({
    text : {
        color : theme.colors.secundary,     
    },
});

const ContactDetails = ({classes}) =>(
    <div className={classes.text}>
        Detalles
    </div>
)

export const ContactDetailsStyles = InjectSheet(styles)(ContactDetails);