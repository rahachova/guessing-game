class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max
        this.min = min
    }

    guess() {
        this.currentNum = Math.ceil((this.min + this.max) / 2)
        return this.currentNum
    }

    lower() {
        this.max = this.currentNum
    }

    greater() {
        this.min = this.currentNum
    }
}

module.exports = GuessingGame;
