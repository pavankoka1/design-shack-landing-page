import axios from 'axios';
import toSnakeCase from 'utils/toSnakeCase';
import toCamelCase from 'utils/toCamelCase';

const axiosClient = axios.create();

const baseURL = {
    development: 'https://7too5stg71.execute-api.ap-south-1.amazonaws.com/',
    production: 'https://7too5stg71.execute-api.ap-south-1.amazonaws.com/',
};

const signInUrl = {
    development: 'http://localhost:1729/',
    production: 'https://design-shack.netlify.app/',
};

export const appUrl = signInUrl[process.env.NODE_ENV];
const defaultRedirectUrl = appUrl + 'create-now';
const hostedUIUrl = 'https://user.theprintscompany.com';
const clientIDStr =
    '?client_id=4atgirm1r8pqcpnkcoerso2hv6&response_type=token&scope=email+openid+phone';
const redirectUrlStr = '&redirect_uri=' + encodeURI(defaultRedirectUrl);
export const loginUrl = hostedUIUrl + '/login' + clientIDStr + redirectUrlStr;
export const signupUrl = hostedUIUrl + '/signup' + clientIDStr + redirectUrlStr;

axiosClient.defaults.baseURL = baseURL[process.env.NODE_ENV];

axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    // Accept: 'application/json',
    // 'Access-Control-Allow-Credentials': true,
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
};

//All request will wait 5 seconds before timeout
// axiosClient.defaults.timeout = 5000;

export function get(url) {
    return axiosClient.get(url).then((res) => toCamelCase(res));
}

export function post(url, payload) {
    return axiosClient
        .post(url, toSnakeCase(payload))
        .then((res) => toCamelCase(res.data));
}
