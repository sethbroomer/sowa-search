( function() {
    "use strict";
    SOWA.Search = SOWA.Search || {};

    SOWA.Search.SearchCollection = SOWA.Backbone.BaseCollection.extend({
        model: SOWA.Search.SearchItemModel,
        
        url: function() {
            return '/search?p=' + this.currentPage;
        },

        parse: function(response) {
            return response.results;
        },

        load: function(page) {
            this.currentPage = page;
            this.fetch();
        }

    });
}());

