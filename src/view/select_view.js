const PubSub = require('../helpers/pub_sub');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.receiveData = function(){
  PubSub.subscribe('InstrumentFamilies:family-names', (event) => {
    this.createOptions(event.detail);
  });
}

SelectView.prototype.createOptions = function(families){
    families.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

SelectView.prototype.sendSelectedOption = function(){
  this.element.addEventListener('change', (evt) => {
    const clickedOption = evt.target.value;
    PubSub.publish('SelectView:selected-instrument-index', clickedOption);
  });
}


module.exports = SelectView;
