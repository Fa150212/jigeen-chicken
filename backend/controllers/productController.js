
const Product = require(
  "../models/Product"
);

/* CREATE */

exports.createProduct =
  async (req, res) => {
    try {
      
      console.log(req.body);

      console.log(req.file);

      const {
        name,
        price,
        category,
        description,
      } = req.body;

      const image =
        req.file?.path;

      if (!image) {
        return res
          .status(400)
          .json({
            message:
              "Image requise",
          });
      }

      const product =
        await Product.create({
          name,
          price,
          category,
          image,
          description,
        });

      res.status(201).json(
        product
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

/* GET */

exports.getProducts =
  async (req, res) => {
    try {

      const products =
        await Product.find().sort({
          createdAt: -1,
        });

      res.json(products);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

/* DELETE */

exports.deleteProduct =
  async (req, res) => {
    try {

      await Product.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Produit supprimé",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

/* UPDATE */

exports.updateProduct =
  async (req, res) => {
    try {

      const product =
        await Product.findById(
          req.params.id
        );

      if (!product) {
        return res
          .status(404)
          .json({
            message:
              "Produit introuvable",
          });
      }

      product.name =
        req.body.name ||
        product.name;

      product.price =
        req.body.price ||
        product.price;

      product.category =
        req.body.category ||
        product.category;

      product.description =
        req.body.description ||
        product.description;

      if (req.file) {
        product.image =
          req.file.path;
      }

      const updated =
        await product.save();

      res.json(updated);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

// const Product = require("../models/Product");

// /* GET PRODUCTS */

// exports.getProducts = async (
//   req,
//   res
// ) => {
//   try {

//     const products =
//       await Product.find().sort({
//         createdAt: -1,
//       });

//     res.json(products);

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// /* CREATE PRODUCT */

// exports.createProduct = async (
//   req,
//   res
// ) => {
//   try {

//     const product =
//       await Product.create(req.body);

//     res.status(201).json(product);

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// /* UPDATE PRODUCT */

// exports.updateProduct = async (
//   req,
//   res
// ) => {
//   try {

//     const product =
//       await Product.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {
//           new: true,
//         }
//       );

//     res.json(product);

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// /* DELETE PRODUCT */

// exports.deleteProduct = async (
//   req,
//   res
// ) => {
//   try {

//     await Product.findByIdAndDelete(
//       req.params.id
//     );

//     res.json({
//       message:
//         "Produit supprimé",
//     });

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };