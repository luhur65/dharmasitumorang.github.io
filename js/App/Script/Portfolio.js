import Portfolio from "../../Data/portfolio.js";

const renderPortfolio = _ => {

    const DOMRender = document.querySelector('#render-portfolio');
    DOMRender.innerHTML = '';

    Portfolio.forEach(p => {

        const textLink = (p.link_source != undefined) ? p.link_source : 'Site was Unactivated';
        const urlLink = (p.link_source != undefined) ? p.link_source : 'javascript:void()';

        DOMRender.innerHTML += `
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
                <h3 class="mb-0">${p.title}</h3>
                <div class="subheading mb-3">${p.subtitle}</div>
                <figure class="figure">
                    <img src="./assets/portfolio/${p.img_app}" loading="lazy" class="figure-img img-fluid rounded" alt="Image ${p.title}">
                    <figcaption class="figure-caption">
                        <span>Visit Site :</span>
                        <a href="${urlLink}" target="_blank" class="badge badge-light p-2">${textLink}</a>
                    </figcaption>
                </figure>
            </div>
            <div class="flex-shrink-0">
                <span class="badge badge-primary p-1">${p.date_created}</span>
            </div>
        </div>
        `;
    });

}

export default renderPortfolio;