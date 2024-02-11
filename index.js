const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mongodb = require("mongodb");
const bodyParser=require("body-parser");
const multer=require("multer");
const app=express();
require('dotenv').config();
require("./config/dbConnect");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "51a8a1fe",
  apiSecret: "9K3Sxc51Kvdt0Gga"
})
 const from = "Vonage APIs"
 const to = "918625956925"
 const text = 'A text message sent using the Vonage SMS API'

app.use(express.static('public'));
const Block=require("./BlockSchema/block")
const Users = require("./userSchema/user");
app.post("/sms-send",async(req,res)=>{
  await vonage.sms.send({to, from, text})
      .then(resp => { console.log('Message sent successfully'); console.log(resp); })
      .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}
)
app.post("/register", async (req, res) => {
    const user = new Users(req.body);
    const result = await user.save();
    console.log(result)
    //result=result.toObject();
    //delete result.password
    res.send(result);
  });
  app.post("/login", async (req, res) => {
    /*console.log(req.body)
     */ let user = await Users.findOne(req.body).select("-password");
  
    if (req.body.password && req.body.email) {
      if (user) {
        res.send(user);
      } else {
        res.send({ result: "user does not exist" });
      }
    } else {
      
      res.send({ result: "fill all" });
    }
  });
  let blocks = [];

app.post('/blocks', async(req, res) => {
  const { title, content } = req.body;
  const newBlock = new Block(req.body);
  const result=await newBlock.save();
  console.log(result)
  if(result)
  {
    res.send(result)
  }
  
});
app.get('/blocks', async (req, res) => {
  try {
    const blocks = await Block.find(); // Fetch all blocks from the database
    const blockIds = blocks.map(block => block._id);
    console.log(blockIds);
    res.json(blocks); // Send the blocks as a JSON response
    
  } catch (error) {
    console.error('Error fetching blocks:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get("/blocks/:id", async (req, res) => {
  try {
    let result = await Block.findOne({ _id: req.params.id });
    if (result) {
      console.log(result)
      res.send(result);
    } else {
      res.status(404).send({ error: "Block not found" });
    }
  } catch (error) {
    console.error('Error fetching block by ID:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/*app.get('/blocks/:id',(req,res)=>{
  let result=await 
})*/
  app.listen(9100, () => {
    

    console.log("port is running");
  
  });
  