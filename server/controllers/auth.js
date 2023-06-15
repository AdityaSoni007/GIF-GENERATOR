




exports.signup = async (req, res) => {
	try {

		// Destructure fields from the request body
		const {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			otp,
		} = req.body;


		// Check if All Details are there or not
		if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}


		// Check if password and confirm password match
		if (password !== confirmPassword) {
			return res.status(400).json({
				success: false,
				message:
					"Password and Confirm Password do not match. Please try again.",
			});
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
		}

		// Find the most recent OTP for the email
		const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
		console.log(response);
		if (response.length === 0) {
			// OTP not found for the email
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		} else if (otp !== response[0].otp) {
			// Invalid OTP
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		}

		// Hash the password
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