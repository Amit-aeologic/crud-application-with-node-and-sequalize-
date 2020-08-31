const tests = require("../controllers/user.controller.js");

module.exports = app => {
    app.post("/post-user-details",tests.postuserdetails);
    app.post("/get-user-details",tests.getuserdetails);
    app.post("/update-details",tests.updatedetails);
    app.post("/delete-details",tests.deletedetails);
};