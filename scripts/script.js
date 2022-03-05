function revealPrices() {
    document.getElementById("prices").innerHTML = "YOUR KNEECAPS for half a dozen<br> a human soul for a dozen";
    document.getElementById("prices").onclick = "unRevealPrices()";
}

function unRevealPrices() {
    document.getElementById("prices").innerHTML = "Click to reveal prices!";
    document.getElementById("prices").onclick = "revealPrices()";
}