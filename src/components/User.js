import React, { Component } from "react";

class User extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.onDeleteClick = this.onDeleteClick.bind(this);
  //   }
  onDeleteClick(id, e) {
    const { deleteUser } = this.props;
    deleteUser(id);
  }

  render() {
    const { id, name, email } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, id)}
            className="btn btn-danger btn-block"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default User;
