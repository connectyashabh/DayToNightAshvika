function change(){
   
    if(this.scrollY > this.innerHeight/1.6){
        document.body.classList.add('dark')
    }
    else{
        document.body.classList.remove('dark')
    }
}

window.addEventListener("scroll",change);


