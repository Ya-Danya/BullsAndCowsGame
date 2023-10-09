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

  if (bulls_amount == 4) {
    console.info(ans);
    return;
  }

  let check = false;

  if (cows_amount == 2) {
    cows[cows_amount] = new Array();
    cows[cows_amount].add(8);
    cows_amount++;
    cows[cows_amount] = new Array();
    cows[cows_amount].add(9);
    cows_amount++;
  } else if (cows_amount == 3) {
    check = true;
  }
  // Третяя попытка угадывания.
  tries.add(new int[4]);

  if (!check) {
    tries[2][cows[1][1]] = cows[0][0];
    tries[2][cows[0][1]] = cows[1][0];
    
  } else {

  }

  for (let i = 0; i < 4; ++i) {
    if (i != cows[0][1]) {
      tries[2][i] = cows[0][0];
    } else {
      tries
    }
  }

  // Формируем комбинацию.

  for (int i = 0; i < 4; i++) {
      if (i != cows[0].get(1)) {
          tries.get(2)[i] = cows[0].get(0);
          cows[0].add(i);
          cows_iterator++;
      } else {
          tries.get(2)[i] = cows[1].get(0);
          cows[1].add(i);
          cows_iterator++;
      }
  }

  compares.add(new int[4]);
  compares.set(2, compareArrs(secret, tries.get(2)));

  // Проверка на быков и коров.
  for (int i = 0; i < 4; i++) {
      if (compares.get(2)[i] == 2) {
          ans[i] = tries.get(2)[i];
          bulls_amount++;
      } else if(tries.get(2)[i] == 1) {
          cows[cows_amount] = new ArrayList<>();
          cows[cows_amount].add(tries.get(2)[i]);
          cows[cows_amount].add(i);
          cows_amount++;
      }
  }

  if (bulls_amount == 4) {
      printArr(ans);
      return;
  }

  // Четвертая попытка.
  tries.add(new int[4]);

  for (int i = 0; i < 4; i++) {
      if ((i == cows[1].get(1)) || (i == cows[1].get(2))) {
          tries.get(3)[i] = cows[2].get(0);
          cows[2].add(i);
          cows_iterator++;
      } else {
          tries.get(3)[i] = cows[1].get(0);
          cows[1].add(i);
          cows_iterator++;
      }
  }

  compares.add(new int[4]);
  compares.set(3, compareArrs(secret, tries.get(3)));

  for (int i = 0; i < 4; i++) {
      if (compares.get(3)[i] == 2) {
          ans[i] = tries.get(3)[i];
          bulls_amount++;
      } else if(tries.get(3)[i] == 1) {
          cows[cows_amount] = new ArrayList<>();
          cows[cows_amount].add(tries.get(3)[i]);
          cows[cows_amount].add(i);
          cows_amount++;
      }
  }

  if (bulls_amount == 4) {
      printArr(ans);
      return;
  }
}



window.onload = function () {
  bulls = generateNumber();
  console.info(bulls);

  document.getElementById('input_numb').onclick = compare;
};