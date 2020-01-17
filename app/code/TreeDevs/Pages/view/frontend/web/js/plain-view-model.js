define(['ko', 'jquery'], function(ko, $){
    'use strict';
/*
    return function(config){
        return {
            title:ko.observable('This is a title copado'),
            config:config
        }
    }
 */
    return function(config){
        const title = ko.observable('This is a title copado');
        title.subscribe(function (newValue) {
            console.log('Changed to ' + newValue);
        });
        title.subscribe(function (oldValue) {
            console.log('Changed to ' + oldValue);
        }, this, 'beforeChange');


        let currencyInfo = ko.observable();
        $.getJSON(config.base_url + 'rest/V1/directory/currency', currencyInfo);

        const viewModel = {
            title: title,
            label: ko.observable('Current Info')
        };
        viewModel.output = ko.computed(function(){
            if(currencyInfo()){
                return this.label() + ':' + JSON.stringify(currencyInfo(), null, 2);
            }
            return 'loading...';
        }.bind(viewModel));

        /*
        viewModel.capitalizeLastName = function() {
            var currentVal = this.lastName();        // Read the current value
            this.lastName(currentVal.toUpperCase()); // Write back a modified value
        };
        */

        return viewModel;

    }

});