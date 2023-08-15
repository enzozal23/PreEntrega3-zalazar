const bbdd = [
  {
    usuario: "enzo",
    contraseña: "D2BBDDA14A",
    celular: 3624220737,
  },
  {
    usuario: "giuliana",
    contraseña: "giu1999",
    celular: 3624279922,
  },
  {
    usuario: "laura",
    contraseña: "pachones123",
    celular: 3624706553,
  },
  {
    usuario: "geor",
    contraseña: "zalazar123",
    celular: 3624381824,
  },
  {
    usuario: "enzoz",
    contraseña: "6BJ8PQNAT2AC",
    celular: 3624018233,
  },
];

const user = {
  usuario: "",
  contraseña: "",
  celular: 0,
};

const newUser = {
  usuario: "",
  contraseña: "",
  celular: 0,
};
const bienvenida = document.querySelector(".bienvenida");
const existeUsuario = JSON.parse(localStorage.getItem("usuario"));
const existeUsuarioLstorage = JSON.parse(localStorage.getItem("nuevoUsuario"));
const botonSignin = document.querySelector(".boton-enviar"); //boton de enviar
const botonSigninUp = document.querySelector(".sign-in"); //boton de para inciar sesion
const botonLogin = document.querySelector(".boton-registrarse"); //boton de registrarse
const botonSignOut = document.querySelector(".sign-out"); //boton de cerrar sesion
const botonEnviarLogin = document.querySelector(".boton-enviar-login"); //boton de enviar para registrarse
const inputs = document.querySelectorAll(".dateOfUser"); //imputs de usario y contraseña sign in
const inputsLogin = document.querySelectorAll(".log"); // impust de usuario y contraseña log in
const divLogin = document.querySelector("#login");
const divSignin = document.querySelector("#signin");

if (existeUsuario || existeUsuarioLstorage) {
  botonSignOut.classList.add("activo");
  botonSigninUp.classList.remove("activo");
  divLogin.classList.remove("activo");
  divSignin.classList.remove("activo");

  bienvenida.innerText = `bienvido a la percha!`;
}

botonSignin.addEventListener("click", () => {
  const usuarioEncontrado = bbdd.find(
    (registro) =>
      user.usuario === registro.usuario && //HACE UN FIND DE BBDD Y BUSCA LO QUE SE INGRESO SI EXISTE PERMITE ENTRAR A LA PAG ELSE NO
      user.contraseña === registro.contraseña
  );
  if (usuarioEncontrado) {
    alert("bienvenido" + usuarioEncontrado.usuario);
    localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
  } else {
    const usuarioEncontradoLstorage = existeUsuarioLstorage.find(
      (registro) =>
        user.usuario === registro.usuario &&
        user.contraseña === registro.contraseña
    );
    if (existeUsuarioLstorage) {
      alert("bienvenido" + usuarioEncontradoLstorage.usuario);
    } else {
      ("NO ESTAS REGISTRADO");
    }
  }
});

inputs.forEach((element) => {
  element.addEventListener("input", (evento) => {
    // aca por cada iteracion del array inputs se escucha el evento ingresado en usuario y contraseña
    if (evento.target.name == "usuario") {
      user.usuario = evento.target.value;
    }
    if (evento.target.name == "contraseña") {
      user.contraseña = evento.target.value;
    }
  });
});

botonLogin.addEventListener("click", (e) => {
  e.preventDefault();
  divLogin.classList.add("activo");
  divSignin.classList.remove("activo");
});

inputsLogin.forEach((element) => {
  element.addEventListener("input", (evento) => {
    // aca por cada iteracion del array inputs se escucha el evento ingresado en usuario y contraseña
    if (evento.target.name == "usuario") {
      newUser.usuario = evento.target.value;
    }
    if (evento.target.name == "contraseña") {
      newUser.contraseña = evento.target.value;
    }
    if (evento.target.name == "celular") {
      newUser.celular = evento.target.value;
    }

    botonEnviarLogin.addEventListener("click", () => {
      bbdd.push(newUser);
      localStorage.setItem("nuevoUsuario", JSON.stringify(newUser));
    });
  });
});

botonSignOut.addEventListener("click", () => {
  divLogin.classList.remove("activo");
  divSignin.classList.add("activo");
  bienvenida.classList.remove("activo");
  bienvenida.innerText = ``;
  localStorage.clear();
  location.reload(true);
});
