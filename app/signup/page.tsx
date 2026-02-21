import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock } from "lucide-react";

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center px-6 py-32">
        <div className="w-full max-w-md text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-gray-500" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">Registration Unavailable</h1>
          <p className="text-gray-600 mb-8">
            New account registration is currently unavailable. Please contact the administrator for access.
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            Back to Login
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
