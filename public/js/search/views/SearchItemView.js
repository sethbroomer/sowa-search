(function(){
    "use strict";
    SOWA.Search = SOWA.Search || {};

    SOWA.Search.SearchItemView = SOWA.Backbone.BaseView.extend({

        render: function() {
            var template        = Handlebars.templates['search/list-item'],
                templateData    = this.getTemplateData();

            this.$el.html(template(templateData));
            
            return this.el;            
        },
        
        getTemplateData: function() {
            var data = this.model.toJSON();

            return data;
        }


    });
}());

