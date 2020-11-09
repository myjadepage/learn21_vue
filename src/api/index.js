import axios from "axios";

const config = {
    baseUrl: 'http://localhost:8443/basic/'
}

// 대메뉴
function getSideMenuList() {
    return axios.get(`${config.baseUrl}menu/find`);
}

