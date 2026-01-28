import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (!formData.username.trim())
      newErrors.username = "Username is required";

    if (!formData.email)
      newErrors.email = "Email is required";

    if (!passwordRegex.test(formData.password))
      newErrors.password =
        "Password must have capital letter, number, special char & min 6 length";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Registration successful!");
      navigate("/login");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          Register Account
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Register
        </button>

        <p className="text-center text-sm">
          Already registered?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
