let btn = document.querySelector('#btn');
btn.onclick = function(){
    let text = document.querySelector('#text');
    let cipher = document.querySelector('#cipher').value;
    let crypted = document.querySelector('#crypted').value;
    text.value = '';
    let asci = [];
    for(let i = 33; i < 127; i++){
        asci.push(String.fromCharCode(i));
    }
    let list = asci;
    for(let i = 0; i < cipher.length; i++){
        if(asci.indexOf(cipher[i]) == -1){
            continue;
        }
        else{
            let cut = list.indexOf(cipher[i]);
            let x = list.slice(0,cut);
            let y = list.slice(cut,list.length);
            list = y.concat(x);
        }
    }
    for(let i = 0; i < crypted.length; i++){
        if(asci.indexOf(crypted[i]) == -1){
            text.value += crypted[i];
        }
        else{
            text.value += asci[list.indexOf(crypted[i])];
        }
    }
}