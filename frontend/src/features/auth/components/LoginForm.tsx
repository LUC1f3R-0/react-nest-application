import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../../../shared/components/Button/Button";
import type { LoginInput } from "../types/auth.types";

const LoginForm = () => {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data: LoginInput = {
      email: String(formData.get("email") ?? "").trim().toLowerCase(),
      password: String(formData.get("password") ?? ""),
    };

    console.log("Login data:", data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h1>

        <p className="mt-2 text-center text-sm text-gray-600">
          No account?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Create an account
          </Link>
        </p>
      </div>

      <div className="mx-auto mt-8 w-full max-w-md">
        <div className="rounded-lg bg-white px-4 py-8 shadow sm:px-10">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email address"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <Button type="submit" fullWidth>
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
