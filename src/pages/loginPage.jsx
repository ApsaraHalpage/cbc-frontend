import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function login() {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/api/users/login",
        {
          email : email,
          password : password
        }
      );

      localStorage.setItem("token", response.data.token);
      toast.success("Login successful");

      const user = response.data.user;

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Invalid email or password");
    }
  }

  return (
    <div className="w-full h-screen relative bg-[url('/background.jpg')] bg-cover bg-center flex">

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-[var(--color-accent)]/40"></div>

      {/* LEFT */}
      <div className="hidden md:flex w-1/2 h-full relative z-10 px-16 flex-col justify-center text-white">
        <div className="max-w-md">
          <h1 className="text-4xl font-semibold leading-tight text-center md:text-left-6">
            Glow on. <span className="text-[var(--color-accent)]">Shop on.</span>
          </h1>
          <p className="mt-4 text-white/80 text-sm text-center md:text-left-6"> 
            Sign in to explore exclusive beauty offers and track your orders.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 h-full flex justify-center items-center relative z-10 px-4">
        <div className="w-full max-w-[380px] p-8 backdrop-blur-xl bg-white/20 shadow-3xl rounded-3xl border border-white/30 flex flex-col gap-6">

          {/* Logo */}
          <div className="flex justify-center">
            <img src="/logo.png" alt="Crystal Beauty Clear" className="w-24" />
          </div>

          {/* Title */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-white">
              Welcome back to CBC
            </h2>
            <p className="text-xs text-white/80 mt-1">
              Log in to continue your beauty journey
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full h-[45px]   px-4 rounded-xl bg-white text-gray-800 border outline-none
                         focus:border-[var(--color-accent)]
                         focus:ring-2 focus:ring-[var(--color-accent)]/40"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 relative">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full h-[46px] px-4 pr-16 rounded-xl bg-white text-gray-800 border outline-none
                         focus:border-[var(--color-accent)]
                         focus:ring-2 focus:ring-[var(--color-accent)]/40"
            />

            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-4 top-9 text-xs text-gray-600 hover:text-[var(--color-accent)]"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Forgot */}
          <div className="text-right">
            <a href="#" className="text-xs text-accent/80 hover:text-white underline">
              Forgot password?
            </a>
          </div>

          {/* Login */}
          <button
            onClick={login}
            className="w-full h-[44px] rounded-xl bg-[var(--color-accent)] text-white font-medium
                       hover:opacity-90 active:scale-95 transition"
          >
            Login
          </button>

          {/* Register */}
          <p className="text-center text-sm text-white/80">
            Don’t have an account?{" "}
            <a href="#" className="text-accent font-medium underline">
              Create account
            </a>
          </p>

        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 w-full text-center text-[11px] text-white/60">
        © 2025 Crystal Beauty Clear — Elegance in Every Touch
      </footer>

    </div>
  );
}
