import React, {Component} from "react";
import {Table} from "reactstrap";
import {connect} from "react-redux";

class List extends Component {

    render() {

        const usersList = this.props.users.map(item=> (
            <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.phone}o</td>
            </tr>
        ))

        return(
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {usersList}
                </tbody>
            </Table>
        )
    }
}

const mapStateToProps = (state)  => {
    return {
        users: state.users.users,
    }
}

export default connect(mapStateToProps)(List);