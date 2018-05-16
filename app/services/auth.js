import Service from '@ember/service';
import Ember from 'ember';
import decode from 'npm:jwt-decode';
var AUTH_TOKEN_KEY = 'access_token';

export default Service.extend({

    logout() {
        this.clearAuthToken();
        window.location.href = "/login";
    },

    getAuthToken() {
        return localStorage.getItem(AUTH_TOKEN_KEY);
    },

    clearAuthToken() {
        localStorage.removeItem(AUTH_TOKEN_KEY);
    },

    // Get and store access_token in local storage
    setAuthToken(authToken) {
        localStorage.setItem(AUTH_TOKEN_KEY, authToken);
    },

    isLoggedIn() {
        const authToken = this.getAuthToken();
        return !!authToken && !this.isTokenExpired(authToken);
    },

    getTokenExpirationDate(encodedToken) {
        const token = decode(encodedToken);
        if (!token.exp) { return null; }

        const date = new Date(0);
        date.setUTCSeconds(token.exp);

        return date;
    },

    isTokenExpired(token) {
        const expirationDate = this.getTokenExpirationDate(token);
        return expirationDate < new Date();
    }
});