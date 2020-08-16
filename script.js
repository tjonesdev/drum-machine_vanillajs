const display = document.getElementById("display");
const bank = document.getElementById("bank");
let toggleState = "off";

const drumkeys = {
  "heater-1": {
    key: 81,
    letter: "Q",
    valueA: "Heater 1",
    valueB: "Chord 1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    srcAlt: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  "heater-2": {
    key: 87,
    letter: "W",
    valueA: "Heater 2",
    valueB: "Chord 2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    srcAlt: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  "heater-3": {
    key: 69,
    letter: "E",
    valueA: "Heater 3",
    valueB: "Chord 3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    srcAlt: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  "heater-4": {
    key: 65,
    letter: "A",
    valueA: "Heater 4",
    valueB: "Shaker",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    srcAlt: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  clap: {
    key: 83,
    letter: "S",
    valueA: "Clap",
    valueB: "Open HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    srcAlt: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  "open-hh": {
    key: 68,
    letter: "D",
    valueA: "Open HH",
    valueB: "Closed HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    srcAlt: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  "kick-n-hat": {
    key: 90,
    letter: "Z",
    valueA: "Kick n' Hat",
    valueB: "Punchy Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    srcAlt: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  kick: {
    key: 88,
    letter: "X",
    valueA: "Kick",
    valueB: "Side Stick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    srcAlt: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  "closed-hh": {
    key: 67,
    letter: "C",
    valueA: "Closed HH",
    valueB: "Snare",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    srcAlt: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
};

const drumkeysArr = Object.entries(drumkeys);

document.addEventListener("click", () => {
  for (let j = 0; j < drumkeysArr.length; j++) {
    if (drumkeysArr[j][0].includes(event.target.id)) {
      if (toggleState === "off") {
        display.innerHTML = drumkeys[event.target.id].valueA;
        if (drumkeysArr[j][1].letter === event.target.children[0].id) {
          event.target.children[0].src = drumkeysArr[j][1]["src"];
        }
      } else {
        display.innerHTML = drumkeys[event.target.id].valueB;
        if (drumkeysArr[j][1].letter === event.target.children[0].id) {
          event.target.children[0].src = drumkeysArr[j][1].srcAlt;
        }
      }
      event.target.children[0].play();
    }
  }
});

document.addEventListener("keydown", () => {
  for (let i = 0; i < drumkeysArr.length; i++) {
    if (drumkeysArr[i][1].key === event.keyCode) {
      if (toggleState === "off") {
        display.innerHTML = drumkeysArr[i][1].valueA;
        event.target.children[0].src = drumkeysArr[i][1]["src"];
      } else {
        display.innerHTML = drumkeysArr[i][1].valueB;
        event.target.children[0].src = drumkeysArr[i][1].srcAlt;
      }
      console.log(event.target.children[0].play());
    }
  }
});

const bankToggle = () => {
  if (toggleState === "off") {
    bank.style.justifyContent = "flex-end";
    display.innerHTML = "Smooth Piano Kit";
    toggleState = "on";
  } else {
    bank.style.justifyContent = "flex-start";
    display.innerHTML = "Heater Kit";
    toggleState = "off";
  }
};
