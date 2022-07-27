import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "/workspace/react-hello-webapp/src/js/store/appContext.js";
import branch from "../../img/branch.png";
import banana from "../../img/bananaduct.png";

export const ContactCard = (props) => {
  const { actions } = useContext(Context);
  return (
    <div className="container maincard">
      <div className="d-flex justify-content-left">
        <div>
          <img
            className="pfp"
            src="https://i.pinimg.com/736x/8c/d0/18/8cd018a04ac2664c86ff610f892a5bf1.jpg"
          ></img>
        </div>
        <div className="groups">
          <h1 className="nametag">{props.fullname}</h1>
          <span className="fa fa-phone fa-fw text-muted mr-3" />
          <p>{props.phone}</p>
          <span className="fa fa-envelope fa-fw text-muted mr-3" />
          <p>{props.email}</p>
          <i className="fas fa-map-marker-alt text-muted mr-3" />
          <p>{props.address}</p>
          <div className="container edtdelbtn">
            <button
              className="custombutton delbtn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Delete Contact"
              onClick={() => actions.deleteContact(props.id)}
            >
              <i class="fa-solid fa-user-xmark"></i>
            </button>
            <Link to={`/edit-contact/${props.id}`}>
              <button
                className="custombutton editbtn"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Edit Contact"
              >
                <i class="fa-solid fa-user-pen"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>{" "}
      <div className="container bananarepublic offwhite">
      <img className="banana" src={banana} />
        <img className="banana" src={banana} />
        <img className="banana" src={banana} />
        <img className="banana" src={banana} />
        <img className="banana" src={banana} />
        <img className="banana" src={banana} />
        <img className="banana" src={banana} />
        <img className="banana" src={banana} />
        <img className="banana" src={banana} />
        <img className="banana" src={banana} />
      </div>
    </div>
  );
};

export default ContactCard;
