import { Link } from "react-router-dom";
import Button from "../../shared/components/Button/Button";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <section className="text-center">
        <p className="text-sm font-semibold text-blue-600">404</p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Page not found
        </h1>

        <p className="mt-3 text-sm text-gray-600">
          The page you are looking for does not exist.
        </p>

        <div className="mt-6">
          <Link to="/">
            <Button>Go home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
