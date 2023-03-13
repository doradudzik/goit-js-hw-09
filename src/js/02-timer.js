// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';

// // Znaczniki HTML
// const dateTimeInput = document.querySelector('#datetime-picker');
// const startBtn = document.querySelector('button[data-start]');
// const daysValue = document.querySelector('span[data-days]');
// const hoursValue = document.querySelector('span[data-hours]');
// const minutesValue = document.querySelector('span[data-minutes]');
// const secondsValue = document.querySelector('span[data-seconds]');

// let timerId = null;

// // Obecna data i ta wybrana przez użytkownika
// const CURRENT_DATE = new Date();
// let SELECTED_DATE;

// startBtn.disabled = true;

// // Obiekt parametrów "options" dla funkcji flatpick -> onClose-> wybrana data musi być
// // w przyszłości inaczej wyświetla powiadomienie z użyciem biblioteki notiflix.
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] < CURRENT_DATE) {
//       // window.alert('Please choose a date in the future');
//       Notiflix.Notify.failure('Please choose a date in the future');
//     } else {
//       startBtn.disabled = false;
//       SELECTED_DATE = selectedDates[0];
//     }
//   },
// };

// flatpickr(dateTimeInput, options);

// startBtn.addEventListener('click', startTimer);

// function startTimer() {
//   timerId = setInterval(() => {
//     const CURRENT_DATE = new Date(); // aktualizacja daty następuje co 1s
//     const countToDate = SELECTED_DATE - CURRENT_DATE; // obliczenie ms do SELECTED_DATE
//     const convertedObj = convertMs(countToDate); // przekształcenie ms na dni/godziny/minuty/sekundy -> funkcja convertMs
//     changeText(convertedObj); // funkcja aktualizuje tekst na stronie
//     stopTimer(countToDate); // funkcja zatrzymuje czas gdy odliczanie dobiegnie końca
//   }, 1000);

//   startBtn.disabled = true;
//   dateTimeInput.disabled = true;
// }

// function changeText(time) {
//   daysValue.textContent = addLeadingZero(time.days);
//   hoursValue.textContent = addLeadingZero(time.hours);
//   minutesValue.textContent = addLeadingZero(time.minutes);
//   secondsValue.textContent = addLeadingZero(time.seconds);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, 0); // string będzie dążył do length: 2 i pierwszym znakiem będzie 0 np. 02;
// }
// function stopTimer(countToDate) {
//   if (countToDate <= 1000) {
//     clearInterval(timerId);
//   }
// }
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
