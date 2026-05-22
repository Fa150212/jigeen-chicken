
const express = require("express");

const router = express.Router();

const {
  registerClient,
  loginClient,
} = require(
  "../controllers/client/clientAuthController"
);

router.post(
  "/register",
  registerClient
);

router.post(
  "/login",
  loginClient
);

module.exports = router;

// const express = require("express");

// const router = express.Router();

// const {
//   registerClient,
//   loginClient,
// } = require(
//   "../controllers/client/clientAuthController"
// );

// /* REGISTER */

// router.post(
//   "/register",
//   registerClient
// );

// /* LOGIN */

// router.post(
//   "/login",
//   loginClient
// );

// module.exports = router;