import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout/layout";
import { useState } from "react";
import { createAccount } from "../redux/slices/authSlices";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault(); // It prevents the default form submission behavior
    // Form Validations
    // if (
    //   !formData.firstName ||
    //   !formData.lastName ||
    //   !formData.email ||
    //   !formData.password
    // ) {
    //   toast.error("Every fields are required!");
    // }

    const apiResponse = await dispatch(createAccount(formData));
    console.log("Res from backend", apiResponse)
    if (apiResponse?.payload?.success) {
      navigate("/login");
    }
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
            Create Your TaskNest Account
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white py-2 rounded-md hover:opacity-90 transition font-medium"
            >
              Sign Up
            </button>
          </form>

          {/* Already have account */}
          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-teal-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
