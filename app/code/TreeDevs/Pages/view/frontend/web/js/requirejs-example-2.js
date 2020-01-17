/*define(function(){
   'use strict';
   return function(config){
       console.log('hey mati vos podes', config);
   }
});
*/
define( ['jquery'], function($) {
  'use strict';
  return function(config, element){
      //console.log(element);
      $.getJSON(config.base_url + 'rest/V1/directory/currency', function(result){
          element.innerText = JSON.stringify(result,null, 2);
      });
  }
});