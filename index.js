function isPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else return false;
}

console.log(isPalindrome("Madam I'm Adam"));
//A palindrome is a word, phrase, number or sequence of words that reads the same backward as forward.
