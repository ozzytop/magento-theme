var config = {
    // agrega js a cierto nodo. * significa a ninguno en particular, si no podemos poner un id de nodo o clase.
    map: {
        '*': {
            coffee: 'TreeDevs_Pages/js/requirejs-example-2'
        }
    },
    mixins: {
        'Magento_Checkout/js/checkout-data': {
            'TreeDevs_Pages/js/checkout-data-mixin-2': true
        }
    }
};