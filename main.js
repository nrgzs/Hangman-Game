const arr = ['The Shining', 'Truman', 'Spirited Away', 'Parasite'];

let word = randomChoice(arr).toLowerCase().split('');

let playerChoice = [];
let guess = 11;

function randomChoice(arr) {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

console.log(randomChoice(arr));

function play(arr1) {
  let showWord = [];
  for (a of arr1) {
    console.log(a);
    if (playerChoice.includes(a)) {
      showWord.push(a);
    } else if (a == ' ') {
      showWord.push('_');
    } else {
      showWord.push('-');
    }
  }
  console.log(showWord);
  if (!showWord.includes('-')) {
    alert('You Win!!');
    guess = -1;
  }
  $('.word').text(showWord.join(''));
}

console.log(play(word));

$(window).keyup((e) => {
  if (/[a-zA-Z]/.test(e.key)) {
    if (word.includes(e.key)) {
      playerChoice.push(e.key);
      console.log(playerChoice);
    } else {
      if (guess > 0) {
        guess--;

        $('.guess').text(guess);
      }
      switch (guess) {
        case 10:
          $('#floor').css('visibility', 'visible');
          break;
        case 9:
          $('#line1').css('visibility', 'visible');
          break;
        case 8:
          $('#line2').css('visibility', 'visible');
          break;
        case 7:
          $('#rope').css('visibility', 'visible');
          break;
        case 6:
          $('#head').css('visibility', 'visible');
          break;
        case 5:
          $('#body').css('visibility', 'visible');
          break;
        case 4:
          $('#armR').css('visibility', 'visible');
          break;
        case 3:
          $('#armL').css('visibility', 'visible');
          break;
        case 2:
          $('#legR').css('visibility', 'visible');
          break;
        case 1:
          $('#legL').css('visibility', 'visible');
          break;
        case 0:
          $('#Eyes').css('visibility', 'visible');
      }
    }
    if (guess == 0) {
      alert('You Loss!');
    }

    play(word);
  } else {
    alert('write a letter');
  }
});

console.log(guess);
/* SVG HANGMAN */
