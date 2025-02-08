import express from "express";
import User from "./userModel";

const userRouter = express.Router();

userRouter
  .post("/creatUser", async (req, res) => {
    // data aa rha hoga ..offc req.body se aayega.. usko store kra lo
    try {
      await User.create({
        name: "Harshit",
        email: "har@har.com",
        address: "up, mbd",
        password: "12345678gf",
      });

      res.json({success: true})
    } catch (error) {
      console.log(error);
      res.json({success: false})
    }
  })
  .get("/user:id", getUser);
