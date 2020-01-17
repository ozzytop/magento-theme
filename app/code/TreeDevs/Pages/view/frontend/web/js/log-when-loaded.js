define(['jquery',
'uiRegistry',
'Magento_Ui/js/lib/view/utils/dom-observer'], function($, uiRegistry, domObserver){
    'use strict';
    console.log('module loaded');

        $('[data-block="minicart"]').on('contentLoading', function () {
            debugger;
            $('[data-block="minicart"]').on('contentUpdated', function ()  {
                debugger;
            });
        });
});