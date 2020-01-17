define([], function(){
   'use strict';
   return function (checkoutData){
        const orig = checkoutData.setSelectedShippingAddress;
        checkoutData.setSelectedShippingAddress = function(){
            const address = orig.bind(checkoutData)();
            console.log('selected shipping address');
            return address;
        }
        return checkoutData;
   };
});