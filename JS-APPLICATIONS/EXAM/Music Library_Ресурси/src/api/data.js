import { del, get, post } from "./api.js";

export async function createAlbum(data) {
    return post("/data/albums", data);
}

export async function getAllAlbums() {
    return get("/data/albums?sortBy=_createdOn%20desc");
}

export async function deleteAlbumById(id) {
    return del("/data/albums/" + id);

}

export async function getDetailsById(id) {
    return get("/data/albums/" + id);
}