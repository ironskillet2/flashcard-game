var winAmount = 0;
var lossAmount = 0;

const begins = () => {

    document.querySelector(".begin").disabled = true;

    arr1 = ['food', 'たべもの'];
    arr2 = ['fruit', 'くだもの'];
    arr3 = ['vegetable', 'やさい'];
    arr4 = ['dog', 'いぬ'];
    arr5 = ['big', 'おおきい'];
    arr6 = ['cat', 'ねこ'];
    allArr = [arr1, arr2, arr3, arr4, arr5, arr6];

    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
    let chosenCard = [];
    let englishWord = [];
    let matchingJapanese = [];
    let cards = [];
    var reset = 0;
    var percent = 0;
    var total = winAmount + lossAmount
    const wins = document.querySelector(".wins");
    const losses = document.querySelector(".losses");
    const resetter = document.querySelector(".reset");

    if (winAmount > 0 && lossAmount === 0){
        percent = "100";
    } else if (winAmount === 0 && lossAmount > 0){
        percent = "0";
    } else if (winAmount === 0 && lossAmount === 0){
    percent = " "; 
    } else {
    percent = ((winAmount / total)*100).toFixed(0);   
    }

    const randomCards = arr => {
    i = 0;
    while (i < 6)  {
        num = arr[Math.floor(Math.random()*arr.length)]
        if (!cards.includes(num)) {
        cards.push(num);
        i = i + 1;
        }
    } 
    chosenCard = cards[Math.floor(Math.random()*cards.length)];
    englishWord = chosenCard[0];
    matchingJapanese = chosenCard[1];
  
    }

    const match = (guess, answer) => { 
        if (guess === answer) {
            document.querySelector(".answer").textContent = "CORRECT!";
            winAmount = winAmount + 1;
            wins.textContent = "WINS: " + winAmount;
            begins();
        } else {
            document.querySelector(".answer").textContent = "TRY AGAIN!";
            lossAmount = lossAmount + 1;
            losses.textContent = "LOSSES: " + lossAmount;
            reset = reset + 1;
            if (reset === 1) {
                begins();
            }
        }
    }

    const resets = () => {
        wins.textContent = "WINS: " + 0;
        losses.textContent = "LOSSES: " + 0;
        percentage.textContent = "%: " + 0;
        guess1.innerHTML = '';
        guess2.innerHTML = '';
        guess3.innerHTML = '';
        guess4.innerHTML = '';
        guess5.innerHTML = '';
        guess6.innerHTML = '';
        word.innerHTML = '';
        document.querySelector(".begin").disabled = false;
    }
    resetter.onclick = (e) =>resets()

    randomCards(allArr);
    console.log(chosenCard);
    console.log(englishWord);
    console.log(matchingJapanese);

    const word = document.getElementById('englishWordDis');
    word.textContent = englishWord;
    const guess1 = document.querySelector("#slot1");
    guess1.textContent = cards[0][1];
    const guess2 = document.querySelector("#slot2");
    guess2.textContent = cards[1][1];
    const guess3 = document.querySelector("#slot3");
    guess3.textContent = cards[2][1];
    const guess4 = document.querySelector("#slot4");
    guess4.textContent = cards[3][1];
    const guess5 = document.querySelector("#slot5");
    guess5.textContent = cards[4][1];
    const guess6 = document.querySelector("#slot6");
    guess6.textContent = cards[5][1];


    guess1.onclick = (e) => match(guess1.textContent, matchingJapanese)
    guess2.onclick = (e) => match(guess2.textContent, matchingJapanese)
    guess3.onclick = (e) => match(guess3.textContent, matchingJapanese)
    guess4.onclick = (e) => match(guess4.textContent, matchingJapanese)
    guess5.onclick = (e) => match(guess5.textContent, matchingJapanese)
    guess6.onclick = (e) => match(guess6.textContent, matchingJapanese)

    const percentage = document.querySelector(".percent");
    percentage.textContent = "%: " + percent;
    const message = document.querySelector(".message")
    message.textContent = encouragement;

}

