import UserModel from "../models/user.schema.js"
import CartModel from '../models/cart.schema.js'

export const Profile = (req, res) => {
  try {
    const userId = req.userId;
    const userData = req.userData;
    console.log(userId, "userId");
    console.log(userData, "userData");
    userData.password = req.userPassword;
    return res.status(200).json({ success: true, profileData: userData });
    res.send(true);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating profile", error: error.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.userId;
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }
    const existingCart = await CartModel.findOne({ user: userId });
    if (existingCart) {
      existingCart.products.push(productId);
      await existingCart.save();
      return res.status(200).json({
        message: "Product added to cart",
        cart: existingCart,
        success: true,
      });
    } else {
      const newCart = new CartModel({
        user: userId,
        products: [productId],
      });
      await newCart.save();
      return res.status(200).json({
        message: "Product added to cart",
        cart: newCart,
        success: true,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating profile", error: error.message });
  }
};

export const getCartProduct = async (req, res) => {
  try {
    const userId = req.userId;
    const userProductsData = await CartModel.findOne({ user: userId }).populate(
      "products",
    );
    return res.status(200).json({ success: true, userProductsData });
  } catch (error) {
    console.log(error, "error");
    return res
      .status(500)
      .json({ message: "Error updating profile", error: error.message });
  }
};

export const Orders = (req, res) => {
  res.status(200).json({
    success: true,
    message: "User orders data fetched successfully",
    data: [],
  });
};

export const UpdateProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    const { name, email, password } = req.body;

    const userData = {};

    if (name) userData.name = name;
    if (email) userData.email = email;
    if (password) userData.password = password;

    // console.log(userData, "userData");

    const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, {
      new: true,
    });
    return res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating profile", error: error.message });
  }
};


export const DeleteProfile = async (req, res) => {
  try {
    const userId = req.params.userId;

    // 1. Validate userId
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    // 2. Find and delete user
    const deletedUser = await UserModel.findByIdAndDelete(userId);

    // 3. Check if user exists
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // 4. Success response
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting profile",
      error: error.message,
    });
  }
};