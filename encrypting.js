let text = document.querySelector('#inpt1');
let cipher = document.querySelector('#inpt2');
let crypted = document.querySelector('#inpt3');
let button = document.querySelector('button');
button.onclick = function(){
    let TEXT = text.value;
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
        for(let i = 0; i < TEXT.length; i++){
            if(TEXT.charCodeAt(i)>=32&&TEXT.charCodeAt(i)<=126){
                if(abc.length-TEXT.charCodeAt(i)+31>=CIPHER.length){
                    x[i] = abc[CIPHER.length+TEXT.charCodeAt(i)-32];
                }
                else{
                    x[i] = abc[CIPHER.length-abc.length+TEXT.charCodeAt(i)-32];
                }
            }
            else{
                x[i] = TEXT[i];
            }
        }
        crypted.value = x.join('');
    }
}