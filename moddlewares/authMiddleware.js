import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// export const requireSignIn = async (req, res, next) => {
//   try {
//     const decode = JWT.verify(
//       req.headers.authorization,
//       process.env.JWT_SECRET
//     );
//     // const decode = JWT.verify(req.headers.authorization);
//     console.log(process.env.JWT_SECRET);
//     req.user = decode;
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

import jwt from "jsonwebtoken";

export const requireSignIn = async (req, res, next) => {
  try {
    // Check if the Authorization header is present
    if (!req.headers.authorization) {
      return res.status(401).json({message: "Authorization header missing"});
    }

    // Extract the token from the Authorization header
    const token = req.headers.authorization.replace("Bearer ", "");

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user information to the request object
    req.user = decodedToken;

    next();
  } catch (error) {
    // Handle JWT verification errors
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({message: "Invalid token"});
    }

    // Handle other errors
    console.error("Error in requireSignIn middleware:", error);
    return res.status(500).json({message: "Internal server error"});
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res
        .status(401)
        .send({success: false, message: "UnAuthorized Access"});
    } else {
      next();
    }
  } catch (error) {
    res
      .status(401)
      .send({message: false, error, message: "Error In middleware"});
  }
};
