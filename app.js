function clicked(e){
    document.getElementById("inp").value+=e}

    function C(){
        document.getElementById("inp").value="";
    }
    function equal(){
        let x=document.getElementById("inp").value;
        let y=eval(x);
        document.getElementById("inp").value=y;
    }
    function del(){
        let x=document.getElementById("inp").value;
        let y=x.slice(0,-1);
        document.getElementById("inp").value=y;
    }
