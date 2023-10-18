const router=require("express").Router();

const {google}=require('googleapis');

const auth=new google.auth.GoogleAuth({
    keyFile:"creds.json",
    scopes:"https://www.googleapis.com/auth/spreadsheets"
   });
const client= auth.getClient();
const spreadsheetId=process.env.SHEET_ID;
const googlesheets=google.sheets({version:"v4",auth:client});

router.post("/storeuser",async (req,res)=>{
    //console.log(req.body.usersetails.values());
    //console.log(Object.values(req.body.userdetails));
    if(req.body.sheet===1)
    {
    
    await googlesheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range:"Sheet1",
        valueInputOption:"USER_ENTERED",
        resource:{
         values:[
          Object.values(req.body.userdetails)
         ]
        }
      })
    }
    else
    {
      await googlesheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range:"Sheet2",
        valueInputOption:"USER_ENTERED",
        resource:{
         values:[
          Object.values(req.body.userdetails)
         ]
        }
      })
    }
    console.log("sheets route");
    res.json({"success":true});
})

module.exports=router;