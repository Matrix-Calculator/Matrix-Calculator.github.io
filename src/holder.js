import { add, multiply, fraction } from 'mathjs';

export class Holder {
    constructor() {
        this.display = "";
        this.value = fraction("0");
    }

    freeze() {
        if(!this.display) { this.display = "0"; }
    }

    getDisplay() {
        return this.display;
    }

    setDisplay(display) {
        if(display.match("[^0-9-/]")) return;
        while(display.length > 1 && display[0] === "0") {
            display = display.substr(1);
        }
        this.display = display;
        this.syncValue();
    }

    getValue() {
        return this.value;
    }

    syncValue() {
        try {
            this.value = fraction(this.display)
        } catch {
            console.log("Errors Syncing Value");
        }
    }

    syncDisplay() {
        try {
            if(this.value.d === "1" || this.value.d === 1) {
                this.display = this.value.n;
            } else {
                this.display = this.value.n + "/" + this.value.d;
            }
            if(this.value.s === "-1" || this.value.s === -1) {
                this.display = "-" + this.display;
            }
        } catch {
            console.log("Errors Syncing Display");
        }
    }

    add(factor, other) {
        this.value = add(this.value, multiply(factor, other.value));
        this.syncDisplay();
    }

    multiply(factor) {
        this.value = multiply(factor, this.value);
        this.syncDisplay();
    }
}