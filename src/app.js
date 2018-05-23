const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require ('./view/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded!');

  const selectDropdown = document.querySelector('#instrument-families');
  const selectView = new SelectView(selectDropdown);
  selectView.receiveData();
  selectView.sendSelectedOption();


  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.recieveSelectedIndex();
  instrumentFamilies.sendData();
  console.log(instrumentFamilies);

});
