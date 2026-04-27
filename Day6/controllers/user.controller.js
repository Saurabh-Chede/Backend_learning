export const Profile = (req, res) => {
  res.status(200).json({
    success: true,
    message: "User profile data fetched successfully",
    data: {
      name: "Saurabh",
    },
  });
};

export const Cart = (req, res) => {
  res.status(200).json({
    success: true,
    message: "User cart data fetched successfully",
    data: [],
  });
};

export const Orders = (req, res) => {
  res.status(200).json({
    success: true,
    message: "User orders data fetched successfully",
    data: [],
  });
};