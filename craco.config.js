const { default: plugin } = require("tailwindcss")

module.exports = {
    style: {
        postcssOptions:{
            plugins: [
                require("tailwindcss"),
                require("autoprefixer"),
            ],
        },
    },
}