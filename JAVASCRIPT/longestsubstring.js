
    /* function lengthOfLongestSubstring(s) {
    let length = 0;

    for (var i = 0; i < s.length; i++) {
        let set = new Set();

    for (var j = i; j < s.length; j++) {
            if(set.has(s[j])){
                break;
            }
            set.add(s[j])
            
      
        }
    
        if(length<j-i)
        {
            length=j-i;
        }
        return length;
    
    }
    }
String input="abbedc"
const output=lengthOfLongestSubstring(input);
console.log(output) */
function lengthOfLongestSubstring(s){
    let charSet=new Set();
    let maxLength=0;
    let left=0;
    for(right=0;right<s.length;right++){
        while(charSet.has(s[right])){
            charSet.delete(s[left])
            left++;
        }
        charSet.add(s[right]);
        maxLength=Math.max(maxLength,right-left+1)
    }
    return maxLength;

}
console.log(lengthOfLongestSubstring(" "))