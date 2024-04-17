const color=document.querySelector('#random');
const h=document.querySelector('h1');
const gradcolor=document.querySelector('#gradient1'); 
const buttoncolor=document.querySelector('.btncolor');

//to generate random color
const rndmcolor =()=>{
    let rgb=[1,1,1];
    rgb[0]=Math.floor(Math.random()*255);
    rgb[1]=Math.floor(Math.random()*255);
    rgb[2]=Math.floor(Math.random()*255);

    return rgb;
}

//To check contrast of the text
const checkContrast=(tcolor)=>{
    const textc=Math.floor(((parseInt(tcolor[0])*255)+(parseInt(tcolor[1])*255)+(parseInt(tcolor[2])*255))/765);
    const textColor=(textc>96)?'black':'white';
    return textColor;
}

//For random bg color
color.addEventListener('click',function(){
    const tempcolor=rndmcolor();
    const newcolor=`rgb(${tempcolor[0]},${tempcolor[1]},${tempcolor[2]})`;
    const textcolor= checkContrast(tempcolor);
    document.body.style.background = newcolor;
    h.style.color=textcolor;
    h.innerText=`THE BACKGROUND COLOR IS: ${newcolor}`;
    h.style.fontSize = '40px'; 
    buttoncolor.style.background="white";
})

//For random gradient background
gradcolor.addEventListener('click',function(){
    const tempcolor= rndmcolor();
    const tempcolor2 = rndmcolor();
    const newcolor = `rgb(${tempcolor[0]},${tempcolor[1]},${tempcolor[2]})`;
    const newcolor2 = `rgb(${tempcolor2[0]},${tempcolor2[1]},${tempcolor2[2]})`;

    document.body.style.background=`linear-gradient(to right, ${newcolor}, ${newcolor2})`;
    h.innerText=`THE GRADIENT COLOR IS: ${newcolor}, ${newcolor2}`;
    h.style.fontSize = '40px'; 
    h.style.color="black";
    buttoncolor.style.background="white";
})

//For random button background
buttoncolor.addEventListener('click',function(){
    const tempcolor = rndmcolor();
    const newcolor = `rgb(${tempcolor[0]},${tempcolor[1]},${tempcolor[2]})`;
    const contrast = checkContrast(tempcolor);
    document.body.style.background = contrast;
    buttoncolor.style.background = newcolor;
    h.style.color=newcolor;
    h.innerText=`THE BUTTON BACKGROUND COLOR IS: ${newcolor}`;
    h.style.fontSize = '40px'; 
})
