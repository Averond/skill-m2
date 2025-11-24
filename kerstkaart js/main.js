const skibidiCanvas = document.getElementById("canvasId");
const skibidiG = skibidiCanvas.getContext("2d");

function skibidiBoom(x, y) {
    const skibidiGrad = skibidiG.createLinearGradient(x, y - 150, x, y);
    skibidiGrad.addColorStop(0, "purple");
    skibidiGrad.addColorStop(1, "green");

    skibidiG.fillStyle = "brown";
    skibidiG.fillRect(x - 20, y, 40, 60);

    skibidiG.fillStyle = skibidiGrad;
    skibidiG.beginPath();
    skibidiG.moveTo(x, y - 150);
    skibidiG.lineTo(x - 80, y);
    skibidiG.lineTo(x + 80, y);
    skibidiG.closePath();
    skibidiG.fill();

    for (let skibidiI = 0; skibidiI < 8; skibidiI++) {
        const skibidiX = x - 60 + Math.random() * 120;
        const skibidiY = y - 140 + Math.random() * 130;
        const skibidiColor = `hsl(${Math.random() * 360}, 80%, 55%)`;
        skibidiG.beginPath();
        skibidiG.arc(skibidiX, skibidiY, 10, 0, Math.PI * 2);
        skibidiG.fillStyle = skibidiColor;
        skibidiG.fill();
    }

    skibidiG.beginPath();
    skibidiG.moveTo(x, y - 180);
    skibidiG.lineTo(x - 15, y - 150);
    skibidiG.lineTo(x + 15, y - 150);
    skibidiG.closePath();
    skibidiG.fillStyle = "yellow";
    skibidiG.fill();
}

function skibidiHuis(x, y) {
    skibidiG.fillStyle = "lightgrey";
    skibidiG.fillRect(x, y, 100, 80);

    skibidiG.fillStyle = "darkred";
    skibidiG.beginPath();
    skibidiG.moveTo(x, y);
    skibidiG.lineTo(x + 50, y - 40);
    skibidiG.lineTo(x + 100, y);
    skibidiG.fill();

    const skibidiDate = new Date();
    const skibidiHour = skibidiDate.getHours();

    skibidiG.fillStyle = skibidiHour >= 18 ? "yellow" : "black";
    skibidiG.fillRect(x + 20, y + 20, 20, 20);
    skibidiG.fillRect(x + 60, y + 20, 20, 20);
}

function skibidiHuisjes() {
    for (let skibidiJ = 0; skibidiJ < 4; skibidiJ++) {
        const skibidiX = Math.random() * 700;
        const skibidiY = 350 + Math.random() * 150;
        skibidiHuis(skibidiX, skibidiY);
    }
}

skibidiBoom(400, 350);
skibidiHuisjes();

skibidiG.font = "50px serif";
skibidiG.fillStyle = "red";
skibidiG.fillText("Merry Christmas", 250, 580);
