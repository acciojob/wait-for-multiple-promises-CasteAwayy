const table = document.querySelector(".table");
const tbody = document.querySelector("#output");

const wait = function (id) {
  const time = Math.random() * 2 + 1;
  return new Promise(function (resolve, _) {
    setTimeout(function () {
      resolve({ time, id });
    }, time * 1000);
  });
};

const threePromise = [wait("first"), wait("second"), wait("third")];

const start = new Date();
Promise.all(threePromise).then((value) => {
  const end = new Date();
  tbody.removeChild(tbody.firstElementChild);
  renderRow(value);
  let html = `<tr><td>Total</td><td>${(end - start) / 1000}</td></tr>`;
  tbody.insertAdjacentHTML("beforeend", html);
});

function renderRow(value) {
  for (let i = 0; i < 3; i++) {
    let html = `<tr><td>Promise ${i + 1}</td><td>${value[i].time}</td></tr>`;
    tbody.insertAdjacentHTML("beforeend", html);
  }
}
