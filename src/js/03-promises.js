import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget.elements;

  for (let i = 0; i < amount.value; i++) {
    let position = i + 1;
    const delayStep = Number(delay.value) + step.value * i;

    createPromise(position, delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  event.currentTarget.reset();
}
// const inputD = document.querySelector("input[name='delay']");
// const inputS = document.querySelector("input[name='step']");
// const inputA = document.querySelector("input[name='amount']");

// function submitForm(event) {
//   event.preventDefault();
//   for (let i = 0; i < inputA.value; i++) {
//     let position = i + 1;
//     let delayStep = 'inputD.value + inputS.value * i';
//     console.log(delayStep);
//     createPromise(position, delayStep)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });
//   }
//   event.currentTarget.reset();
// }
