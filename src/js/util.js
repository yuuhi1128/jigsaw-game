function generateArray(limit) {
  let arr = [];
  let randNum;
  for (let i = 1; i <= limit; i++) {
    randNum = -1;
    do {
      randNum = Math.floor(Math.random() * (limit + 1));
    } while (!randNum || arr.indexOf(randNum) > -1)
    
    arr.push(randNum);
  }

  return arr;
}

function initValue() {
  c1 = document.getElementById('cell1');
  c2 = document.getElementById('cell2');
  c3 = document.getElementById('cell3');
  c4 = document.getElementById('cell4');
  c5 = document.getElementById('cell5');
  c6 = document.getElementById('cell6');
  c7 = document.getElementById('cell7');
  c8 = document.getElementById('cell8');
  c9 = document.getElementById('cell9');

  c1.setAttribute('value', BOX[0]);
  c2.setAttribute('value', BOX[1]);
  c3.setAttribute('value', BOX[2]);
  c4.setAttribute('value', BOX[3]);
  c5.setAttribute('value', BOX[4]);
  c6.setAttribute('value', BOX[5]);
  c7.setAttribute('value', BOX[6]);
  c8.setAttribute('value', BOX[7]);
  c9.setAttribute('value', BOX[8]);

  c1.src = `./src/img/${BOX[0]}.jpg`;
  c2.src = `./src/img/${BOX[1]}.jpg`;
  c3.src = `./src/img/${BOX[2]}.jpg`;
  c4.src = `./src/img/${BOX[3]}.jpg`;
  c5.src = `./src/img/${BOX[4]}.jpg`;
  c6.src = `./src/img/${BOX[5]}.jpg`;
  c7.src = `./src/img/${BOX[6]}.jpg`;
  c8.src = `./src/img/${BOX[7]}.jpg`;
  c9.src = `./src/img/${BOX[8]}.jpg`;

  document.getElementById('content').style.border = '3px solid #444';
  document.oncontextmenu = function(event) {
    if (event.target.nodeName === 'IMG') {
      return false;
    }
  };
}

function switchValue(startElement, endElement) {
  let temp = {
    value: startElement.getAttribute('value'),
    src:  startElement.getAttribute('src')
  }

  startElement.setAttribute('value', endElement.getAttribute('value'));
  startElement.setAttribute('src', endElement.getAttribute('src'));

  endElement.setAttribute('value', temp.value);
  endElement.setAttribute('src', temp.src);
}

function move(start, end) {
  let startElement = document.getElementById(start);
  let endElement = document.getElementById(end);

  let startId = startElement.getAttribute('id');
  let endId = endElement.getAttribute('id');

  let isMove = false;

  if (startId !== endId) {
    switchValue(startElement, endElement);
    isMove = true;  
  }

  return isMove;
}
function isWin() {
  if (document.getElementById('cell01').getAttribute('value') == 1
    && document.getElementById('cell02').getAttribute('value') == 2
    && document.getElementById('cell03').getAttribute('value') == 3
    && document.getElementById('cell04').getAttribute('value') == 4
    && document.getElementById('cell05').getAttribute('value') == 5
    && document.getElementById('cell06').getAttribute('value') == 6
    && document.getElementById('cell07').getAttribute('value') == 7
    && document.getElementById('cell08').getAttribute('value') == 8
    && document.getElementById('cell09').getAttribute('value') == 9) {
    return true;
  }
}