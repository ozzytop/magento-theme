var config = {
    config:{
        // hace un mix de modulos, para agregar metodos a modulos o algo d eso
        mixins: {
            'Magento_Checkout/js/checkout-data': {
                'TreeDevs_Pages/js/checkout-data-mixin': true
            },
            'Magento_Catalog/js/catalog-add-to-cart': {
                'TreeDevs_Pages/js/add-to-cart-mixin': true
            },

        }
    },
    // modulo agregado en toda la pagina
    deps: [
         'TreeDevs_Pages/js/log-when-loaded'
    ],
    // agrega js a cierto nodo. * significa a ninguno en particular, si no podemos poner un id de nodo o clase.
    map: {
        '*': {
            coffee: 'TreeDevs_Pages/js/requirejs-example'
        }
    },
    // agrega nuestro modulo solo si cierto modulo esta cargado, en este caso el compare products. Lo agrega antes
    shim:{
        'Magento_Catalog/js/view/compare-products': {
            deps:['TreeDevs_Pages/js/before-compare-products-example']
        }
    },
    paths:{
        'treedevsalias': 'TreeDevs_Pages/js/v2'
    },
};