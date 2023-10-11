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
  console.log(ans);
  printAns(ans);

  return(ans);
}

function bullsNCows (secret) {
  let tries = new Array();
  let compares = new Array();
  
  //List<int[]> tries = new ArrayList<int[]>();
  //ArrayList<int[]> compares = new ArrayList<int[]>();
  let ans = [-1, -1, -1, -1][-1, -1, -1, -1];
  
  let cows = new Array(4);
  //ArrayList<Integer>[] cows = new ArrayList[4];

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
      cows[cows_amount].push(tries[0][i]);
      cows[cows_amount].push(i);
      cows_amount++;
    }
  }
  console.info("Первая попытка: " + compares[0]);

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
    } else if (compares[0][i] == 1) {
      cows[cows_amount].push(tries[1][i]);
      cows[cows_amount].push(i);
      cows_amount++;
    }
  }
  console.info("Вторая попытка: " + compares[1]);

  if (bulls_amount == 4) {
    console.info(ans);
    return;
  }

  // Третяя попытка угадывания.
  tries.push([-1, -1, -1, -1]);
  // Расставляем цифры учитывая, что у нас 2 коровы
  if (cows_amount == 2) {
    if (cows[1][1] != cows[0][1]) {
      tries[2][cows[1][1]] = cows[0][0];
      cows[0].push[cows[1][1]];
      tries[2][cows[0][1]] = cows[1][0];
      cows[1].push[cows[0][1]];
    } else {
      //
      for (let i = 0; i < 4; ++i) {
        if ((cows[0][1] != i)) {
          tries[2][i] = cows[0][0];
          cows[0].push[i];
          for (let j = i; j < 4; ++j) {
            if ((cows[1][1] != i)) {
              tries[2][i] = cows[1][0];
              cows[1].push[i];
              break;
            }
          }
          break;
        }
      }
    }
    
    let cow_num = 8;
    for (let i = 0; i < 4; i++) {
      if (tries[2][i] == -1) {
        tries[2][i] = cow_num++;
        cows[cows_amount] = new Array();
        cows[cows_amount].push(cow_num);
        cows[cows_amount].push(i);
        cows_amount++;
      }
    }
  // Собираем комбинацию для трех коров
  } else if (cows_amount == 3) {
    let except_cow_number = -1;
    if (cows[0][1] == cows[1][1]) {
      tries[2][cows[0][1]] = cows[2][0];
      cows[2].push(cows[0][1]);
      except_cow_number = 2;
    } else if (cows[0][1] == cows[2][1]) {
      tries[2][cows[0][1]] = cows[1][0];
      cows[1].push(cows[0][1])
      except_cow_number = 1;
    } else if (cows[1][1] == cows[2][1]) {
      tries[2][cows[1][1]] = cows[0][0];
      cows[0].push(cows[0][1]);
      except_cow_number = 0;
    } 
    for (let i = 0; i < 3; ++i) {
      if (except_cow_number == i) {
        break;
      } else {
        for (let j = 0; j < 4; ++j) {
          if ((tries[2][j] != -1) && (cows[i][1] != j)) {
            tries[2][j] = cows[i][0];
            cows[i].push(j);
            break;
          }
        }
      }
      for (let i = 0; i < 4; ++i) {
        if (tries[2][i] != 0) {
          tries[2][i] = 8;
        }
      }
    }

  } else if (cows_amount == 4) {
    for (let i = 0; i < 4; ++i) {
      for (let j = 0; j < 4; ++j) {
        if ((tries != -1)) {
          tries[2][j] = cows[i][0];
        }
      }
    }
  }
}



window.onload = function () {
  bulls = generateNumber();
  console.info(bulls);

  document.getElementById('input_numb').onclick = compare;
};