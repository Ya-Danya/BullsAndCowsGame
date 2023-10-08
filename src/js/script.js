let bulls;

function printAns(arr) {
  cowOrBull(arr[0], document.getElementById('first_out'));
  cowOrBull(arr[1], document.getElementById('second_out'));
  cowOrBull(arr[2], document.getElementById('third_out'));
  cowOrBull(arr[3], document.getElementById('fourth_out'));
}

function cowOrBull(code, element) {
  if (code == 1) {
    element.src = "svgs/cow.svg";
  } else if (code == 2) {
    element.src = "svgs/bull.svg";
  } else {
    element.src = "";
  }
}


function generateNumber() {
  let bulls = [-1, -1, -1, -1];

  for (let i = 0; i < 4; i++) {
    let k = false;
    let tempo = 0;
    do {
      tempo = Math.floor(Math.random() * 10);
      k = false;
      for (let j = 0; j < i; j++) {
        if (tempo == bulls[j]) {
          k = true;
        }
      }
    } while (k)
    bulls[i] = tempo;
  }
  return bulls;
}

function compare() {
  let input_num = new Array(4);

  input_num[0] = document.getElementById('first_num').value;
  input_num[1] = document.getElementById('second_num').value;
  input_num[2] = document.getElementById('third_num').value;
  input_num[3] = document.getElementById('fourth_num').value;

  let ans = [0, 0, 0, 0];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (input_num[i] == bulls[j]) {
        if (i == j) {
          ans[i] = 2;
          break;
        } else {
          ans[i] = 1;
        }
      }
    }
  }
  console.log(ans);

  printAns(ans);
}



window.onload = function () {
  bulls = generateNumber();
  console.info(bulls);

  document.getElementById('input_numb').onclick = compare;
};