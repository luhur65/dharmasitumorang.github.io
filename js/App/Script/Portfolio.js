import Portfolio from "../../Data/portfolio.js";

const renderPortfolio = _ => {

    const DOMRender = document.querySelector('#render-portfolio');
    DOMRender.innerHTML = '';

    Portfolio.forEach(p => {

        const textLink = (p.link_source != undefined) ? p.link_source : 'Link is Broken!!';
        const urlLink = (p.link_source != undefined) ? p.link_source : '#broken-link';

        DOMRender.innerHTML += `
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
                <h3 class="mb-0">${p.title}</h3>
                <div class="subheading mb-3">${p.subtitle}</div>
                <figure class="figure">
                    <img src="./assets/portfolio/${p.img_app}" class="figure-img img-fluid rounded" alt="Image ${p.title}">
                    <figcaption class="figure-caption">
                        <a href="${urlLink}" target="_blank">${textLink}</a>
                    </figcaption>
                </figure>
            </div>
            <div class="flex-shrink-0">
                <span class="text-primary">${p.date_created}</span>
            </div>
        </div>
        `;
    });

}

export default renderPortfolio;