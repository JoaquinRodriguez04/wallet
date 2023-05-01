// variables

// variables mode dark
const modeDark = document.getElementById("mode_Dark")
const body = document.querySelector("body")
const select = document.getElementById("dia_semana")
const name_user = document.getElementById("name_navbar")
const wallet = document.getElementById("wallet")
const transfer = document.getElementById("transfer")
const request = document.getElementById("request")
const i = document.getElementById("icon")
const btn_sent = document.getElementById("btn_sentTo")
const a_sentTo = document.getElementById("a_sentTo")

// variables (menus desplegables)
const close = document.getElementById("close")
const close_2 = document.getElementById("close_2")
const perfil = document.getElementById("perfil")
const navbar_perfil = document.getElementById("navbar_perfil")
const nav_visible = document.getElementById("nav_visible")
const light_mode_etiquets = document.getElementById("light_mode_etiquets")
const navbar_lightning = document.getElementById("navbar_lightning")
const lightning = document.getElementById("lightning")

// funciones

// eventos

modeDark.addEventListener("click", () => {
    body.classList.toggle("black_body");
    modeDark.classList.toggle("white");
    select.classList.toggle("black");
    name_user.classList.toggle("white");
    wallet.classList.toggle("white_wallet");
    transfer.classList.toggle("primary_transfer");
    request.classList.toggle("primary_request");
    i.classList.toggle("black");
    btn_sent.classList.toggle("black_btn");
    a_sentTo.classList.toggle("white_a");
});

perfil.addEventListener("click", () => {
    navbar_perfil.classList.add("nav_visible")
})

close.addEventListener("click", () => {
    navbar_perfil.classList.remove("nav_visible")
})

lightning.addEventListener("click", () => {
    navbar_lightning.classList.add("nav_visible")
})

close_2.addEventListener("click", () => {
    navbar_lightning.classList.remove("nav_visible")
})