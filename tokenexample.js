const jwt = require("jsonwebtoken");

const secretkey =
  "f16285efc6d874b192914b7e88144cf4ba36c9dccc78b30a36d82da2dd6d79054af9152abce8c7d4ca6c219170265c5f968e1821c6851274b04fe02e3e04ebe3";

const user = {
  id: "12345", // required
  specialty: "Gastroenterology", // optional
};

const token = jwt.sign(user, secretkey, { expiresIn: "1h" });

const m3Url = `https://partnerauth.m3medical.com/campaign?t=${token}`;
