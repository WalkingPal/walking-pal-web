import axios from "axios";

export default async function isReCaptchaValid(captcha: string) {
	try {
		// Ping the google recaptcha verify API to verify the received captcha code
		const response = await axios.post(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
			null,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
				},
			},
		);

		const captchaValidation = response.data;
		console.log(captchaValidation);
		/**
       * The structure of response from the veirfy API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
       */
		if (captchaValidation.success) return true;
		return false;
	} catch (error) {
		console.log(error);
		// "ReCaptcha Verification failed. Something went wrong"
		return false;
	}
}
