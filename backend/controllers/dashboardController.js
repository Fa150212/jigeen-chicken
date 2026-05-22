
const User = require("../models/User");
const Product = require("../models/Product");
const Visitor = require("../models/Visitor");

exports.getDashboardStats =
  async (req, res) => {

    try {

      // ADMINS
      const totalAdmins =
        await User.countDocuments({
          role: "admin",
        });

      // CLIENTS
      const totalClients =
        await User.countDocuments({
          role: "client",
        });

      // PRODUCTS
      const totalProducts =
        await Product.countDocuments();

      // VISITORS
      const totalVisitors =
        await Visitor.countDocuments();

      res.status(200).json({
        totalAdmins,
        totalClients,
        totalProducts,
        totalVisitors,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  };

// // const User = require("../models/User");

// // const Product = require("../models/Product");

// // const Visitor = require("../models/Visitor");

// // exports.getDashboardStats =
// //   async (req, res) => {

// //     try {

// //       const totalUsers =
// //         await User.countDocuments({
// //           role: "client",
// //         });

// //       const totalAdmins =
// //         await User.countDocuments({
// //           role: "admin",
// //         });

// //       const totalProducts =
// //         await Product.countDocuments();

// //       const totalVisitors =
// //         await Visitor.countDocuments();

// //       res.status(200).json({
// //         totalUsers,
// //         totalAdmins,
// //         totalProducts,
// //         totalVisitors,
// //       });

// //     } catch (error) {

// //       res.status(500).json({
// //         message: error.message,
// //       });

// //     }
// //   };

// const User = require("../models/User");

// const Product = require("../models/Product");

// const Visitor = require("../models/Visitor");

// /* =========================
//    DASHBOARD STATS
// ========================= */

// exports.getDashboardStats =
//   async (req, res) => {

//     try {

//       /* TOTAL USERS */
//       const totalUsers =
//         await User.countDocuments();

//       /* TOTAL PRODUCTS */
//       const totalProducts =
//         await Product.countDocuments();

//       /* TOTAL VISITORS */
//       const totalVisitors =
//         await Visitor.countDocuments();

//       res.status(200).json({
//         totalUsers,
//         totalProducts,
//         totalVisitors,
//       });

//     } catch (error) {

//       console.log(error);

//       res.status(500).json({
//         message: error.message,
//       });

//     }
//   };