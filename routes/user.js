import { Router } from "express";
import { Users as User } from "../MongoDB/usersDataBase.js";

const router = Router();

router.get("/api/users", (req, res) => {
  res.status(200).send(User);
  console.log("Hello World");
});

//using the params
router.get("/api/user/:id", (req, res) => {
  let body = req.params.id;
  res.send(body);
});

router.post("/api/user", (req, res) => {
  const { id, name, email } = req.body;
  const newUser = { id, name, email };
  let latestUser = User.push(newUser);
  res.status(201).send(latestUser);
});

export default router;
