

const routes = [
    {
        method  : "GET",
        path    : "/",
        handler : (req, h) => {
            return "Homepage";
        },
    },
    {
        method  : "*",
        path    : "/",
        handler : (req, h) => {
            return "Halaman tidak dapat diakses menggunakan method tsb.";
        },
    },
    {
        method  : "GET",
        path    : "/about",
        handler : (req, h) => {
            return "About Page";
        },
    },
    {
        method  : "*",
        path    : "/about",
        handler : (req, h) => {
            return "Halaman tidak dapat diakses menggunakan methot tsb.";
        },
    },
    {
        method  : "*",
        path    : "/{any*}",
        handler : (req, h) => {
            return "Halaman tidak ditemukan";
        },
    },
]


module.exports = routes;