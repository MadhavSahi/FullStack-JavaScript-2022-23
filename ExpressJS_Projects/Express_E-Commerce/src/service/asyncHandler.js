
//Conrollers :- In controllers we have to make frequent calls with DB...hence we have to use async await and try catch...hence we have to pass every controller method through this...so we made a global HOF for them here...so that every controller method can use this easily....we r just reducing lines of code there...otherwise these lines of code have to be written for every method. Doing this will just be easy for controller to directly make DB calls as now it won;t care for latency or error issue while having DB calling issue...bcz we are handling them here.

//fn is basically the controller method...we will receive req,res,next from fn..and make it async...
const asyncHandler = (fn) => async(req,res,next) => {
    try {
        await fn(req,res,next);
    } catch (error) {
        res.status(error.code || 500).json({
            success:false,
            message:error.message,
        })
    }
};

export default asyncHandler;