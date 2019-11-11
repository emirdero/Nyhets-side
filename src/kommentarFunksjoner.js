import ArtikkelHenter from "../ArtikkelHenter";
//import { kommentarFormaterer } from "./pages/artikkelFormaterer.js";

export function likeComment(kommentarId) {
    var likes = document.getElementById("kommentarLikes" + kommentarId);
    likes.innerHTML = parseInt(likes.innerHTML) + 1;
    document.getElementById("likeKnapp" + kommentarId).disabled = true;
    localStorage.setItem('comment' + kommentarId, 'true');
}

export function saveComment(artikkelId) {
    var kommentarText = document.getElementById("nyComment").value;
    ArtikkelHenter.sendKommentar(kommentarText, artikkelId);
    alert("kommentar sendt!");
    //document.getElementById("commentSection").appendChild(nyKommentar);
}

export function likeArtikkel(artikkelId) {
    var likes = document.getElementById("artikkelLikes" + artikkelId);
    likes.innerHTML = parseInt(likes.innerHTML) + 1;
}