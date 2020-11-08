import Education from "../../Data/education.js";

const renderEducation = _ => {

   const infoEducation = document.querySelector('#infoEducation');
   infoEducation.innerHTML = '';

   Education.forEach(edu => {
      infoEducation.innerHTML +=`
      <div class="d-flex flex-column flex-md-row justify-content-between mb-3">
            <div class="flex-grow-1">
                <h3 class="mb-0">${edu.sekolah}</h3>
                <div class="subheading mb-3">${edu.jurusan}</div>
                <span class="badge badge-primary">${edu.keterangan}</span>
            </div>
            <div class="flex-shrink-0">
                <span class="text-primary">${edu.masa_sekolah}</span>
                </div>
        </div>`;

   });

} 

export default renderEducation;