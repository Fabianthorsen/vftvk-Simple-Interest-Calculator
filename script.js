function compute() {
  var p = document.getElementById('principal').value;
  var i = document.getElementById('interestInput').value;
  var t = document.getElementById('selectId').value;

  var interest = (p * t * i) / 100;
  var year = parseInt(t) + 2021;
  var result = document.getElementById('result');

  if (p <= 0) {
    alert('Enter a positive integer');
    p.focus();
    return false;
  }

  result.innerHTML =
    "If you deposit <span class='highlight'>" +
    p +
    "</span>, <br> at an interest rate of <span class='highlight'>" +
    i +
    "%</span>.<br> You will recieve an amount of <span class='highlight'>" +
    interest +
    "</span>,<br> in the year <span class='highlight'>" +
    year +
    '</span>.';
}
