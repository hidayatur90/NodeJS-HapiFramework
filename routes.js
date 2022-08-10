

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
    {
        method  : "GET",
        path    : "/users/{username?}",
        handler : (req, h) => {
            const {username = "Hida"} = req.params;
            const { lang } = req.query;

            if (lang == 'id') {
                return `Hai, ${username}`
            }

            return `Hello, ${username}`
        }
    },
    {
        method  : "POST",
        path    : "/login",
        handler : (req, h) => {
            const { username, password } = req.payload;
            return `Your username is ${username} and your password is ${password}`
        }
    }
]


module.exports = routes;