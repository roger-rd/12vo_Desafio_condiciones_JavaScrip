//primera parte Imagen con/sin border
const btnSolar = document.querySelector("#btnSolar");

btnSolar.addEventListener("click", () => { 
    if (btnSolar.style.borderStyle === "solid"){ 
        
        btnSolar.style.border ="none";
        
    }else(btnSolar.style.border="red 2px solid")
    
});

//segunda parte Stiskers

let stickersTierra = document.querySelector('#stickersTierra');
let stickersSol = document.querySelector('#stickersSol');
let stickersLuna = document.querySelector('#stickersLuna');
let totalNumberSticker = document.querySelector('#totalNumberSticker');
const btnStickers = document.querySelector('#btnStickers');

    btnStickers.addEventListener('click',() =>{
    let tierra = Number(stickersTierra.value);
    let sol = Number(stickersSol.value);
    let luna = Number(stickersLuna.value);
    let totalStickers = tierra+sol+luna;
    
    if (totalStickers <= 10){
        totalNumberSticker.innerHTML= `<b>Llevas : ${totalStickers} stickers </b> 😀🎉🎉🎊` ;
        totalNumberSticker.style.color = "yellow";
    return;
}
    if (totalStickers > 10){
        totalNumberSticker.innerHTML= `<b>llevas : ${totalStickers} stickers son demasiados debes eliminar  ❌❌❌🚫🚫  </b>`;
        totalNumberSticker.style.color = "red";
    return;
}
});

//tercera parte
let codigoUno =document.querySelector("#codigoUno")
let codigoDos =document.querySelector("#codigoDos")
let codigoTres =document.querySelector("#codigoTres")
let resultadoPassword =document.querySelector("#resultadoPassword")
let btnPassword =document.querySelector("#btnPassword")


btnPassword.addEventListener('click',() =>{
    let uno = codigoUno.value;
    let dos = codigoDos.value;
    let tres = codigoTres.value;
    let password = uno + dos + tres;


    if (password === "911"){
        resultadoPassword.innerHTML = "<b>Password 1 Correcto</b>";
        resultadoPassword.style.color = "green";
    return; 
    }
    if (password === "714" ){
        resultadoPassword.innerHTML = "<b>Password 2 Correcto</b>";
        resultadoPassword.style.color = "green";
    return;
    }
    if (password != "911" || "714"){
        resultadoPassword.innerHTML = "<b>Password  Incorrecto, Intente Nuevamente</b>";
        resultadoPassword.style.color = "red";
    return;
    }
})



