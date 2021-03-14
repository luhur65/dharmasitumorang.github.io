import { default as Sertifikat } from "../../Data/sertifikat.js";

const renderCertificate = _ => {

    const DOMRender = document.querySelector('#list-sertifikat');
    DOMRender.innerHTML = '';

    Sertifikat.forEach(s => {
        DOMRender.innerHTML += `
        <div class="col-lg-9" >
            <li class="mb-3">
                <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                ${s.title} - <a href="${s.url_send}">${s.from}</a>
                <div class="mt-1">
                    <a href="${s.url_sertifikat}" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Look More ...">
                        <img loading="lazy" width="400px" class="img-fluid img-thumbnail" src="./assets/sertificate/${s.img_sertifikat}" alt="Sertifikat ${s.title}">
                    </a>
                </div>
            </li>
        </div>
        `;
    });

    // activation tooltip bootsrap
    $('[data-toggle="tooltip"]').tooltip()
}

export default renderCertificate;