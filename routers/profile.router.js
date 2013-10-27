'use strict';

var ProfileModel = require('./../models/profile.model');


module.exports = function(app) {

    function handleSearchRequest(req, res) {
        app.logger.debug("calling profile");

        var profileModel    = new ProfileModel(),
            profileResponse = function(error, response, body)  {
                res.smartRender('profile', body);
                //Generic way for error codes
//             res.smartRender(200,'search', body);

            };
        profileModel.setPage(req.query.p || 1);

        profileModel.load(profileResponse);

    }

    // Initial Page Request
    app.get('/profile',  handleSearchRequest);
};
