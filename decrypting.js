let crypted = document.querySelector('#inpt1');
let cipher = document.querySelector('#inpt2');
let text = document.querySelector('#inpt3');
let button = document.querySelector('button');
button.onclick = function(){
    let CRYPTED = crypted.value;
    let CIPHER = cipher.value;
    let abc = [];
    let x = [];
    if(CIPHER!=''){
        for(let i = 0; i < CIPHER.length; i++){
            if(abc.includes(CIPHER[i])==false&&CIPHER[i].charCodeAt()>=32&&CIPHER[i].charCodeAt()<=126){
                abc.push(CIPHER[i]);
            }
        }
        for(let i = 0; i <= 94; i++){
            if(CIPHER.includes(String.fromCharCode(126-i))==false){
                abc.push(String.fromCharCode(126-i));
            }
        }
        for(let i = 0; i < CRYPTED.length; i++){
            if(CRYPTED.charCodeAt(i)>=32&&CRYPTED.charCodeAt(i)<=126){
                if(abc.indexOf(CRYPTED[i])>=CIPHER.length){
                    x[i] = String.fromCharCode(abc.indexOf(CRYPTED[i])+32-CIPHER.length);
                }
                else{
                    x[i] = String.fromCharCode(abc.length-CIPHER.length+abc.indexOf(CRYPTED[i])+32);
                }
            }
            else{
                x[i] = CRYPTED[i];
            }
        }
        text.value = x.join('');
    }
}
