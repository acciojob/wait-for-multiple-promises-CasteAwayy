const table = document.querySelector(".table");
const tbody = document.querySelector("#output");

const wait = function (id) {
  return new Promise(function (resolve, _) {
    const time = Math.random() * 2 + 1;
    setTimeout(function () {
      resolve({ time, id });
    }, time * 1000);
  });
};

const threePromise = [wait("first"), wait("second"), wait("third")];

Promise.all(threePromise).then((value) => {
  tbody.removeChild(tbody.firstElementChild);
  const sum = renderRow(value);
  let html = `<tr><td>Total</td><td>${sum}</td></tr>`;
  tbody.insertAdjacentHTML("beforeend", html);
});

function renderRow(value) {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += value[i].time;
    let html = `<tr><td>Promise ${i + 1}</td><td>${value[i].time}</td></tr>`;
    tbody.insertAdjacentHTML("beforeend", html);
  }
  return sum;
}
