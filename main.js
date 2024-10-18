//Variables
let fire, fireX = 600, fireY = 700;
let ravan, ravanX = 650, ravanY = 170;
let shri_ram, ramX = 50, ramY = 150;
let aim, aimX = 720, aimY = 271;
let arrow, arrowX = 100, arrowY = 240, on_way_arrowX;
let golden_lanka_background;
let canvasWidth = 1000, canvasHeight = 600;
let arrow_loaded = false;
var ravan_health = 100, ram_lives = 3;
var error_code, error_type, error_description;
var interval, interval2, interval3, interval4;
var check_CHEAT_use = false;
var check_interval2 = true;
const cheat = [
    "Reset_Lives_CHEAT",
    "Kill_Ravan_CHEAT",
    "Fix_Aim_At_navel_CHEAT",
    "Put_Ravan_On_Fire"
];
const ERR = [
    error_code = [
        700,
        701,
        702,
        703,
        704,
        705,
        706
    ],
    error_type = [
        "error.Vidit",
        ".got(file_data !found || corrupted)",
        ".got(!network)",
        ".network_disconnected",
        ".got(!arrow_loaded || arrow.corrupted)",
        "massFail(arrow error)",
        ".got(!aimMovement)",
        "fireDisplayedBeforeWin(CHEAT)"
    ],
    error_description = [
        "File_Detail_Fetch_ERR",
        "Network_Fetch_ERR",
        "Network_Disconnected_ERR",
        "Arrow_Load_ERR",
        "Arrow_Corrupt_ERR",
        "Mass_Failure_Due_To_Arrow_Error_ERR",
        "Aim_Movement_ERR",
        "Fire_Displayed_Before_Win_ERR"
    ]
];

//Setup
window.addEventListener('keydown', function myKeydown(e) {
    keyPressed = e.key;
    console.log("keyPressed = " + keyPressed);
    if (keyPressed === "f") {
        loadArrow();
    }
});

window.addEventListener('keyup', function myKeyup(e) {
    keyLifted = e.key;
    console.log("keyLifted = " + keyLifted);
    if ((keyPressed === "f") && (arrow_loaded === true)) {
        animateArrow();
        loadArrow();
    } else if ((keyPressed === "f") && (arrow_loaded === false)) {
        console.error("Error loading arrow: arrow error");
        console.error("Error code: " + ERR[2][3] + " || " + ERR[2][4] + " | " + ERR[0][3] + " | " + ERR[1][0] + ERR[1][4]);
        console.error({ "Failure": loadArrow });
        console.error({ "Failure": myKeyup });
        console.error({ "Failure": animateArrow });
        console.error({ "Failure arrow_loaded": arrow_loaded });
        console.error({ "Failure keyLifted": keyLifted })
        console.error("Error failure in different components of code: mass failure");
        console.error("Error code: " + ERR[2][5] + " | " + ERR[0][4] + " | " + ERR[1][5]);
        window.alert("ERR: It seems like there was an error with loading and shooting the arrow. Please troubleshoot the arrow error by pressing the troubleshoot button and entering the error name/number or directly pressing the arrow error fix button. error name: arrow error, error number: 703");
    }
});

//P5.js functions
function preload() {
    fire = loadImage("resources/animated-fire.gif");
    ravan = loadImage("resources/Ravan-PNG-File.png");
    shri_ram = loadImage("resources/shri-ram-photo.webp");
    aim = loadImage("resources/aim.png");
    arrow = loadImage("resources/arrow.png");
    golden_lanka_background = loadImage("resources/golden-lanka.jpeg");
}

function setup() {
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("#canvas");
    context = canvas.elt.getContext('2d', { willReadFrequently: true });
    console.log(context);
    background(golden_lanka_background);
}

function draw() {
    loadPixels();
    background(golden_lanka_background);
    image(shri_ram, ramX, ramY, 150, 300);
    image(ravan, ravanX, ravanY, 200, 200 * 1.402597402597403);
    image(aim, aimX, aimY, 50, 50);
    image(arrow, arrowX, arrowY, 110, 130);
    image(fire, fireX, fireY, 150 * 2.00836820083682, 200);
}

//Game Start setup after P5.js config
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log("Game started, Enjoy!");
        console.log("Jai Shree Ram!");
        console.log("Game setup info:- ");
        console.log("shri_ram = resources/shri-ram-photo.webp " + shri_ram + " ramX = " + ramX + " ramY = " + ramY);
        console.log({ "obj.shri_ram": shri_ram });
        console.log("ravan = resources/Ravan-PNG-File.png " + ravan + " ravanX = " + ravanX + " RavanY = " + ravanY);
        console.log({ "obj.ravan": ravan });
        console.log("fire = resources/animated-fire.gif " + fire + " fireX = " + fireX + " fireY = " + fireY);
        console.log({ "obj.fire": fire });
        console.log("arrow = resources/arrow.png " + arrow + " arrowX = " + arrowX + " arrowY = " + arrowY);
        console.log({ "obj.arrow": arrow });
        console.log("aim = " + aim + " aimX = " + aimX + " aimY = " + aimY);
        console.log({ "obj.arrow": arrow });
        console.log("ravan_health = " + ravan_health + "% at start");
        console.log({ "obj.ravan_health": ravan_health });
        console.log("ram_lives = " + ram_lives);
        console.log({ "obj.ram_lives": ram_lives });
        fetch("resources/py editors/image_rotater.py")
            .then(response => {
                console.log("arrow.png image rotated using image_rotater.py.");
                console.log("image_rotater.py file details:- ");
                display_URL = response.url.split("%20").join("-");
                console.log("URL: " + display_URL);
                console.log("Status: " + response.status + " " + response.statusText);
                console.log("Content type: " + response.headers.get("Content-Type"));
                console.log("Content length: " + response.headers.get("Content-Length"));
                const download_URL = response.url;
                console.log("Download URL: " + download_URL.split("http://").join("Vidit.image_rotater.py:"));
                console.log('Download link: %cRight click on the following link and then press open in new tab to download image_rotater.py file', "color: blue; text-decoration: underline;", download_URL);
                return response.blob();
            })
            .then(blob => {
                console.log("File size: " + blob.size + "bytes");
                console.log('%cVidit: Dussehra Game.', "color: navy; background-color: aqua; font-weight: 666; text-decoration: underline;");
                console.log('%cA Game By Vidit Keshari!', "color: navy; background-color: aqua; font-weight: 764; text-decoration: underline;");
            })
            .catch(error => {
                console.error("Error fetching file detils " + error);
                console.error("Error code: " + ERR[2][0] + " | " + ERR[0][0] + " | " + ERR[1][0] + ERR[1][1]);
                console.error("FIle: image_rotater.py");
            });
        console.log("Error system = Vidit.ERR");
        console.log("Error display port = error.Vidit");
        console.log({ "obj.Vidit.ERR": ERR });
        console.log("Cheat system = Vidit.CHEAT");
        console.log({ "CHEAT": cheat });
        console.warn("Using cheats could result in fatal errors. These error can fortunatly be resolved without restarting the game. So, feel fre to use the CHEAT.");
        aimMovement();
        checkFire();
    }, 2000);
});

window.addEventListener('load', error => {
    if (!navigator.onLine) {
        window.alert("Sorry, game can't be loaded because you are ofline. Please check your internet connection");
        console.error("Error getting internet: " + error);
        console.error("Error code: " + ERR[2][1] + " | " + ERR[0][1] + " | " + ERR[1][0] + ERR[1][2]);
    }
});

window.addEventListener("online", () => {
    window.alert("Network Found!");
    canvasWidth = 1000;
    canvasHeight = 600;
    console.log('%cNetwork Found!', "background-color: green;");
    setup();
    gameRestart();
});

window.addEventListener('offline', error => {
    window.alert("Sorry, network lost, please check your internet connection.");
    canvasWidth = 0;
    canvasHeight = 0;
    console.error("Error getting internet: " + error);
    console.error("Error code: " + ERR[2][2] + " | " + ERR[0][2] + " | " + ERR[1][0] + ERR[1][3]);
    setup();
});

//Game functions
function aimMovement() {
    check_interval2 = true;
    interval2 = setInterval(() => {
        aimX += 50;
        if (aimX > 820) {
            aimX = 620;
        }

        if (!check_interval2) {
            clearInterval(interval2);
            aimFix();
        }

        if (aimX === 720) {
            console.log("Aim at navel");
        }
    }, 400);
}

function loadArrow() {
    if (!arrow_loaded) {
        arrow_loaded = true;
        console.log("arrow_loaded = " + arrow_loaded);
    } else {
        arrow_loaded = false;
        console.log("arrow_loaded = " + arrow_loaded)
    }
}

function animateArrow() {
    var target_loaction = aimX;
    console.log("target_location = " + target_loaction);
    var arrow_target = target_loaction - 82;
    console.log("arrow_target = " + arrow_target);

    arrowY = 227;
    interval = setInterval(() => {
        arrowX += 12.5;
        console.log("arrowX = " + arrowX);
        if (arrowX >= arrow_target) {
            clearInterval(interval);
            arrowX = 100;
            arrowY = 240;
            console.log("Shot completed!");

            if (target_loaction == 720) {
                healthCTRL();
            } else {
                lifeCTRL();
            }
        }
    }, 20);
}

function lifeCTRL(CODE) {
    if (CODE == "reset") {
        ram_lives = 3;
        document.getElementById("player-lives").innerHTML = "Lives left: " + ram_lives;
        console.log("Cheat Executed: " + cheat[0]);
        check_CHEAT_use = true;
    } else {
        ram_lives -= 1;
        document.getElementById("player-lives").innerHTML = "Lives left: " + ram_lives;
        console.log("life decreased!");
        if (ram_lives == 1) {
            console.warn("You have only 1 life left");
            window.alert("You have only 1 life left");
        }

        if (!ram_lives) {
            loose();
        }
    }
}

function healthCTRL(CODE) {
    if (CODE == "kill") {
        ravan_health = 0;
        document.getElementById("ravan-health").innerHTML = "Ravan's health: " + ravan_health + "%";
        console.log("Cheat Executed: " + cheat[1]);
        check_CHEAT_use = true;
        win();
    } else if (CODE == "burn") {
        interval4 = setInterval(() => {
            ravan_health -= 5;
            document.getElementById("ravan-health").innerHTML = "Ravan's health: " + ravan_health + "%";
        }, 4500);
    } else {
        ravan_health -= 10;
        document.getElementById("ravan-health").innerHTML = "Ravan's Health: " + ravan_health + "%";
        console.log("Health decreased");
        if (!ravan_health) {
            win();
        }
    }
}

function troubleshoot() {
    var errorGot = prompt("Enter error name or code: ");
    errorGot.toLowerCase();
    if ((errorGot == "arrow error") || (errorGot == 703)) {
        console.log("repairArrow() called!");
        repairArrow();
    } else if ((errorGot == "aim fix error") || (errorGot == 705)) {
        console.log("repairAim() called!");
        repairAim();
    } else if (errorGot == "vihaan is ganda") {
        window.alert("Yes, you are right!! :)");
    } else if ((errorGot == "fire error") || (errorGot == "706")) {
        console.log("repairFire() called")
        repairFire();
    } else {
        console.warn("The error CODE entered by user does not exist");
        window.alert("The error CODE entered by you is not a valid error name or number");
    }
}

function repairArrow() {
    clearInterval(interval);
    arrowX = 100;
    arrowY = 240;
    console.log("Arrow fixed");
    arrow_loaded = false;
    window.alert("Arrow was successfully fixed");
}

function win() {
    if (check_CHEAT_use) {
        document.getElementById("win-status").innerHTML = "You Won, By CHEAT";
        console.warn("CHEAT were used in the game. ");
        fireCTRL("");
        setTimeout(() => {
            gameRestart();
        }, 2000);
    } else if (!check_CHEAT_use) {
        document.getElementById("win-status").classList.remove("btn-info");
        document.getElementById("win-status").classList.add("btn-success");
        document.getElementById("win-status").innerHTML = "You Won";
        setTimeout(() => {
            gameRestart();
        }, 2000);
    }
}

function loose() {
    document.getElementById("win-status").classList.remove("btn-info");
    document.getElementById("win-status").classList.add("btn-danger");
    document.getElementById("win-status").innerHTML = "You loose";
    gameRestart();
}

function gameRestart() {
    console.log("Restarting game...");
    document.getElementById("game-restart-repair-status").innerHTML = "Restarting your game...";
    setTimeout(() => {
        window.location.reload();
    }, 3000);
}

function copyright() {
    window.alert("copyright©, Vidit: Dussehra game. @All rights reserved.");
    console.log("copyright©, Vidit: Dussehra game. @All rights reserved.");
}

function aimCheat() {
    clearInterval(interval2);
    aimX = 720;
    check_interval2 = false;
    check_CHEAT_use = true;
    console.log("Cheat Executed: " + cheat[2]);
    aimFix();
}

function aimFix() {
    console.error("Error moving aim: aim movement error");
    console.error("Error code: " + ERR[2][6] + " | " + ERR[0][4] + " | " + ERR[1][0] + ERR[1][6]);
    window.alert("ERR: It seems like there was an error in moving the aim. It is likely due to an error in my aimMovement function or you turned on " + cheat[2] + ". Please troubleshoot the error by pressing troubleshoot button and then entering the error name/number. error name = aim fix error, error number = 705.");
}

function repairAim() {
    aimX = 720;
    check_interval2 = true;
    aimMovement();
    window.alert("Aim was successfully fixed!");
    console.log("Aim fixed!");
}

function fireCTRL(CODE) {
    if (CODE == "display") {
        check_CHEAT_use = true;
        fireY = 250
        console.log("Fire displayed! by CHEAT");
        console.log("Cheat Executed: " + cheat[3]);
        setTimeout(() => {
            console.log("burning ravan");
            console.log(fireY);
            healthCTRL("burn");
        }, 5000);
    } else if (CODE == "") {
        fireY = 249;
        console.log(fireY);
        console.log("Fire displayed!");
    }
}

function checkFire() {
    interval3 = setInterval(() => {
        if (fireY == 250) {
            clearInterval(interval3);
            console.error("Error fire displayed earlier: fire error");
            console.error("Error code: " + ERR[2][7] + " | " + ERR[0][6] + " | " + ERR[1][7]);
            window.alert("ERR: It seems like the fire is not at its position. It is likely due to the cheat: " + cheat[3] + "or you used the console. Please fix the error by pressing the troubleshoot button and entering error name/number. error name = fire error, error number = 706");
        }
    });
}

function repairFire() {
    clearInterval(interval4);
    fireY = 700;
    console.log(fireY);
    console.log("Fixed fire!");
    window.alert("Fire was successfully fixed!");
}

function gmail() {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&su=Hey!+I+have+found+a+bug&to=viditvihaan@gmail.com&body=The+bug+is-');
}
