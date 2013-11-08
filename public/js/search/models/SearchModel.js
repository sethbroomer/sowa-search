( function() {
    "use strict";
    SOWA.Search = SOWA.Search || {};

    SOWA.Search.SearchModel = SOWA.Backbone.BaseModel.extend({

        url : '/profile',

        getProfile: function() {
            var that = this;
            this.fetchTile({
                url: this.url,
                success: function(data) {
                    debugger;
                    that.trigger('profile:success', data);
                }

            });

        },
        getProfileFull: function() {
            var that = this;
            this.fetchPage({
                success: function(data) {
                    debugger;
                    that.trigger('profile:success-full', data);
                }

            });
        },
        getSearchFull: function() {
            var that = this;
            $.ajax({
                url: '/search',
                headers: {
                    "x-request-type":'page'
                },
                success: function(data) {
                    var next = function(processedData) {
                        that.trigger('profile:success-full', processedData);
                    };

                    SOWA.ScriptManager.processScripts(data, next);
                }
            });
        },

        handleProfileJson: function() {
            var that = this;
            this.fetch({
                url: this.url + '?p=2',
                success: function(data) {
                    that.trigger('profile:success', data);
                }
            });
        }
    });
}());