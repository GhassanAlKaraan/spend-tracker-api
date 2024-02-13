// For bad requests
const errorHandler = (err, req, res, next) => {
    if(err){
        console.log(err);
        res.status(400).json({success: false, data: 'Bad request bro'});
    }else{
        res.status(500).json({success: false, data: 'Server Error'});
    }
};

module.exports = errorHandler;