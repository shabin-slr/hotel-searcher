const hotelSearchController = require("../controllers/hotelSearchController");

module.exports = {
    "get" : {
        "/search" : hotelSearchController.handleSearchRequest
    }
}