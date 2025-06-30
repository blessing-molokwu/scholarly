import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  MessageCircle,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">RH</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                ResearchHub
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/feed" className="text-gray-600 hover:text-gray-900">
                Sign In
              </Link>
              <Link
                to="/feed"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Collaborate. Research.{" "}
              <span className="text-orange-500">Discover.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the premier platform where students and researchers
              collaborate on groundbreaking projects, share knowledge, and
              accelerate scientific discovery together.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/feed"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center space-x-2"
              >
                <span>Start Collaborating</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose ResearchHub?
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for collaborative research in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Research Groups
              </h3>
              <p className="text-gray-600">
                Join specialized groups and collaborate with researchers in your
                field
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Collaborative Papers
              </h3>
              <p className="text-gray-600">
                Co-author papers with real-time editing and version control
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Smart Discussions
              </h3>
              <p className="text-gray-600">
                Engage in meaningful academic discussions with peer review
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Impact Tracking
              </h3>
              <p className="text-gray-600">
                Track citations, collaborations, and research impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Accelerate Your Research Journey
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Find Perfect Collaborators
                    </h3>
                    <p className="text-gray-600">
                      Connect with researchers who share your interests and
                      expertise
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Streamlined Workflow
                    </h3>
                    <p className="text-gray-600">
                      From ideation to publication, manage your entire research
                      process
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Quality Peer Review
                    </h3>
                    <p className="text-gray-600">
                      Get constructive feedback from experts in your field
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  10,000+
                </h3>
                <p className="text-gray-600 mb-4">Active Researchers</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-900">500+</div>
                    <div className="text-gray-600">Research Groups</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">2,000+</div>
                    <div className="text-gray-600">Published Papers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of researchers already collaborating on ResearchHub
          </p>
          <Link
            to="/feed"
            className="bg-white hover:bg-gray-100 text-orange-500 px-8 py-3 rounded-lg text-lg font-semibold inline-flex items-center space-x-2"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
