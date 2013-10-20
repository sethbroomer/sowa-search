'use strict';

var Backbone = require('sowa-shared').helpers.BackboneBase;

module.exports = Backbone.Model.extend({

    url: function() {
        return '/profile.json';
    },

    initialize: function() {
    },

    //TODO parse is not hooked up right now
    parse: function(response) {
        return response.results;
    },

    load: function(next) {
        var options = {};
        if(next) {
            options.next = next;
        }
        this.fetch(options);
    }


});