import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()){
    return next();
  }
  res.status(400).json({
    errors: errors.array(),
  })
}

export const registerValidator = [
  body("username").isString().withMessage("username should be string"),
  body("email").isEmail().withMessage("invalid email format"),
  // body("password").isLength({ min: 6, max: 20 }).withMessage("password should be at least 6 characters long"), 
  // body("userId").isMongoId().withMessage("not mongo id format"),
  body("password").custom((value)=>{
    if(value.length < 6 || value.length > 20){
      throw new Error("password should be at least 6 characters long and at most 20 characters long")
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
    if (!passwordRegex.test(value)) {
      throw new Error("password should contain at least one letter and one number");
    }
    return true;
  }),

  validate
]
