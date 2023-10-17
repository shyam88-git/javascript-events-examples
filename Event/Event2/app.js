var x=document.getElementById('mypic');
x.onmouseover=(e)=>{

    x.setAttribute("src","Shyam.jpg");
    console.log(e);
}

x.onmouseout=()=>{

    x.setAttribute('src','Shyam.jpg');
}