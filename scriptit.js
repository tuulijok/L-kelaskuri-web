function nollaa() {
    const x = document.getElementById("showPainonm");
    x.style.display = "none";

    const a = document.getElementById("showMenu");
    a.style.display = "block";
}

function showPainonm(){
    const a = document.getElementById("showMenu")
    a.style.display = "none";

    const x = document.getElementById("showPainonm");
    x.style.display = "block";
}
function laskePainonm() {
    const m = document.getElementById("paino").value;
    const annostus = document.getElementById("mgperkgpervrk").value;
    const xvrk = document.getElementById("antokerrat").value;

    if (xvrk > 1) {
        x = m * annostus
        y = x / xvrk

        document.getElementById("vrkTot").innerHTML = x + " mg/vrk.";
        document.getElementById("kertaA").innerHTML = y + " mg.";
    } else {
        oumaikaad = document.getElementById("kertaA");
        oumaikaad.style.display = "none";
        x = m * annostus
        document.getElementById("totVrk").innerHTML = x + " mg/vrk.";
    }
}