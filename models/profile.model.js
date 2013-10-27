'use strict';

var Backbone = require('sowa-shared').helpers.BackboneBase;

module.exports = Backbone.Model.extend({

    url: function() {
        return '/profile-' + this.currentPage + '.json';
    },

    initialize: function() {
        this.setPage(1);
    },

    //TODO parse is not hooked up right now
    parse: function(response) {
        return response.results;
    },

    setPage: function(page) {
        this.currentPage = page;
    },

    load: function(next) {
        var options = {};
        if(next) {
            options.next = next;
        }
        this.fetch(options);
    }


});