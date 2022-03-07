export class Scanner {
    line = "";
    index = 0;
  
    constructor(line: string) {
      this.line = line;
    }
  
    public readNextWord() {
      let word = "";
      while(this.index < this.line.length && this.line[this.index] == ' ') this.index++;
      while(this.index < this.line.length && this.line[this.index] != ' ') word += this.line[this.index++]
      return word;
    }
  
    public nextInt() {
      return parseInt(this.readNextWord());
    }
  
    public nextDouble() {
      return parseFloat(this.readNextWord().replace(",", "."));
    }
  
  }
  