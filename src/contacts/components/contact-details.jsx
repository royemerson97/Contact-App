import React from 'react'
import InjectSheet from 'react-jss'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { ADD_CONTACT } from '../state/contacts.actions';

const styles = (theme) => ({
    text: {
        color: theme.colors.secundary,
    },
});

const ContactDetails = (props) => {
    const {classes, ADD_CONTACT, contacts} = props;
    return (
        <div className={classes.text}>
            <button onClick={() => ADD_CONTACT({name : 'test'})}>{contacts.length}</button>
        </div>
    )
}



const mapStateToProps = state => {
    return{
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ADD_CONTACT}
                            ,dispatch);
}

const StyledContactDetails = InjectSheet(styles)(ContactDetails);
export const ContactsDetails = connect(mapStateToProps,mapDispatchToProps)(StyledContactDetails);