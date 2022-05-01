function firstNVowels(phrase, n) {
    
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var result = [];
    
    for (var i = 0; i < n; i++) {
        var index = phrase.indexOf(vowels[i]);
        result.push(phrase[index]);
    }
    
    return result.join('');
}
    
  console.log(firstNVowels('major league', 5));