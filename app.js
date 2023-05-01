// variables

// const modeDark = document.getElementById("mode_Dark")
// const moon = document.getElementById("moon")
// const body = document.querySelector("body")
// const icons = document.querySelector("i")
// const name_navbar = document.getElementById("name_navbar")
// const wallet = document.getElementById("wallet")
// const data_h2 = document.getElementById("data_h2")
// const data_p = document.getElementById("data_p")
// const data_white = document.getElementById("data")
// const data_black = document.getElementById("data_2")
// const data_black_2 = document.getElementById("data_3")
// const btn_wallet = document.getElementById("btn_wallet")
// const transfer = document.getElementById("transfer")
// const request = document.getElementById("request")
// const navbar_low = document.getElementById("navbar_low")
// const dia_semana2 = document.getElementById("dia_semana")
// const btn_sent = document.getElementById("btn_sentTo")
// const beel = document.getElementById("beel")
// const a_sentTo = document.getElementById("a_sentTo")

// variables (menus desplegables)
const close = document.getElementById("close")
const close_2 = document.getElementById("close_2")
const perfil = document.getElementById("perfil")
const navbar_perfil = document.getElementById("navbar_perfil")
const nav_visible = document.getElementById("nav_visible")
const light_mode_etiquets = document.getElementById("light_mode_etiquets")
const navbar_lightning = document.getElementById("navbar_lightning")
const lightning = document.getElementById("lightning")

// unciones

// eventos

// modeDark.addEventListener("click", () => {
//     body.classList.toggle("dark_mode_tarjets");
//     name_navbar.classList.toggle("light_mode_etiquets");
//     data_black.classList.toggle("light_mode_etiquets");
//     data_black_2.classList.toggle("light_mode_etiquets");
// });

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