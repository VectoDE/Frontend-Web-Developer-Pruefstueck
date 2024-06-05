const path = require('path');

const indexController = {
    getIndexPage: (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'documentation.html'));
    }
};

module.exports = indexController;
