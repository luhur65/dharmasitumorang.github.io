import RoutingPage from "../App/Routes/routes.js";

const content = document.querySelector("#dinamic-content");
const getContentByFetch = (content = "") => {

    const page404 = `
    <section class="resume-section" id="about">
        <div class="resume-section-content">
            <div class="text-center">
                <h2 class="error mx-auto text-danger">404</h2>
                <p class="lead text-gray-800 mb-5">Page Not Found</p>
                <p class="text-gray-500 mb-3">
                    Sorry , Page Not Exist Any more !!!
                </p>
                <a href="./" class="mt-3"> 
                    <i class="fa fa-angle-left fa-fw" aria-hidden="true"></i> 
                    Back to Home
                </a>
            </div>
        </div>
    </section>
    `;

    return fetch(content)
        .then(response => (response.status === 200) ? response.text() : page404)
        .then(response => response)
        .catch(_error => page404);
}

const renderLinkNav = (navContent = "") => {

    // Muat daftar tautan menu
    document.querySelectorAll("#list-navbar").forEach(function (elm) {
        elm.innerHTML = navContent;
    });

    // Daftarkan event listener untuk setiap menu
    document.querySelectorAll(".nav-link").forEach(function (elm) {
        elm.addEventListener("click", async function (event) {

            // Muat Konten Halaman yg Dipanggil
            const page = event.target.getAttribute("href").substr(1);
            content.innerHTML = await getContentByFetch(`pages/${page}.html`);

            RoutingPage(page);

        });
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
}

const NavbarInit = async _ => {

    // Load Page Content
    let page = window.location.hash.substr(1);
    if (page === "" || page == "top") page = "about";

    content.innerHTML = await getContentByFetch(`pages/${page}.html`);
    RoutingPage(page);

    const navbar = await getContentByFetch('nav.html');
    renderLinkNav(navbar);

}

export default NavbarInit;