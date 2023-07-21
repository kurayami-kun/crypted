let btn = document.querySelector('#btn');
btn.onclick = function(){
    let text = document.querySelector('#text').value;
    let cipher = document.querySelector('#cipher').value;
    let crypted = document.querySelector('#crypted');
    crypted.value = '';
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
    for(let i = 0; i < text.length; i++){
        if(asci.indexOf(text[i]) == -1){
            crypted.value += text[i];
        }
        else{
            crypted.value += list[asci.indexOf(text[i])];
        }
    }
}