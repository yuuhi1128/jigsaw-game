const BOX =  generateArray(9);
let startDragId;
let currentDragId;
let step = 0;
initValue();

function onDragStart(event) {
  startDragId = document.getElementById(event.target.id).getAttribute('id');
}

function onDragEnd() {
    let isMove = move(startDragId, currentDragId);
    if (isMove) {
      console.log('Moved', ` -------- Step: ${++step}`);
    }
    if (isWin()) {
      document.getElementById('content').style.border = '2px solid rgb(63, 105, 223)';
      setTimeout(() => {
        let isReload = confirm(`Congratulation! You completed Game with ${step} step.\nDo you want to play a new Game?`);
        if (isReload) {
          location.reload();
        }
      }, 100);
    }
}

function onDragOver(event) {
  currentDragId = document.getElementById(event.target.id).getAttribute('id');
}

let currentTouchId;
let startTouchId;

function onTouchStart(event) {
  startTouchId = event.target.id;
}

function onTouchMove(event) {
  let elm = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
  currentTouchId = elm.id;
}

function onTouchEnd() {
  if (startTouchId !== currentTouchId && startTouchId && currentTouchId) {
    let isMove = move(startTouchId, currentTouchId);
    currentTouchId = '';
    if (isMove) {
      console.log('Moved', ` -------- Step: ${++step}`);
    }
    if (isWin()) {
      document.getElementById('content').style.border = '2px solid rgb(63, 105, 223)';
      setTimeout(() => {
        let isReload = confirm(`Congratulation! You completed Game with ${step} step.\nDo you want to play a new Game?`);
        if (isReload) {
          location.reload();
        }
      }, 100);
    }
  }
}