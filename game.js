import { select } from "@inquirer/prompts";

import { mageBio, warriorBio, rogueBio } from "./gameInfo/characterInfo.js";
import { openingTitleQuestion } from "./gameInfo/questions.js";

const openingGreeting = select({
  message: openingTitleQuestion,
  choices: [
    {
      name: "I am",
      value: "Yes",
      description: "Only the bravest will chose this.",
    },
    {
      name: "I am not ready for this...",
      value: "No",
      description: "You decide that you are not ready for such a task.",
    },
  ],
});

const openingAnswer = await openingGreeting;

switch (openingAnswer) {
  case "No":
    console.log("Come back when you deem yourself worthy of this task!");
    break;
  case "Yes":
    console.log("Good, first you must choose your character");
    break;
  default: {
    console.log("You did not choose - Try again.");
  }
}

if (openingAnswer === "Yes") {
  const characterSelection = select({
    message:
      "I have provided you with a three possible characters for your quest. Choose one, read about them and then you can decide if you want to move forward with that character.",
    choices: [
      {
        name: "Selene Virell",
        value: "Mage",
        description: mageBio,
      },
      {
        name: "Garron Duskvale",
        value: "Warrior",
        description: warriorBio,
      },
      {
        name: "Nyra Vex",
        value: "Rogue",
        description: rogueBio,
      },
    ],
  });
}
