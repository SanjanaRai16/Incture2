function shortestPalindrome(s) {
    function isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }

    if (isPalindrome(s)){ return s;}

    let end = s.length;

    while (end > 0) {
        if (isPalindrome(s.substring(0, end))) {
            break;
        }
        end--;
    }

    var suffix = s.substring(end);
    var prefix= suffix.split('').reverse().join('');
    
    return prefix+ s;
}

console.log(shortestPalindrome("aacecaaa")); 

