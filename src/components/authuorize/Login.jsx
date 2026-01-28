import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/register");
      return;
    }

    if (
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", storedUser.username);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          Login to your account
        </h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Login
        </button>

        <p className="text-center text-sm">
          Not registered?{" "}
          <Link to="/register" className="text-indigo-600 font-semibold">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
}
