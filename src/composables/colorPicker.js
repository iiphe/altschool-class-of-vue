
import { ref } from 'vue';

export default function useColorPicker() { 
    const colors = ["green", "red", "purple", "blue"];
    const message = ref(" Pick a color");
    const matchColor = (value) => {
        // generate a random color based on the array index
        const randomColor =  Math.floor(Math.random() * colors.length);

        if (value === colors[randomColor]) {
            message.value = `You guessed right [answer is ${colors[randomColor]}]` ;
        } else {        
            message.value = `You guessed wrong [answer is ${colors[randomColor]}]`;
        }
    }
    return { colors, message, matchColor };
}