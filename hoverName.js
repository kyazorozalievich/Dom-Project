const bord = document.querySelector("#bord");
const btnY = document.querySelector(".btnY");
const btnX = document.querySelector(".btnX");

const colorNames = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

let names = [
  "asan",
  "uson",
  "akulay",
  "umar",
  "guzalim",
  "aidana",
  "munarbek",
  "ruslan",
  "burul",
  "taalai",
  "kanat",
  "asker",
  "alina",
  "oroz",
  "rasul",
  "muslim",
  "bermet",
  "kanat",
  "chunguz",
  "mirbek",
  "aisuluu",
  "beksultan",
  "usman",
  "nur",
  "almambet",
  "mirbek",
  "karim",
  "beka",
  "musa",
  "timur",
  "barsbek",
  "toha",
  "akyl",
];

for (let i = 0; i < 12; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  bord.append(box);
  box.addEventListener("mouseover", () => {
    setColor(box);
    box.innerHTML = randomName();
  });
  box.addEventListener("mouseout", () => {
    removeColor(box);
    box.innerHTML = "";
  });

  btnY.addEventListener("click", () => {
    setColor(box);
    box.innerHTML = randomName();
  });
  btnX.addEventListener("click", () => {
    removeColor(box);
    box.innerHTML = "";
  });
}

function setColor(el) {
  let color = randomColor();
  el.style.background = color;
  el.style.boxShadow = `1px 0px 20px ${color}, 1px 2px 1px ${color}`;
}

function removeColor(el) {
  el.style.background = "#777474";
  el.style.boxShadow = ``;
}

function randomColor() {
  let randomIndex = Math.trunc(Math.random() * colorNames.length);
  return colorNames[randomIndex];
}

function randomName() {
  let idx = Math.trunc(Math.random() * names.length);
  return names[idx];
}
