let bulls;

// На вход подается число - идентификатор быка, коровы или
// иного числа и элемент в котором мы будем менять содержимое.
function cowOrBull(code, element) {
  if (code == 1) {
    element.src = "svgs/cow.svg";
  } else if (code == 2) {
    element.src = "svgs/bull.svg";
  } else {
    element.src = "";
  }
}

// Функция выводит значения массива в виде иконок коров и быков.
// По умолчанию и при значении 0 выводит пустоту.
// Если значение == 1, то корову.
// Если значение == 2, то быка.
function printAns(arr) {
  cowOrBull(arr[0], document.getElementById('first_out'));
  cowOrBull(arr[1], document.getElementById('second_out'));
  cowOrBull(arr[2], document.getElementById('third_out'));
  cowOrBull(arr[3], document.getElementById('fourth_out'));
}

function printComputerTry(number) {
  let output_div = document.getElementById('output');

  output_div.insertAdjacentHTML("beforeend",
  `
  <div class="">
    <div>${number[0]}</div>
  </div>
  <div class="">
    <div>${number[1]}</div>
  </div>
  <div class="">
    <div>${number[2]}</div>
  </div>
  <div class="">
    <div>${number[3]}</div>
  </div>
  `);
}

// Генерация рандомного числа из 4 неповторяющихся цифр.
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

// Функция сравнения загаданного числа и числа, которое ввел пользователь.
function humanCompare() {
  let input_num = new Array(4);

  let chat = document.getElementById('chat');

  input_num[0] = document.getElementById('first_num').value;
  if (Number(input_num[0]) < 0 || Number(input_num[0]) > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.'
    return;
  }

  input_num[1] = document.getElementById('second_num').value;
  if (Number(input_num[1]) < 0 || Number(input_num[0]) > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.'
    return;
  }
  input_num[2] = document.getElementById('third_num').value;
  if (Number(input_num[2]) < 0 || Number(input_num[0]) > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.'
    return;
  }
  input_num[3] = document.getElementById('fourth_num').value;
  if (Number(input_num[3]) < 0 || Number(input_num[0]) > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.'
    return;
  }

  let ans = [0, 0, 0, 0];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (Number(input_num[i]) == Number(bulls[j])) {
        if (i == j) {
          ans[i] = 2;
        } else {
          ans[i] = 1;
        }
        break;
      }
    }
  }
  chat.textContent = 'Введите число.'
  

  return(ans);
}



function inputNumber() {
  let input_num = new Array(4);

  let chat = document.getElementById('chat');

  input_num[0] = document.getElementById('first_num').value;
  if (Number(input_num[0]) < 0 || Number(input_num[0]) > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.'
    return;
  }

  input_num[1] = document.getElementById('second_num').value;
  if (Number(input_num[1]) < 0 || Number(input_num[0]) > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.'
    return;
  }
  input_num[2] = document.getElementById('third_num').value;
  if (Number(input_num[2]) < 0 || Number(input_num[0]) > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.'
    return;
  }
  input_num[3] = document.getElementById('fourth_num').value;
  if (Number(input_num[3]) < 0 || Number(input_num[0]) > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.'
    return;
  }

  return input_num;
}

function compare(input_num) {
  let ans = [0, 0, 0, 0];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (Number(input_num[i]) == Number(bulls[j])) {
        if (i == j) {
          ans[i] = 2;
        } else {
          ans[i] = 1;
        }
        break;
      }
    }
  }
  chat.textContent = 'Введите число.'
  console.log(ans);

  return(ans);
}

// В данной функции вызывается печать сравнения пользовательского ввода и
// загаданного числа в режиме угадывания пользователем числа.
function humanPlayer() {
  let input = inputNumber();
  let com = compare(input);
  printAns(com);
  let chat = document.getElementById('chat');
  if ((com[0] == 2) && (com[1] == 2) && (com[2] == 2) && (com[0] == 3)) {
    generateNumber();
    chat.textContent = 'Победа! Можете сыграть заново.'
  }
}

// Описание функции, в которой компьютер угадывает загаданное пользователем число
function bullsNCows () {
  let input = inputNumber();
  bulls = input;
  console.info("Загано число " + bulls);
  // Массив в который записываются попытки угадывания.
  let tries = new Array();
  // Массив, в который записываются результаты сравнения попытки и ответа.
  let compares = new Array();
  
  let ans = [-1, -1, -1, -1];
  
  let cows = new Array(4);
  

  let bulls_amount = 0;
  let cows_amount = 0;
  
  // Первый ход угадывания.
  tries.push([0, 1, 2, 3]);
  compares.push(compare(tries[0]));

  for (let i = 0; i < 4; ++i) {
    if (compares[0][i] == 2) {
      ans[i] = tries[0][i];
      bulls_amount++;
    } else if (compares[0][i] == 1) {
      cows[cows_amount] = new Array();
      cows[cows_amount].push(tries[0][i]);
      cows[cows_amount].push(i);
      cows_amount++;
    }
  }
  printComputerTry(tries[0]);
  console.info("Первая попытка: " + compares[0]);
  console.info(cows);
  if (bulls_amount == 4) {
    console.info(ans);
    return;
  }
  

  // Второй ход угадывания.
  tries.push([4,5,6,7]);
  compares.push(compare(tries[1]));

  for (let i = 0; i < 4; ++i) {
    if (compares[1][i] == 2) {
      ans[i] = tries[1][i];
      bulls_amount++;
    } else if (compares[1][i] == 1) {
      cows[cows_amount] = new Array();
      cows[cows_amount].push(tries[1][i]);
      cows[cows_amount].push(i);
      cows_amount++;
    }
  }
  printComputerTry(tries[1]);
  console.info("Вторая попытка: " + compares[1]);
  console.info(cows);
  if (bulls_amount == 4) {
    console.info(ans);
    return;
  }



  // Третяя попытка угадывания.
  tries.push(ans);
  console.info("Кол-во коров" + cows_amount);
  console.info("Кол-во быков" + bulls_amount);

  
  // Расставляем цифры учитывая, что у нас 2 коровы
  if (cows_amount + bulls_amount == 2) {
    for (let i = 0; i < cows_amount; ++i) {
      for (let j = 0; j < 4; ++j) {
        if ((tries[2][j] == -1) && (j != cows[i][1])) {
          tries[2][j] = cows[i][0];
          cows[i].push(j);
          break;
        }
      }
    }
    
    let cow_num = 8;
    for (let i = 0; i < 4; i++) {
      if (tries[2][i] == -1) {
        console.info(cow_num);
        tries[2][i] = cow_num++;
        cows[cows_amount] = new Array();
        cows[cows_amount].push(cow_num);
        cows[cows_amount].push(i);
        cows_amount++;
      }
    }
  // Собираем комбинацию для трех коров
  } else if (cows_amount + bulls_amount == 3) {
    for (let i = 0; i < cows_amount; ++i) {
      for (let j = 0; j < 4; ++j) {
        if ((tries[2][j] == -1) && (j != cows[i][1])) {
          tries[2][j] = cows[i][0];
          cows[i].push(j);
          break;
        }
      }
    }

    for (let i = 0; i < 4; ++i) {
      if (tries[2][i] == -1) {
        tries[2][i] = 8;
      }
    }
  } else if (cows_amount + bulls_amount == 4) {
    for (let i = 0; i < cows_amount; ++i) {
      for (let j = 0; j < 4; ++j) {
        if ((tries[2][j] == -1) && (j != cows[i][1])) {
          tries[2][j] = cows[i][0];
          cows[i].push(j);
          break;
        }
      }
    }
  }

  compares.push(compare(tries[2]));

  for (let i = 0; i < 4; ++i) {
    if (compares[2][i] == 2) {
      ans[i] = tries[2][i];
      bulls_amount++;
    }
  }

  printComputerTry(tries[2]);
  console.info("Третяя попытка: " + compares[2]);
  console.info(cows);
  if (bulls_amount == 4) {
    console.info(ans);
    return;
  }


  // Формирование 4 попытки я задолбался и хочу спать)
  if (cows_amount + bulls_amount == 3) {
    tries.push(ans);
    let tempo = new Array();

    for (let i = 0; i < 4; ++i) {
      if ((tries[2][i] != ans[0]) && (tries[2][i] != ans[1]) && (tries[2][i] != ans[2]) && (tries[2][i] != ans[0])) {
        tempo.push(tries[2][i]);
      }
    }
    for (let i = 0; i < 4; ++i) {
      if (ans[i] = -1) {
        tries[3][i] = tempo.shift();
      }
    }

    for (let i = 0; i < 4; ++i) {
      if (tries[3][i] == 8) {
        tries[3][i] = 9;
      }
    }
  } else {
    tries.push(ans);
    let tempo = new Array();

    for (let i = 0; i < 4; ++i) {
      if ((tries[2][i] != ans[0]) && (tries[2][i] != ans[1]) && (tries[2][i] != ans[2]) && (tries[2][i] != ans[3])) {
        tempo.push(tries[2][i]);
      }
    }
    console.info("Временное " +tempo);
    for (let i = 0; i < 4; ++i) {
      if (ans[i] = -1) {
        tries[3][i] = tempo.shift();
      }
    }
  }

  compares.push(compare(tries[3]));

  for (let i = 0; i < 4; ++i) {
    if (compares[3][i] == 2) {
      ans[i] = tries[3][i];
      bulls_amount++;
    }
  }

  printComputerTry(tries[3]);

  // Пятая попытка.
  tries.push(ans);
  let tempo1 = new Array();

  for (let i = 0; i < 4; ++i) {
    if ((tries[3][i] != ans[0]) && (tries[3][i] != ans[1]) && (tries[3][i] != ans[2]) && (tries[3][i] != ans[3])) {
      tempo1.push(tries[3][i]);
    }
  }
  console.info(tempo1);
  for (let i = 0; i < 4; ++i) {
    if (ans[i] = -1) {
      ans[i] = tempo1.shift();
    }
  }

  compares.push(compare(tries[2]));

  for (let i = 0; i < 4; ++i) {
    if (compares[2][i] == 2) {
      ans[i] = tries[2][i];
      bulls_amount++;
    }
  }

  printComputerTry(tries[4]);
}

function switchCheckBox() {
  let checkbox = document.getElementById('switcher');
  if (checkbox.checked) {
    document.getElementById('input_numb').onclick = bullsNCows;
  } else {
    document.getElementById('input_numb').onclick = humanPlayer;
  }
}



window.onload = function () {
  bulls = generateNumber();

  console.info(bulls);
  document.getElementById('switcher').onclick = switchCheckBox;
  document.getElementById('input_numb').onclick = humanPlayer;
};