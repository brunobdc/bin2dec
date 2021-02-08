var app = new Vue({
    el: '#app',
    data: {
        binary: "",
        decimal: "",
        error_message: null
    },
    methods: {
        binInputIsValid: function() {
            if(this.binary.match(/^[0-1]+$/g) === null) {
                this.error_message = "Enter either 0 or 1";
                return false;
            }
            this.error_message = null;
            return true;
        },
        convert: function() {
            if(this.binInputIsValid()) {
                let decimalResult = 0;
                let counter = this.binary.length - 1;

                for(c of this.binary) {
                    decimalResult += parseInt(c) * (Math.pow(2, counter));
                    counter -= 1;
                }

                this.decimal = decimalResult;
            }
        },
    }
})