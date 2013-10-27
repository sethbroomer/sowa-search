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
                    var next = function(processedData) {
                        that.trigger('profile:success', processedData);
                    };

                    SOWA.ScriptManager.processScripts(data, next);
                }
            });
        },
        getProfileFull: function() {
            var that = this;
            $.ajax({
                url: this.url,
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