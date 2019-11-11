import React from "react";
import Navbar from "../components/Navbar.js";
import ArtikkelHenter from "../ArtikkelHenter";

function artikkelCard(artikkel) {
    let kategorier = ["Sport", "Nyheter", "Kultur"];
    let viktigheter = ["Svært viktig", "Middels viktig", "Lite viktig"];
    return (
        <div className="card m-3">
            <img
                className="card-img-top img-fluid"
                src={artikkel.bilde}
                alt={artikkel.bildeAlt}
            ></img>
            <div className="card-block">
                <h4 className="card-title text-center custom-title-movies">
                    <a>
                        {artikkel.overskrift}
                    </a>
                </h4>
                <p className="card-text text-center custom-title-movies">{artikkel.innhold}</p>
                <div className="col-sm-12 text-center">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#artikkel" + artikkel.artikkelId}>Les mer</button>
                </div>
                <p className="card-text custom-title-movies text-center">
                    <small className="text-muted">
                        Kategori: {kategorier[artikkel.kategoriId]}
                    </small>
                    <br />
                    <small className="text-muted">
                        Viktighet: {viktigheter[artikkel.viktighet]}
                    </small>
                    <br />
                    <small className="text-muted">
                        Lagt ut: {artikkel.innleggelseTid.split("T")[0].split("-")[2] + "." + artikkel.innleggelseTid.split("T")[0].split("-")[1] + "." + artikkel.innleggelseTid.split("T")[0].split("-")[0] + " kl: " + artikkel.innleggelseTid.split("T")[1].substring(0, 5)}
                    </small>
                </p>
            </div>
        </div>
    );
}

async function artikkelModal(artikkel) {
    let kommentarer = await ArtikkelHenter.hentKommentarer(artikkel.artikkelId);
    return (
        <div className="modal fade" id={"artikkel" + artikkel.artikkelId} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{artikkel.overskrift}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-header">
                        <h5>Likes: </h5><h5 id={"artikkelLikes" + artikkel.artikkelId}>{artikkel.likes}</h5>
                        <button type="button" className="btn" aria-label="Like">Like</button>
                    </div>
                    <div className="modal-body">
                        {artikkel.fultInnhold}
                    </div>
                    <div id="commentSection" className="modal-footer">
                        {kommentarer.map((kommentar) => kommentarFormaterer(kommentar))}
                    </div>
                    <div className="modal-footer">
                        <input className="form-control" placeholder="Din kommentar" id="myComment" />
                        <button type="button" className="btn btn-primary" onClick={"saveComment(" + artikkel.artikkelId + ")"}>Lagre</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Lukk</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function kommentarFormaterer(kommentar) {
    return (
        <div>
            <div>
                <p>{kommentar.innhold}</p><button id={"likeKnapp" + kommentar.kommentarId} type="button" onClick={"likeComment(" + kommentar.kommentarId + ")"} className="btn" aria-label="Like">Like</button>
            </div>
            <div>
                <p>Likes: </p><p id={"kommentarLikes" + kommentar.kommentarId}>{kommentar.likes}</p>
            </div>
        </div>
    );
}

function artikkelTitleCard(artikkel) {
    return (
        <div className="col-sm-4 my-3">
            <div className="card">
                <h4>
                    Artikkel id: {artikkel.artikkelId}
                </h4>
                <h3>
                    {artikkel.overskrift}
                </h3>
            </div>
        </div>
    );
}

function tickerItem(artikkel) {
    return (
        <div className="ticker__item">
            {artikkel.innleggelseTid.split("T")[1].substring(0, 5)} {artikkel.overskrift}
        </div>
    );
}

export function base(tittel, kategori, location) {
    let Artikler = ArtikkelHenter.hentArtikler(kategori);
    return (
        <div>
            <header className="p-3">
                <h1>{tittel}</h1>
            </header>
            <Navbar location={location} />
            <div className="card-columns">
                {Artikler.map(temp => artikkelCard(temp))}
            </div>
            <div className="ticker-wrap">
                <div className="ticker" id="liveFeed">
                    {Artikler.map(temp => tickerItem(temp))}
                </div>
            </div>
            <div>
                {Artikler.map(temp => artikkelModal(temp))}
            </div>
        </div>
    );
}

export function IdDisplay(location) {
    let Artikler = ArtikkelHenter.hentArtikler(0);
    return (
        <div>
            <div className="container">
                <div className="row">{Artikler.map(temp => artikkelTitleCard(temp))}</div>
            </div>
        </div>
    );
}