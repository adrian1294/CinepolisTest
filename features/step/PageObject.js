'use strict';
class cinepolisPage{
    
    constructor(){  
        this.url = "http://www.cinepolis.com/";
        this.elements = {
            "citysDropdown": "#cmbCiudades",
            "inputPlace": "#cmbComplejos",
            "closeBtn": "#takeover-close"
        }
    }

    getUrl() {
        return this.url
    }

    getElement(myElement) {
        return this.elements[myElement]
    }
}
export default new cinepolisPage();