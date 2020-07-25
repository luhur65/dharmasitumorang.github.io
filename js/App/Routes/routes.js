import renderCertificate from "../Script/Certificate.js";
import renderPortfolio from "../Script/Portfolio.js";
const RoutingPage = page => {

    // Tentukan Script Mana yg Akan Dieksekusi sesuai page nya.
    switch (page) {
        // case 'about':
            
        //     break;

        case 'awards':
            renderCertificate();
            break;

        // case 'education':
            
        //     break;

        case 'portfolio':
            renderPortfolio();
            break;

        // case 'interests':
            
        //     break;

        // case 'skills':
            
        //     break;
    
        default:
            break;
    }

}

export default RoutingPage;