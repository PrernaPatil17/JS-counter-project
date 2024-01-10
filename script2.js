let count = 0 ;

const zero = document.querySelector("#zero");
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
    const styles =  e.currentTarget.classList;
    if(styles.contains("1")){
        count--;
    }
    else if(styles.contains("2")){
        count = 0;
    }
    else if(styles.contains("3")){
        count++;
    }

    if(count>0){
        zero.style.color = "green";
    }
    else if(count<0){
        zero.style.color = "red";
    }
    else{
        zero.style.color = "blue";
    }
    zero.textContent = count;
    })
});
