
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

document.querySelector('form').addEventListener('submit', function(event) {
  var isFormValidate = true;

  var emailAddressInput = event.target.querySelector('input[name="email"]');
  if(emailAddressInput.value.indexOf('@') < 0) {
    isFormValidate = false;
    emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Błędny adres e-mail';
  }

  return !isFormValidate ? event.preventDefault() : true;
});

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(e) {
  if(e.key === 'Escape') {
    closeModal();
  }
});


function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

//let modalYourManager = document.querySelector('#modalYourManager');

document.querySelector('#yourManager').addEventListener('click', function(e) {
  e.preventDefault();
  openModal('#modalYourManager');
});