import { Link } from "react-router-dom";
import Button from "../../shared/components/Button/Button";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-20">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to the application
        </h1>

        <p className="mt-4 text-base text-gray-600">
          Register a new account or sign in to continue.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>

          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
