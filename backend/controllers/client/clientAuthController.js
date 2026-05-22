const User = require("../../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

/* =========================
   GENERATE TOKEN
========================= */

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

/* =========================
   REGISTER CLIENT
========================= */

exports.registerClient =
  async (req, res) => {
    try {

      const {
        name,
        email,
        password,
      } = req.body;

      const userExists =
        await User.findOne({
          email,
        });

      if (userExists) {
        return res.status(400).json({
          message:
            "Utilisateur existe déjà",
        });
      }

      const salt =
        await bcrypt.genSalt(10);

      const hashedPassword =
        await bcrypt.hash(
          password,
          salt
        );

      const user =
        await User.create({
          name,
          email,
          password:
            hashedPassword,
          role: "client",
        });

      res.status(201).json({
        success: true,
        user,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

/* =========================
   LOGIN CLIENT
========================= */

// exports.loginClient =
//   async (req, res) => {
//     try {

//       const {
//         email,
//         password,
//       } = req.body;

//       const user =
//         await User.findOne({
//           email,
//         });

//       if (!user) {
//         return res.status(400).json({
//           message:
//             "Utilisateur introuvable",
//         });
//       }

//       /* CHECK ROLE */

//       if (user.role !== "client") {
//         return res.status(403).json({
//           message:
//             "Accès refusé",
//         });
//       }

//       /* CHECK PASSWORD */

//       const isMatch =
//         await bcrypt.compare(
//           password,
//           user.password
//         );

//       if (!isMatch) {
//         return res.status(400).json({
//           message:
//             "Mot de passe incorrect",
//         });
//       }

//       /* TOKEN */

//       const token =
//         generateToken(user._id);

//       res.status(200).json({
//         success: true,
//         token,

//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           role: user.role,
//         },
//       });

//     } catch (error) {

//       console.log(error);

//       res.status(500).json({
//         message:
//           error.message,
//       });

//     }
//   };

exports.loginClient =
  async (req, res) => {
    try {

      const {
        email,
        password,
      } = req.body;

      /* CHECK INPUTS */

      if (!email || !password) {
        return res.status(400).json({
          message:
            "Tous les champs sont requis",
        });
      }

      /* FIND USER */

      const user =
        await User.findOne({
          email,
        });

      if (!user) {
        return res.status(404).json({
          message:
            "Utilisateur introuvable",
        });
      }

      /* CHECK PASSWORD EXISTS */

      if (!user.password) {
        return res.status(500).json({
          message:
            "Mot de passe utilisateur introuvable",
        });
      }

      /* COMPARE PASSWORD */

      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!isMatch) {
        return res.status(400).json({
          message:
            "Mot de passe incorrect",
        });
      }

      /* TOKEN */

      const token =
        jwt.sign(
          { id: user._id },
          process.env.JWT_SECRET,
          {
            expiresIn: "30d",
          }
        );

      res.status(200).json({
        success: true,

        token,

        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

  

// const User = require("../../models/User");

// const bcrypt = require("bcryptjs");

// const jwt = require("jsonwebtoken");

// /* =========================
//    GENERATE TOKEN
// ========================= */

// const generateToken = (id) => {

//   return jwt.sign(
//     { id },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "30d",
//     }
//   );

// };

// /* =========================
//    REGISTER CLIENT
// ========================= */

// exports.registerClient =
//   async (req, res) => {

//     try {

//       const {
//         name,
//         email,
//         password,
//       } = req.body;

//       /* VALIDATION */

//       if (
//         !name ||
//         !email ||
//         !password
//       ) {

//         return res.status(400).json({
//           message:
//             "Tous les champs sont requis",
//         });

//       }

//       /* CHECK USER */

//       const userExists =
//         await User.findOne({
//           email,
//         });

//       if (userExists) {

//         return res.status(400).json({
//           message:
//             "Cet utilisateur existe déjà",
//         });

//       }

//       /* HASH PASSWORD */

//       const salt =
//         await bcrypt.genSalt(10);

//       const hashedPassword =
//         await bcrypt.hash(
//           password,
//           salt
//         );

//       /* CREATE CLIENT */

//       const user =
//         await User.create({
//           name,
//           email,
//           password:
//             hashedPassword,

//           role: "client",
//         });

//       /* TOKEN */

//       const token =
//         generateToken(user._id);

//       res.status(201).json({
//         success: true,

//         token,

//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           role: user.role,
//         },
//       });

//     } catch (error) {

//       console.log(error);

//       res.status(500).json({
//         message:
//           error.message,
//       });

//     }
//   };

// /* =========================
//    LOGIN CLIENT
// ========================= */

// exports.loginClient =
//   async (req, res) => {

//     try {

//       const {
//         email,
//         password,
//       } = req.body;

//       /* VALIDATION */

//       if (
//         !email ||
//         !password
//       ) {

//         return res.status(400).json({
//           message:
//             "Tous les champs sont requis",
//         });

//       }

//       /* FIND CLIENT */

//       const user =
//         await User.findOne({
//           email,
//           role: "client",
//         });

//       if (!user) {

//         return res.status(400).json({
//           message:
//             "Client introuvable",
//         });

//       }

//       /* CHECK PASSWORD */

//       const isMatch =
//         await bcrypt.compare(
//           password,
//           user.password
//         );

//       if (!isMatch) {

//         return res.status(400).json({
//           message:
//             "Mot de passe incorrect",
//         });

//       }

//       /* TOKEN */

//       const token =
//         generateToken(user._id);

//       res.status(200).json({
//         success: true,

//         token,

//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           role: user.role,
//         },
//       });

//     } catch (error) {

//       console.log(error);

//       res.status(500).json({
//         message:
//           error.message,
//       });

//     }
//   };