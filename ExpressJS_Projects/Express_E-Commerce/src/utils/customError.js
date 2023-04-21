class CustomError extends Error{ //we override the Error class of Node...
    constructor(message,code){
        super(message);
        this.code=code;
    }
};

export default CustomError;