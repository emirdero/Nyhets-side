import React from "react";
import { Component } from "react";
import { CommentSection } from "../components/CommentSection.js";
import ArtikkelHenter from "../ArtikkelHenter";
const axios = require('axios');

export class ArtikkelModalContainer extends Component {
    state = {
        kommentarer: [],
        artikkeler: this.props.artikkeler
    }
    componentDidMount() {
        this.getArtikkler(this.props.artikkelId);
    }

    saveComment(artikkelId) {
        var kommentarText = document.getElementById("nyComment").value;
        ArtikkelHenter.sendKommentar(kommentarText, artikkelId);
        alert("kommentar sendt!");
        //document.getElementById("commentSection").appendChild(nyKommentar);
    }

    likeArtikkel(artikkelId) {
        var likes = document.getElementById("artikkelLikes" + artikkelId);
        likes.innerHTML = parseInt(likes.innerHTML) + 1;
    }
    async getArtikkler(artikkelId) {
        var testing = "http://localhost:8080";
        axios
            .get(testing + "/Kommentarer")
            .then(data => { this.setState({ kommentarer: data.data }); console.log(data.data) })
            .catch(err => {
                console.log(err);
                return null;
            });
    };

    render() {
        return (this.state.artikkeler.map(artikkel => artikkelModal(artikkel, this.state.kommentarer)))
    }
}

function artikkelModal(artikkel, kommentarer) {
    return (
        < div className="modal fade" id={"artikkel" + artikkel.artikkelId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{artikkel.overskrift}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-header">
                        <h5>Likes: {artikkel.likes} </h5>
                        <button type="button" className="btn bg-success text-white" aria-label="Like">Like</button>
                    </div>
                    <div className="modal-body">
                        {artikkel.fultInnhold}
                    </div>
                    <div id="commentSection" className="modal-footer">
                        {kommentarer.length === 0 ?
                            (<div className="mr-auto">Ingen kommentarer</div>) :
                            (<div className="mr-auto">
                                <CommentSection artikkelId={artikkel.artikkelId} kommentarer={kommentarer}></CommentSection>
                            </div>)

                        }
                    </div>
                    <div className="modal-footer">
                        <input className="form-control" placeholder="Din kommentar" id="myComment" />
                        <button type="button" className="btn btn-primary" onClick={() => this.saveComment(artikkel.artikkelId)}>Lagre</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Lukk</button>
                    </div>
                </div>
            </div>
        </div >
    );
}