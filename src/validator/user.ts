import { body } from "express-validator";

export const checkRefreshToken = () => [
  body("refreshToken")
    .notEmpty()
    .withMessage("The value should not be empty")
    .isJWT()
    .withMessage("The value should be jwt"),
];

export const checkLogin = () => [
  body("email").notEmpty().withMessage("The value should not be empty"),
  body("password").notEmpty().withMessage("The value should not be empty"),
];

export const checkRegister = () => [
  body("email")
    .notEmpty()
    .withMessage("The value should not be empty")
    .normalizeEmail()
    .isEmail()
    .withMessage("The value should be an email"),
  body("password")
    .notEmpty()
    .withMessage("The value should not be empty")
    .isLength({ min: 6 })
    .withMessage("The value have at least 6 characters")
    .not()
    .isAlpha()
    .withMessage("The value should have 1 number")
    .not()
    .isNumeric()
    .withMessage("The value should have 1 letter")
    .not()
    .isUppercase()
    .withMessage("The value should have 1 lowercase letter")
    .not()
    .isLowercase()
    .withMessage("The value should have 1 uppercase letter"),
];
