class calcControler {
    constructor() {
        //Attributes
        this.input = document.querySelectorAll('button')
        this.display = document.querySelector('#display')
        this.data = []
        this.listOperators = ['+', '-', '*', '/', '%', '.']

        //Initial Methods
        this.readInput()
        this.readKeyboard()
        this.initiate()
    }

    initiate() {
        setTimeout(() => {
            this.display.textContent = '0'
        }, 1);
    }

    //Read the input and create an event for the click
    readInput() {
        this.input.forEach(index => {
            index.addEventListener('click', e => {
                let inputTxt = e.target.id.replace('btn-', '')
                this.inputKey(inputTxt)
            })
        });
    }

    readKeyboard() {
        window.addEventListener('keyup', e => {
            this.inputKeyboardKey(e.key)
        })
    }

    maxDisplay() {
        if (this.display.textContent.length > 11) {
            this.error('1')
        }
    }

    //Add the input numbers to the array and refresh the display
    pushData(value) {

        if (isNaN(value)) { // If last input is not a number

            if (this.operatorDetector()) { //Change an existent operator

                this.data.pop()

            } else if (!this.operatorDetector()) { //First time operator

            } else { //Creating a float number

            }

        } else if (this.data.value == undefined || !isNaN(this.data.value)) { //Increasing the number

        }

        this.data.push(value)
        this.refreshDisplay()
        this.maxDisplay()

    }

    //Refresh the display
    refreshDisplay() {
        let actualNumber = this.data.join('')
        return this.display.textContent = actualNumber
    }

    //Return the input of the last operation
    lastOperation() {
        return this.data[this.data.length - 1]
    }

    //Search for operators on the last position input
    operatorDetector() {
        if (this.listOperators.indexOf(this.lastOperation()) > -1) {
            return true
        } else {
            return false
        }
    }

    zeroCase(value) {
        if (this.data.length < 1) {

        } else {
            this.pushData(value)
        }
    }

    dotCase() {

        if (this.data.indexOf('.') > -1) {
            this.error('2')

        } else if (this.data.length < 1) {
            this.data.push([0])
            this.pushData('.')
        } else {
            this.pushData('.')
        }
    }

    //Do the Math
    calc() {
        this.data = [this.data.join('')]
        this.data = [eval(this.refreshDisplay())]
        this.data = [parseFloat(this.data).toFixed(2)]
        this.display.textContent = this.data

        if (this.data.toLocaleString().length > 11) {
            this.error(1)
        }
    }

    //Change the signal of the display number
    switchSignal() {
        this.data = [(-this.data)]
    }

    //Do the exponencial function
    sqrt() {
        this.data = [this.data.join('')]
        this.data = [(this.data) * (this.data)]
        this.data = [parseFloat(this.data).toFixed(2)]
        this.display.textContent = [this.data]
        this.maxDisplay()
    }

    //Do the square root function
    sqrtroot() {
        this.data = [this.data.join('')]
        this.data = [Math.sqrt(this.data).toFixed(2)]
        this.display.textContent = [this.data]
    }

    //Check the signal
    plusminus() {
        if (this.data.length > 1) {
            this.data = [this.data.join('')]
            this.switchSignal()
        } else {
            this.switchSignal()
        }
        this.display.textContent = [this.data]
    }

    //Do the invert function (1/x)
    invertCalc() {
        this.data = [this.data.join('')]
        this.data = [(1 / this.data)]
        this.data = [parseFloat(this.data).toFixed(2)]
        this.display.textContent = [this.data]
        this.maxDisplay()
    }

    //Clear all inputs
    clearAll() {
        this.display.textContent = ''
        this.data = []
        this.initiate()
    }

    //Clear last entry
    clearEntry() {
        if (this.data.length <= 1) {
            this.clearAll()
        } else {
            this.data.pop()
            this.display.textContent = this.data.join('')
        }
    }

    error(value) {
        switch (value) {
            case '1':
                this.display.textContent = 'ERROR: MAX DISPLAY NUMBER'
                break;

            case '2':
                this.display.textContent = 'ERROR: MORE THAN 1 SEPARATOR'
                break;

            default:
                break;
        }
    }

    //Assign a function to every button pressed
    inputKey(value) {
        switch (value) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.pushData(value)
                break;

            case '0':
                this.zeroCase(value)
                break;

            case 'equal':
                this.calc()
                break;

            case 'minus':
                this.pushData('-')
                break;

            case 'plus':
                this.pushData('+')
                break;

            case 'divide':
                this.pushData('/')
                break;

            case 'multiply':
                this.pushData('*')
                break;

            case 'percent':
                this.pushData('%')
                break;

            case 'square':
                this.sqrt()
                break;

            case 'squareroot':
                this.sqrtroot()
                break;

            case 'inverse':
                this.invertCalc()
                break;

            case 'clearentry':
                this.clearEntry()
                break;

            case 'clear':
                this.clearAll()
                break;

            case 'arrow':
                console.log('arrow')
                break;

            case 'dot':
                this.dotCase()
                break;

            case 'plusminus':
                this.plusminus()
                break;

            default:
                break;
        }
    }

    inputKeyboardKey(value) {
        switch (value) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.pushData(value)
                break;

            case '0':
                this.zeroCase(value)
                break;

            case '=':
                this.calc()
                break;

            case '-':
                this.pushData('-')
                break;

            case '+':
                this.pushData('+')
                break;

            case '/':
                this.pushData('/')
                break;

            case '*':
                this.pushData('*')
                break;

            case '%':
                this.pushData('%')
                break;

            case 'Backspace':
                this.clearEntry()
                break;

            case 'Delete':
                this.clearAll()
                break;

            case ',':
                this.dotCase()
                break;

            case '.':
                this.dotCase()
                break;

            default:
                break;
        }
    }
}