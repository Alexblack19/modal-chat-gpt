// Отримати модальне вікно та кнопку відкриття
var modal = document.getElementById("modal");
var btn = document.getElementById("open-modal");

// Отримати елемент закриття модального вікна
var span = document.getElementsByClassName("close")[0];

// Коли користувач натискає на кнопку відкриття, показати модальне вікно та додати клас modal-open до body
btn.onclick = function () {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
};

// Коли користувач натискає на хрестик закриття, приховати модальне вікно та видалити клас modal-open з body
span.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
};

// Коли користувач натискає за межами модального вікна, приховати його
window.onclick = function (event) {
  if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
  }
};

