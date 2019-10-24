export default{
    getUrlKey: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
    },

    setItem: function (key, value) {
        localStorage.setItem(key, value);
    },

    getItem: function (key) {
        return localStorage.getItem(key);
    }
}