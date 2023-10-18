const router=require("express").Router();
const crypto=require("crypto");


router.post("/verifypayment",(req,res)=>{
    console.log(req.body);
   const {payment_Id,order_Id,signature}=req.body;
   const body=order_Id+"|"+payment_Id;
   var expectedsignature=crypto.createHmac('sha256',process.env.RAZORPAY_SECRET_KEY).update(body.toString()).digest('hex');
   console.log(expectedsignature);
   console.log(signature);
   const isAuthentic=expectedsignature === signature;
   if(isAuthentic)
    res.send({success:"true"});
   else
    res.send({success:"false"});

})

module.exports=router;