import { generateRandomColor } from "./generateRandomColor";
import { shuffle } from "./shuffle";

export const generateColors = (arr) => {

    // Select a random color as the prompt
    const promptColor = generateRandomColor(arr);
  
    // Select a random color that is not the prompt as the style color
    const copy = [...arr];
    copy.splice(copy.indexOf(promptColor), 1);
    const styleColor = generateRandomColor(copy);
  
    // Add the previous two colors to an array and randomly keep adding colors until 4 items are in the arr
    const buttonColors = [promptColor, styleColor];
    while (buttonColors.length < 4) {
      const randomButtonColor = generateRandomColor(copy);
      if (!buttonColors.includes(randomButtonColor)) {
        buttonColors.push(randomButtonColor);
      }
    }
  
    return {
      prompt: promptColor,
      style: styleColor,
      buttons: shuffle(buttonColors),
    };
  };