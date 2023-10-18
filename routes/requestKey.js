const router=require("express").Router();

router.get("/requestkey",(req,res)=>{
    res.json({key:process.env.RAZORPAY_API_KEY});
})

module.exports=router;