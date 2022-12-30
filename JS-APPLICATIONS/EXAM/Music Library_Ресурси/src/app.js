
import {page, render} from "./lib.js";
import { getUserData } from "./util.js";
import { addAlbumVew } from "./vews/addAlbum.js";
import { dashboardVew } from "./vews/dashboardVew.js";
import { detailsVew } from "./vews/detailsVew.js";
import { editVew } from "./vews/editVew.js";
import { homeVew } from "./vews/homeVew.js";
import { loginVew } from "./vews/loginVew.js";
import { updateNav } from "./vews/nav.js";
import { registerVew } from "./vews/registerVew.js";


const main = document.querySelector("main");


page(decorateContext);
page("/", homeVew);
page("/home", homeVew);
page("/dashboard", dashboardVew);
page("/addAlbums", addAlbumVew);
page("/login", loginVew);
page("/register", registerVew);
page("/details/:id", detailsVew);
page("/edit", editVew);



updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if(user) {
        ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main);
}

