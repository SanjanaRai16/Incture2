function minCoinsToMakeAmount(coins,amount){
    let array=[];
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++){
           let coin = coins[j];
            if (i >= coin) {
                if(array[i]==coins[j])

    return array[amount] === 9999 ? -1 : array[amount];
}
    }}}
console.log(minCoinsToMakeAmount([5,10,],35))

