let x = 'Developed by Kurayami Makkura';
let i = -2;
let intro = document.getElementsByTagName('input')[0];
if(sessionStorage.intro == 'true'){
    document.getElementsByTagName('h1')[0].style.display = 'block';
    document.getElementById('header').style.display = 'block';
    document.getElementById('box').style.display = 'grid';
    document.getElementsByTagName('button')[0].style.display = 'block';
    document.getElementsByTagName('button')[1].style.display = 'block';
    document.getElementsByTagName('a')[0].style.display = 'block';
}
else{
    let y = setInterval(
        function(){
            if(i < 0){
                i++;
            }
            else if(i < x.length){
                intro.value += x[i];
                i++;
            }
            else if(i == x.length+8){
                sessionStorage.intro = 'true';
                intro.style.display = 'none';
                document.getElementsByTagName('h1')[0].style.display = 'block';
                document.getElementById('header').style.display = 'block';
                document.getElementById('box').style.display = 'grid';
                document.getElementsByTagName('button')[0].style.display = 'block';
                document.getElementsByTagName('button')[1].style.display = 'block';
                document.getElementsByTagName('a')[0].style.display = 'block';
                clearInterval(y);
            }
            else{
                i++
            }
        }
        ,100
    )
}
