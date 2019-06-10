'use strict';
/* global cuid, Item */

const store = (function () {
  const foo = 'bar';
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  
  let findById = function(id) {
    return this.items.find(function(item) {
      if (item.id === id) {
        return true;
      }
    });
  };
  
  let addItem = function(name){
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(err) {
      console.log('Cannot add item: ' + err.message);
    }
  };
  
  let findAndToggleChecked = function(id) {
    let foundItem = this.findById(id);
    if (foundItem.checked) {
      foundItem.checked = false;
    } else {
      foundItem.checked = true;
    }
    return foundItem;
  };

  let findAndUpdateName = function(id, newName) {
    try{
      Item.validateName(newName);
      let foundItem = this.findById(id);
      foundItem.name = newName;
      return foundItem;
    }
    catch(err){
      console.log('Cannot update name: ' + err.message);
    }
  };

  let findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };
  
  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };
}());