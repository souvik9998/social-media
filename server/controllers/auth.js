import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import multer from "multer";
/* REGISTER USER */
// export const register = async (req, res) => {
//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       password,
//       picturePath,
//       friends,
//       location,
//       occupation,
//     } = req.body;

//     const salt = await bcrypt.genSalt();
//     const passwordHash = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password: passwordHash,
//       picturePath,
//       friends,
//       location,
//       occupation,
//       viewedProfile: Math.floor(Math.random() * 10000),
//       impressions: Math.floor(Math.random() * 10000),
//     });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

const singToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET);
};

const Storage = multer.diskStorage({
  destination: "public/assets", // productImages file is created
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname); //stored in binary format
  },
});

const upload = multer({
  storage: Storage,
}).single("profilePicture");

export const register = async (req, res, next) => {
  console.log(req.body);
  try {
    upload(req,res, async(err)=>{
      console.log(req.body);
      if (err) {
        console.log(err)
        res.send(err);
      }
      else{
        const {
          firstName,
          lastName,
          email,
          mobileNumber,
          password,
          confirmPassword,
          location,
        } = req.body;
    
        if(!email && !mobileNumber){
          res.status(400).json({msg:"please give email or mobile number"})
        }
        if(password !== confirmPassword){
          res.status(400).json({msg:"password did not match"})
        }
        else{
          const salt = await bcrypt.genSalt();
          const passwordHash = await bcrypt.hash(password, salt);
          const newUser = await User.create({
            firstName:firstName,
            lastName:lastName,
            email: email,
            mobileNumber: mobileNumber,
            password: passwordHash,
            profilePicture : {
              data : req.file.filename,
              contentType: req.body.mimetype,
            },
            location:location
          });
          const token = singToken(newUser._id);
          res.status(200).json({
            JWToken: token,
            status: "success",
            data: {
              user: newUser,
            },
          });
        }
      }
    })
  } catch(err){
    console.log(err);
    res.status(500).json({err : err.message});
    next(err);
  }
};



/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
