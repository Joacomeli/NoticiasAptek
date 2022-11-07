"use strict";

const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const config = require("../config");
const httpStatus = require("http-status");
const uuidv1 = require("uuid/v1");
const userModel = require("../models/user.model");

exports.login = async (req, res, next) => {
  try {
    const user = await User.findAndGenerateTokenMail(req.body);
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.secret);
    res.cookie("jwt", token, {
      maxAge: 99999999999,
      httpOnly: false,
      sameSite: "Strict",
    });

    return res.json({
      message: "OK",
      token: token,
      role: user.role,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
};

exports.verify = async (req, res, next) => {
  try {
    let userT = new User(req.user);

    res.json({ result: "ok", user: userT.transform() });
  } catch (error) {
    next(error);
  }
};


