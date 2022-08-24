window.onload = function () {
    let click = document.getElementById("button");
    let test=document.getElementById("test");

 
    click.onclick =function(){
        document.getElementById("popup1").style.display = "block";
        let cancel_click=document.getElementById("close")
        cancel_click.onclick =function(){
        document.getElementById("popup1").style.display = "none";

        }
   }
    test.onclick = function(){
        alert('test')
    }
}


