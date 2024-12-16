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
  const tr = document.createElement("tr");
  let html = `<td>Total</td><td>${sum}</td>`;
  tr.insertAdjacentHTML("afterbegin", html);
  tbody.insertAdjacentElement("beforeend", tr);
});

function renderRow(value) {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += value[i].time;
    const tr = document.createElement("tr");
    let html = `<td>Promise ${i + 1}</td><td>${value[i].time}</td>`;
    tr.insertAdjacentHTML("afterbegin", html);
    tbody.insertAdjacentElement("beforeend", tr);
  }
  return sum;
}
