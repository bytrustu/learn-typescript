import axios from 'axios';

/**
 * @typedef {Object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {Object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */
/**
 *
 * @param url
 * @returns {Promise<User>}
 */
function fetchUser(url) {
    return axios.get(url);
}

fetchUser('').then(function (response) {
    const { name, address, email } = response;
})
