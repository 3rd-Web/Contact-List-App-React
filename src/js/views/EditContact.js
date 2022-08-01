import React, { useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  let { id } = useParams();
  let history = useHistory();
  const getContact = store.contacts;

  const editContact = getContact.filter((contact, index) => {
    return contact.id === id;
  })[0];

  const [textInput, setTextInput] = useState({
    full_name: editContact.full_name,
    phone: editContact.phone,
    email: editContact.email,
    address: editContact.address,
    agenda_slug: "alex",
  });

  return (
    <div className="container contactadd">
      <div>
        <h1 className="text-center mt-5 offwhite">" EDIT CONTACT "</h1>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="full_name"
              onChange={(e) => {
                setTextInput({ ...textInput, full_name: e.target.value });
              }}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e) => {
                setTextInput({ ...textInput, email: e.target.value });
              }}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              onChange={(e) => {
                setTextInput({ ...textInput, phone: e.target.value });
              }}
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              onChange={(e) => {
                setTextInput({ ...textInput, address: e.target.value });
              }}
              placeholder="Enter address"
            />
          </div>
          <button
            onClick={() => {
              if (textInput !== "") {
                actions.editContact(textInput, id);
                history.push("/");
              }
            }}
            type="submit"
            className="btn btn-sm form-control "
          >
            save
          </button>
          <Link className="btn btn-warning backbtn" to="/">
            <i class="fa-solid fa-angles-left fa-beat-fade"></i>
          </Link>
        </form>
      </div>
    </div>
  );
};
