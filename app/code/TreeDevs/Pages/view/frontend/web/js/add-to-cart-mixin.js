define(['jquery'], function($){
   'use strict';

   // receives the return value of the target module
   return function (catalogAddToCart) {
        $.widget('mage.catalogAddToCart', catalogAddToCart, {
            submitForm: function (form) {
                console.log('add to cart sucessfuly intercepted');
                console.log(form);
                return this._super(form);
            }
        });
        return $.mage.catalogAddToCart;

   }
});