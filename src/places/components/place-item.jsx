import React from "react";

import "./place-item.css";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

class PlaceItem extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".modal");
    var instance = M.Modal.init(elems, {
      inDuration: 250
    });
  }

  render() {
    const { id, image, description, title, address, creator } = this.props;
    return (
      <div className="user-item-place col m6 s11">
        <div id="user-itemm-place" className="card medium">
          <div class="card-image">
            <img src={`${image}`} />
          </div>
          <div class="card-content grey-text text-darken-3">
            <span class="card-title">{title}</span>
            <span class="">{address}</span>
            <span class="">{description}</span>

            <div className="place-item-actions row">
              <div className="place-item-actions-first col m4 s5">
                {/* <a
                  class="btn-floating btn-large pulse waves-effect waves-light view-on-map-place-item invert modal-trigger"
                  id="view-on-map-place-items"
                >
                  <i class="material-icons right">place</i>
                </a> */}
                <a
                  class="btn-floating pulse waves-effect waves-light btn-large  modal-trigger"
                  href="#modal1"
                >
                  <i class="material-icons right">place</i>
                </a>
              </div>

              <div className="place-item-actions-second col m4 s3">
                <div className="row">
                  <Link to={`/places/${this.props.id}`}>
                    <button class="btn-floating btn-large  waves-effect waves-light edit-place-item red accent-3">
                      <i class="material-icons right">edit</i>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="place-item-actions-third col m4 s3">
                <a
                  class="btn-floating  waves-effect waves-light btn-large red darken-4  modal-trigger"
                  href="#modal2"
                >
                  <i class="material-icons right">delete</i>
                </a>

                {/* <button class="btn-floating btn-large  waves-effect waves-light red accent-4">
                  <i class="material-icons right">delete</i>
                </button> */}
              </div>
            </div>
          </div>
        </div>

        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>{this.props.title}</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>

        <div id="modal2" class="modal">
          <div class="modal-content red white-text">
            <h4 className="">Do you really want to delete this</h4>
            <p>It cannt be undone</p>
          </div>
          <div class="modal-footer">
            <a
              href="/deleted"
              class="modal-close deleteed waves-effect waves-green red accent-5 btn-flat"
            >
              Delete
            </a>
            <a
              href="#!"
              class="modal-close cancle waves-effect waves-green   btn-flat"
            >
              Cancle
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceItem;
