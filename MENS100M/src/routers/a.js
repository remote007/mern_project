const express = require("express");
const Student = require("../models/mens");
const router = new express.Router();
router.use(express.json())