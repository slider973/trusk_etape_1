import Prompt from "inquirer/lib/prompts/base";

export class TruskInput extends Prompt {
      render(){
          let bottomContent = '';
          let appendContent = '';
          let message = this.getQuestion()
          const isFinal = this.status === 'answered';
          console.log('this:', this)
          // if (isFinal) {
          //     appendContent = this.answer;
          // } else {
          //     appendContent = this.rl.line;
          // }
          console.log(message)
      }
}