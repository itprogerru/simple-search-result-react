import React, {Component} from 'react';
import {Button, Form, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {connect} from "react-redux";
import {searchUser, searchUserAsync} from "../../redux/actions/users";



class Search extends Component {

    handleChange = (e) => {
        if (!this.props.isSubmit) {
            this.props.userSearch(e.target.value);
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.userSearchAsync(e.target.stringSearch.value)
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <Input name="stringSearch" onChange={this.handleChange} />
                    {this.props.isSubmit ?
                    <InputGroupAddon addonType="append"><Button type="submit">I'm a button</Button></InputGroupAddon>
                        : null }

                </InputGroup>
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSearch: (value) => dispatch(searchUser(value)),
        userSearchAsync: (value) => dispatch(searchUserAsync(value))
    }
};

export default connect(null, mapDispatchToProps)(Search);