let bulls;

// На вход подается число - идентификатор быка, коровы или
// иного числа и элемент в котором мы будем менять содержимое.
// В папке svgs/ расположены изображения. По умолчанию стоит пустой путь.
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

function resetOut() {
  let output_div = document.getElementById('output');

  output_div.innerHTML = `<div class="">
  <input class="pl-1" placeholder="0" type="number" name="" id="first_num">
  <image class="pr-1" id="first_out" src="">  </image>
</div>
<div class="">
  <input class="pl-1" placeholder="0" type="number" name="" id="second_num">
  <image class="pr-1" id="second_out" src="">  </image>
</div>
<div class="">
  <input class="pl-1" placeholder="0" type="number" name="" id="third_num">
  <image class="pr-1" id="third_out" src="">  </image>
</div>
<div class="">
  <input class="pl-1" placeholder="0" type="number" name="" id="fourth_num">
  <image class="pr-1" id="fourth_out" src="">  </image>
</div>`;

}

// Вывод осуществляется с помощью добавления html разметки с переменным содержимым.
function printComputerTry(number) {
  let output_div = document.getElementById('output');

  output_div.insertAdjacentHTML("beforeend",
  `
  <div class="pl-3">
    <div>${number[0]}</div>
  </div>
  <div class="pl-3">
    <div>${number[1]}</div>
  </div>
  <div class="pl-3">
    <div>${number[2]}</div>
  </div>
  <div class="pl-3">
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

function checkDuplicates(arr) {
  // Сортируем массив по возрастаниюэ
  
  arr.sort();

  // Перебираем все элементы массива, начиная со второго
  for (var i = 1; i < arr.length; i++) {
    // Если текущий элемент равен предыдущему, значит есть совпадение
    if (arr[i] === arr[i-1]) {
      return false;
    }
  }

  // Если дошли до этой строки, значит совпадений нет
  return true;
}

function inputNumber() {
  let input_num = new Array(4);

  let chat = document.getElementById('chat');

  input_num[0] = Number(document.getElementById('first_num').value);
  if (input_num[0] < 0 || input_num[0] > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.';
    return;
  }

  input_num[1] = Number(document.getElementById('second_num').value);
  if (input_num[1] < 0 || input_num[1] > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.';
    return;
  }
  input_num[2] = Number(document.getElementById('third_num').value);
  if (input_num[2] < 0 || input_num[2] > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.';
    return;
  }
  input_num[3] = Number(document.getElementById('fourth_num').value);
  if (input_num[3] < 0 || input_num[3] > 9) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.';
    return;
  }
  
  let flag = checkDuplicates(input_num.flat());
  

  if (!flag) {
    chat.textContent = 'А ну-ка внимательнее!\n Ввод некорректен.';
    return;
  }
  console.info(input_num);
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
  chat.textContent = 'Введите число.';
  // console.log(ans);

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

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}

// Описание функции, в которой компьютер угадывает загаданное пользователем число
function bullsNCows () {
  let input = inputNumber();
  resetOut();
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
  console.info("Начало первого хода");
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
  console.info("Первая попытка: " + tries[0]);
  console.info("Сравнение: " + compares[0]);
  console.info("Коровы " + cows);
  console.info("Ans " + ans);
  if (bulls_amount == 4) {
    console.info(ans);
    return;
  }
  console.info("конец первого хода");

  // Второй ход угадывания.
  console.info("Начало второго хода");
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
  console.info("Вторая попытка: " + tries[1]);
  console.info("Сравнение: " + compares[1]);
  console.info("Коровы " + cows);
  console.info("Ans " + ans);
  if (bulls_amount > 3) {
    console.info(ans);
    return;
  }

  console.info("Конец второго хода");

  // Третяя попытка угадывания.
  console.info("Начало третего хода");

  tries.push(ans.flat());
  
  // Расставляем цифры учитывая, что у нас 2 коровы
  if (cows_amount + bulls_amount == 2) {
    console.info("sum equals 2");
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
    console.info("sum equals 3");
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
    let cows_to_permutate = new Array();
    for (let i = 0; i < cows_amount; ++i) {
      cows_to_permutate.push(cows[i][0]);
    }
    for (let i = 0; i < 4; ++i) {
      if (ans[i] != -1) {
        cows_to_permutate.push(ans[i]);
      }
    }

    let permutates = permutator(cows_to_permutate);
    console.info(permutates);

    for (let i = 0; i < permutates.length; ++i) {
      let boolka = true;
      
      for (let j = 0; j < cows_amount; ++j) {
        if (permutates[i][cows[j][1]] == cows[j][0]) {
          boolka = false;
          break;
        }
      }
      for (let j = 0; j < 4; ++j) {
        if (ans[j] != -1) {
          if (permutates[i][j] != ans[j]) {
            boolka = false;
            break;
          }
        }
      }
      if (boolka) {
        console.info("boolka");
        console.info(permutates[i]);
        tries[2] = permutates[i].flat();
        
        break;
      }
    }
  }

  compares.push(compare(tries[2]));
  bulls_amount = 0;
  for (let i = 0; i < 4; ++i) {
    if (compares[2][i] == 2) {
      ans[i] = tries[2][i];
      bulls_amount++;
    }
  }

  printComputerTry(tries[2]);
  console.info("Третяя попытка: " + tries[2]);
  console.info("Сравнение: " + compares[2]);
  console.info("Коровы" + cows);
  console.info("Ans" + ans);
  console.info(bulls_amount);
  if (bulls_amount > 3) {
    console.info(ans);
    return;
  }


  // Формирование 4 попытки я задолбался и хочу спать)
  if (cows_amount + bulls_amount == 3) {
    tries.push(ans.flat());
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
    tries.push(ans.flat());
    let tempo = new Array();

    for (let i = 0; i < 4; ++i) {
      if ((tries[2][i] != ans[0]) && (tries[2][i] != ans[1]) && (tries[2][i] != ans[2]) && (tries[2][i] != ans[3])) {
        tempo.push(tries[2][i]);
      }
    }
    tempo.push(tempo.shift());
    console.info("Временное " +tempo);
    for (let i = 0; i < 4; ++i) {
      if (ans[i] == -1) {
        tries[3][i] = tempo.shift();
      }
    }
  }

  compares.push(compare(tries[3]));

  bulls_amount = 0;
  for (let i = 0; i < 4; ++i) {
    if (compares[3][i] == 2) {
      ans[i] = tries[3][i];
      bulls_amount++;
    }
  }

  printComputerTry(tries[3]);
  console.info("Третяя попытка: " + tries[3]);
  console.info("Сравнение: " + compares[3]);
  console.info("Коровы" + cows);
  console.info("Ans" + ans);
  console.info(bulls_amount);
  if (bulls_amount > 3) {
    console.info(ans);
    return;
  }

  // Пятая попытка.
  tries.push(ans.flat());
    let tempo = new Array();

    for (let i = 0; i < 4; ++i) {
      if ((tries[3][i] != ans[0]) && (tries[3][i] != ans[1]) && (tries[3][i] != ans[2]) && (tries[3][i] != ans[3])) {
        tempo.push(tries[3][i]);
      }
    }
    tempo.push(tempo.shift());
    console.info("Временное " +tempo);
    for (let i = 0; i < 4; ++i) {
      if (ans[i] == -1) {
        tries[4][i] = tempo.shift();
      }
    }
    printComputerTry(tries[4]);
    console.info("Третяя попытка: " + tries[4]);
    console.info("Сравнение: " + compares[4]);
    console.info("Коровы" + cows);
    console.info("Ans" + ans);
    console.info(bulls_amount);
    if (bulls_amount > 3) {
      console.info(ans);
      return;
    }
}

function switchCheckBox() {
  let checkbox = document.getElementById('switcher');
  if (checkbox.checked) {
    resetOut();
    document.getElementById('input_numb').onclick = humanPlayer;
    document.getElementById('chat').textContent = "Угадайте число, сгенерированное компьютером.";
    document.getElementById('mode').textContent = "Угадывает игрок.";
  } else {
    resetOut();
    document.getElementById('input_numb').onclick = bullsNCows;
    document.getElementById('chat').textContent = "Введите число для угадывания.";
    document.getElementById('mode').textContent = "Угадывает компьютер.";
  }
}


// Функция вызываемая при загрузке страницы.
window.onload = function () {
  bulls = generateNumber();

  console.info(bulls);
  document.getElementById('switcher').onclick = switchCheckBox;
  document.getElementById('input_numb').onclick = bullsNCows ;
};