const bcrypt = require("bcrypt");
const User = require("../models/User");




exports.signup = async (req, res) => {
	try {

		
		const {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			otp,
		} = req.body;


		
		if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}


		
		if (password !== confirmPassword) {
			return res.status(400).json({
				success: false,
				message:
					"Password and Confirm Password do not match. Please try again.",
			});
		}

		
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
		}

		
		const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
		console.log(response);
		if (response.length === 0) {
			
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});


		} else if (otp !== response[0].otp) {
			
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		}

		
		const hashedPassword = await bcrypt.hash(password, 10);

		

	
		const user = await User.create({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});
        
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "User cannot be registered. Please try again.",
		});
	}
};