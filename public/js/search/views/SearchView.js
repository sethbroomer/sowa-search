(function(){
    "use strict";
    SOWA.Search = SOWA.Search || {};

    SOWA.Search.SearchView = SOWA.Backbone.BaseView.extend({
        el: 'body',

        events: {
            'click [data-page]'                         : 'handlePage',
            'click #profile'                            : 'handleProfile',
            'click #profileFull'                        : 'handleProfileFull',
            'click #profilejson'                        : 'handleProfileJson',
            'click #searchFull'                         : 'handleSearchFull'
        },

        elements: {
            cont       : '#cont',
            searchList : '#results'
        },

        initialize: function() {
            this.collection      = new SOWA.Search.SearchCollection();
            this.model           = new SOWA.Search.SearchModel();

            this.listenTo(this.collection, 'sync', this.render);
            this.model.on('profile:success', this.renderProfile, this);
            this.model.on('profile:success-full', this.renderProfileFull, this);
        },

        handlePage: function(e) {
            this.collection.load($(e.currentTarget).data('page'));
        },
        renderProfileFull: function(data) {
            this.$el.find(this.elements.cont).empty().html(data);
        },

        renderProfile: function(data) {

            if(typeof data !== 'string') {
                data = Handlebars.templates['profile/profile'](data.toJSON());
            }

            this.$el.find(this.elements.searchList).empty().html(data);
        },

        render: function() {
            var rowsFrag    = document.createDocumentFragment(),
                itemView;

            for (var i = 0; i < this.collection.length; i++) {
                itemView = new SOWA.Search.SearchItemView({model:this.collection.at(i)});
                
                rowsFrag.appendChild(itemView.render());
            }

            this.$el.find(this.elements.searchList).empty().append(rowsFrag);
        },

        handleProfile: function(e) {
            e.preventDefault();
            this.model.getProfile();

        },

        handleProfileFull: function(e) {
            e.preventDefault();
            this.model.getProfileFull();
        },

        handleProfileJson: function(e) {
            e.preventDefault();

            this.model.handleProfileJson();
        },

        handleSearchFull: function(e) {
            e.preventDefault();
            this.model.getSearchFull();
        },

    });
}());

var foo = new SOWA.Search.SearchView();
