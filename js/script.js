
const app = {
  initDates: function(){
    const thisDates=this;

    thisDates.dom={};
    //thisDates.dom.dateStart = document.querySelector(`input[name="dateStart"]`);
    thisDates.dom.dateStart = document.querySelector('#dateStart');
    thisDates.dom.dateEnd =   document.querySelector('#dateEnd');
    thisDates.defDate = new Date();
    // eslint-disable-next-line no-undef
    flatpickr(thisDates.dom.dateStart,{defaultDate: thisDates.defDate,});
    // eslint-disable-next-line no-undef
    flatpickr(thisDates.dom.dateEnd,{defaultDate: thisDates.defDate,});
  },

  init: function(){
    const thisApp = this;
    thisApp.initDates();
  },
};

app.init();

function toggleMenu(visible) {
  document.querySelector('.sec_sidePan').classList.toggle('show', visible);
  console.log('toggleMenu');
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();

  toggleMenu();
});