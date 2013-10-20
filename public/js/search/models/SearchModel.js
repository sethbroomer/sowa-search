( function() {
    "use strict";
    SOWA.Search = SOWA.Search || {};

    SOWA.Search.SearchModel = Backbone.Model.extend({

        url : '/profile',

        getProfile: function() {
            var that = this;
            $.ajax({
                url: this.url,
                headers: {
                    "x-request-type":'tile'
                },
                success: function(data) {
                    that.trigger('profile:success', data);
                }
            });
        },

        getProfile2: function() {
            var that = this;
            this.fetch({
                success: function(data) {
                    that.trigger('profile:success', data);
                }
            });
        }

    });
}());