window.onload = function () {
  let btnMenu;
  let cerrarMenuBtn;
  let elem;
  let menuList;

  let wh;

  // variables para acceder a cada cajon de servicios

  let boxUno, boxDos, boxTres, boxCuatro, boxCinco, boxSeis;

  //accedefemos a los id de cada box para darle una funccion que ebfocara caxa cajon

  boxUno = document.querySelector("#boxUno").offsetTop;

  boxDos = document.querySelector("#boxDos").offsetTop;
  boxTres = document.querySelector("#boxTres").offsetTop;
  boxCuatro = document.querySelector("#boxCuatro").offsetTop;
  boxCinco = document.querySelector("#boxCinco").offsetTop;
  boxSeis = document.querySelector("#boxSeis").offsetTop;

  elem = document.querySelector("#header");

  btnMenu = document.getElementById("menu_icon");

  cerrarMenuBtn = document.getElementById("cerrarMenuBtn");

  menuList = document.getElementById("menu_list");

  //eventos de los btns
  btnMenu.addEventListener("click", desplegarMenu);

  cerrarMenuBtn.addEventListener("click", cerrarMenu);

  //funccion que utilizare para desplegar el menu en la pantalla completa. esto lo se aplicara en moviles

  function desplegarMenu() {
    elem.classList.add("desplegado");
    btnMenu.style.display = "none";
    cerrarMenuBtn.style.display = "block";
    elem.style.display = " block";
    menuList.classList.add("menu_list_actived");
    //  setTimeout(border,1000);
  }

  function border() {
    wh = elem.clientHeight;

    if (wh >= 728) {
      elem.style.borderRadius = "0";
    }
  }
  //esta gunccion cerrara el menu a
  function cerrarMenu() {
    elem.classList.remove("desplegado");
    btnMenu.style.display = "block";
    cerrarMenuBtn.style.display = "none";
    elem.style.display = " flex";
    menuList.classList.remove("menu_list_actived");
  }

  //esta funcion sera aplicada al deslizar el dedo hacia arriba o isquierda

  //funcion que desvanes al bontom de menu en modo movil

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      elem.style.transform = "translateX(-100%)";
    } else if (window.scrollY <= 100) {
      elem.style.transform = "translateX(0)";
    }
  });

  //definiremos una funcion

  function foco(elemA, elemH) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= elemA - 200) {
        document.getElementById(elemH).classList.add("addHover");
      } else {
        document.getElementById(elemH).classList.remove("addHover");
      }
    });
  }

  //funcion que sera aplicado cuando se haga click en los botones del menu. este efecto es realizar desplazamiento vertical opteniento el valor offsetTop;de;cada seccion y aplicar ese valor a scroll() para desplazamiento.
  document.getElementById("btnAbout").addEventListener("click", () => {
    var ab = document.getElementById("aboutme").offsetTop;

    window.scroll(0, ab);
  });

  document.getElementById("btnServices").addEventListener("click", function () {
    var ab = document.getElementById("services").offsetTop;

    window.scroll(0, ab);
  });

  document.getElementById("btnTrabajos").addEventListener("click", function () {
    var ab = document.getElementById("jobs").offsetTop;

    window.scroll(0, ab);
  });

  document
    .getElementById("btnContactos")
    .addEventListener("click", function () {});

  //funcion que definire para que resalte la llamada de acción

  var cta = document.getElementById("cta");

  document.onscroll = function () {
    var ctaH = cta.offsetHeight;
    var wHeight = window.innerHeight - 100;
    var total = wHeight - ctaH;

    //
    if (window.scrollY >= cta.offsetTop - total) {
      document.getElementById("cta").classList.add("resaltar");
    } else {
      document.getElementById("cta").classList.remove("resaltar");
    }
  };

  //deifinire una funcion que al precionar cualquier imagen de mi trabajos se agrande en la pantalla
  let exitImg;
  let marco;

  exitImg = document.getElementById("exit_img");
  marco = document.getElementById("marco");
  let img1, img2, img3, img4, img5, img6;

  img1 = document.getElementById("img1");
  img2 = document.getElementById("img2");
  img3 = document.getElementById("img3");
  img4 = document.getElementById("img4");
  img5 = document.getElementById("img5");
  img6 = document.getElementById("img6");

  //evento que se escuchara al precionar cualquier imagen
  img1.addEventListener("click", () => {
    ampliarFoto(img1.firstElementChild.src);
  });

  img2.addEventListener("click", () => {
    ampliarFoto(img2.firstElementChild.src);
  });

  img3.addEventListener("click", () => {
    ampliarFoto(img3.firstElementChild.src);
  });

  img4.addEventListener("click", () => {
    ampliarFoto(img4.firstElementChild.src);
  });
  img5.addEventListener("click", () => {
    ampliarFoto(img5.firstElementChild.src);
  });

  img6.addEventListener("click", () => {
    ampliarFoto(img6.firstElementChild.src);
  });

  //evento que sera escuchado cuando se presiones el boton de salida de exitImg
  exitImg.addEventListener("click", () => {
    marco.classList.remove("actived_marco");
  });

  //function de mostrar foto en la cual se iso click

  function ampliarFoto(foto) {
    let cajaImg = document.getElementById("caja_img");

    marco.classList.add("actived_marco");

    cajaImg.firstElementChild.src = foto;
  }

  //llamada de accion

  document.getElementById("btnContactos").addEventListener("click", llamada);
  document.getElementById("call1").addEventListener("click", llamada);
  document.getElementById("call2").addEventListener("click", llamada);

  function llamada() {
    window.location.href = "contactos/index.html";
  }
}; //final code
