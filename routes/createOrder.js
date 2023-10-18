const router=require("express").Router();
const Razorpay = require('razorpay');
router.post("/createorder",(req,res)=>{
  console.log("createorder");
  console.log(req.body);
  var instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY
  });
   var options = {
      amount: (req.body.userorder.amount>1000)?300:200,  
      currency: "INR",
     
    };
    instance.orders.create(options, function(err, order) {
      
      if(err)
      {
      res. status(404)
      console.log(err);
      }
      else
      res.json({order:order})
    });
  
})

module.exports=router;