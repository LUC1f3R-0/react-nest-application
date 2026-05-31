import type { FormEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../shared/components/Button/Button";
import Alert from "../../../shared/components/Alert/Alert";
import { registerUser } from "../api/authApi";
import type { RegisterInput } from "../types/auth.types";

type RegisterFormFields = RegisterInput & {
  passwordConfirmation: string;
};

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getFormData = (form: HTMLFormElement): RegisterFormFields => {
    const formData = new FormData(form);

    return {
      name: String(formData.get("name") ?? "").trim(),
      username: String(formData.get("username") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim().toLowerCase(),
      password: String(formData.get("password") ?? ""),
      passwordConfirmation: String(
        formData.get("passwordConfirmation") ?? "",
      ),
    };
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const form = event.currentTarget;
      const formValues = getFormData(form);

      if (formValues.password !== formValues.passwordConfirmation) {
        throw new Error("Passwords do not match");
      }

      const result = await registerUser({
        name: formValues.name,
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      });

      setSuccessMessage(result.message);
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Registration failed",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          Create a new account
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Login
          </Link>
        </p>
      </div>

      <div className="mx-auto mt-8 w-full max-w-md">
        <div className="rounded-lg bg-white px-4 py-8 shadow sm:px-10">
          <div className="space-y-4">
            {successMessage && (
              <Alert type="success" message={successMessage} />
            )}

            {errorMessage && <Alert type="error" message={errorMessage} />}
          </div>

          <form onSubmit={handleFormSubmit} className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                placeholder="John Doe"
                type="text"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>

              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                  iworkedon.com/
                </span>

                <input
                  id="username"
                  name="username"
                  placeholder="john"
                  type="text"
                  required
                  className="block w-full flex-1 rounded-r-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

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
                placeholder="user@example.com"
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                minLength={8}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="passwordConfirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm password
              </label>

              <input
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                required
                minLength={8}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
