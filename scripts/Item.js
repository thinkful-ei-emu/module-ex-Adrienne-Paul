'use strict';
/*global cuid*/

let Item=(function(){
  const validateName = function(name){
    if (!name) {
      throw new TypeError ('Name does not exist');
    }
  };
  const create = function(name) {
    return {
      id: cuid(),
      name: name,
      checked: false,
    };
  };
  return {
    validateName,
    create
  };
})();

