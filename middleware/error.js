// For bad requests
const errorHandler = (err, req, res, next) => {
    if(err){
        res.status(400).json({success: true, error: 'Bad request bro'});
    }else{
        res.status(500).json({success: true, error: 'Server Error'});
    }
};

module.exports = errorHandler;