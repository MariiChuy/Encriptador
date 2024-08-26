const ingresotext = document.getElementById("texto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const btncopiar = document.getElementById("btncopiar");
const final = document.getElementById("mens-final");
const munneco = document.getElementById("munneco");
const riginf = document.getElementById("rig-inf");
const right = document.getElementById("right");

    let reemplazar = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober",],
        ["u", "ufat"],
    ]

    const quitar = (nuevo) => {
        final.innerHTML=nuevo;
        munneco.classList.add("oculto");
        ingresotext.value="";
        riginf.style.display = "none";
        btncopiar.style.display ="block";
        final.classList.add("ajustar");

    };
    botonEncriptar.addEventListener("click", () =>{
        const text = ingresotext.value.toLowerCase();
        function encriptar(newtext){
            for(let i = 0; i < reemplazar.length; i++){
                if (newtext.includes(reemplazar[i][0])){
                    newtext = newtext.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return newtext;
        };
        quitar(encriptar(text));
        //const textoEncriptado = encriptar(text);
        //final.innerHTML=encriptar(text);
    });
    botonDesencriptar.addEventListener("click", () =>{
        const text = ingresotext.value.toLowerCase();
        function desencriptar(newtext){
            for(let i = 0; i < reemplazar.length; i++){
                if (newtext.includes(reemplazar[i][1])){
                    newtext = newtext.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
            };
            return newtext;
        };
        quitar(desencriptar(text));
        //const textoEncriptado = encriptar(text);
        //final.innerHTML=encriptar(text);
    });
    btncopiar.addEventListener("click", () =>{
        let textoo= final;
        //navigator.clipboard.writeText(textoo.value);
        textoo.select();
        document.execCommand('copy');
        alert("Texto Copiado");
        final.innerHTML="";
        munneco.classList.remove("oculto");
        riginf.style.display = "block";
        btncopiar.style.display ="none";
        final.classList.remove("ajustar");
        ingresotext.focus();
    });



