import axios from 'axios';
import constants from './constants';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = constants.HOST_URL;
axiosClient.defaults.headers = constants.headers;

axiosClient.defaults.withCredentials = false;

export function getCustomRequest(url) {
    return axios.get(`/${url}`).then(response => response);
}

export function getRequest(url) {
    return axiosClient.get(`/${url}`).then(response => response);
}

export function postRequest(url, payload) {
    return axiosClient.post(`/${url}`, payload).then(response => response);
}

export function patchRequest(url, payload) {
    return axiosClient.patch(`/${url}`, payload).then(response => response);
}

export function deleteRequest(url) {
    return axiosClient.delete(`/${url}`).then(response => response);
}
