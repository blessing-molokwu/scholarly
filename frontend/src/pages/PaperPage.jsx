"use client";

import { useState } from "react";
import {
  MessageCircle,
  Users,
  Clock,
  ChevronDown,
  ChevronRight,
  FileText,
  Download,
  Share2,
} from "lucide-react";

const PaperPage = () => {
  const [showComments, setShowComments] = useState(true);
  const [showCitations, setShowCitations] = useState(false);
  const [showVersions, setShowVersions] = useState(false);

  const comments = [
    {
      id: 1,
      user: {
        name: "Dr. Sarah Chen",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      },
      time: "2 hours ago",
      content:
        "Great work on the methodology section! I think the experimental design is solid. Have you considered adding a control group for the second experiment?",
      line: 45,
    },
    {
      id: 2,
      user: {
        name: "Prof. Michael Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      },
      time: "4 hours ago",
      content:
        "The statistical analysis looks comprehensive. Minor suggestion: consider using a different visualization for Figure 3 to make the trends more apparent.",
      line: 78,
    },
    {
      id: 3,
      user: {
        name: "Dr. Emily Watson",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      },
      time: "1 day ago",
      content:
        "This is exactly what our field needed! The implications for future research are significant. Would love to collaborate on a follow-up study.",
      line: 12,
    },
  ];

  const citations = [
    {
      id: 1,
      title: "Deep Learning for Scientific Discovery",
      authors: "Smith, J., Johnson, A., Brown, K.",
      journal: "Nature Machine Intelligence",
      year: 2023,
      doi: "10.1038/s42256-023-00123-4",
    },
    {
      id: 2,
      title: "Transformer Networks in Biological Sequence Analysis",
      authors: "Chen, L., Wang, M., Liu, X.",
      journal: "Bioinformatics",
      year: 2023,
      doi: "10.1093/bioinformatics/btab456",
    },
    {
      id: 3,
      title: "Attention Mechanisms for Scientific Text Processing",
      authors: "Rodriguez, P., Thompson, R.",
      journal: "ACL Proceedings",
      year: 2022,
      doi: "10.18653/v1/2022.acl-long.123",
    },
  ];

  const versions = [
    {
      version: "v3.0",
      date: "2024-01-15",
      author: "Dr. Sarah Chen",
      changes: "Added statistical analysis section, updated methodology",
      current: true,
    },
    {
      version: "v2.1",
      date: "2024-01-10",
      author: "Prof. Michael Rodriguez",
      changes: "Fixed citations, improved figure quality",
    },
    {
      version: "v2.0",
      date: "2024-01-05",
      author: "Dr. Emily Watson",
      changes: "Major revision: restructured paper, added new experiments",
    },
    {
      version: "v1.0",
      date: "2023-12-20",
      author: "Dr. Sarah Chen",
      changes: "Initial draft",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Document */}
      <div className="flex-1 bg-white">
        {/* Document Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Neural Network Optimization for Scientific Computing: A
                Comprehensive Analysis
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>3 collaborators</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Last updated 2 hours ago</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{comments.length} comments</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Document Content */}
        <div className="p-8 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>Abstract</h2>
            <p className="text-gray-700 leading-relaxed">
              This paper presents a comprehensive analysis of neural network
              optimization techniques specifically tailored for scientific
              computing applications. We introduce novel methodologies that
              improve convergence rates by 23% while maintaining numerical
              stability across diverse scientific domains.
            </p>

            <h2>1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Scientific computing has increasingly relied on neural networks
              for solving complex problems ranging from climate modeling to drug
              discovery. However, traditional optimization approaches often fail
              to account for the unique characteristics of scientific data and
              computational constraints.
            </p>

            <p className="text-gray-700 leading-relaxed">
              In this work, we address these limitations by developing
              specialized optimization algorithms that leverage domain-specific
              knowledge while maintaining generalizability across scientific
              disciplines. Our approach combines adaptive learning rates with
              physics-informed constraints to achieve superior performance.
            </p>

            <h2>2. Methodology</h2>
            <p className="text-gray-700 leading-relaxed">
              Our methodology consists of three main components: (1) adaptive
              optimization with scientific constraints, (2) multi-scale feature
              extraction, and (3) uncertainty quantification for scientific
              reliability.
            </p>

            <h3>2.1 Adaptive Optimization Framework</h3>
            <p className="text-gray-700 leading-relaxed">
              We propose an adaptive optimization framework that dynamically
              adjusts learning parameters based on the physical properties of
              the underlying scientific system. This approach ensures that the
              optimization process respects fundamental scientific principles
              such as conservation laws and symmetries.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="text-sm text-gray-600 mb-2">
                Figure 1: Optimization convergence comparison
              </p>
              <div className="h-64 bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                <span className="text-gray-500">
                  Chart visualization would appear here
                </span>
              </div>
            </div>

            <h2>3. Results</h2>
            <p className="text-gray-700 leading-relaxed">
              Our experimental evaluation demonstrates significant improvements
              across multiple scientific computing benchmarks. The proposed
              method achieves 23% faster convergence compared to standard
              optimization techniques while maintaining 99.7% accuracy.
            </p>

            <h2>4. Discussion</h2>
            <p className="text-gray-700 leading-relaxed">
              The results indicate that domain-specific optimization can
              substantially improve neural network performance in scientific
              applications. The key insight is that incorporating scientific
              knowledge into the optimization process leads to more efficient
              and reliable solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
        {/* Comments Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => setShowComments(!showComments)}
            className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">
                Comments ({comments.length})
              </span>
            </div>
            {showComments ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          {showComments && (
            <div className="max-h-96 overflow-y-auto">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 border-t border-gray-100">
                  <div className="flex items-start space-x-3">
                    <img
                      src={comment.user.avatar || "/placeholder.svg"}
                      alt={comment.user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-semibold text-gray-900">
                          {comment.user.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {comment.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {comment.content}
                      </p>
                      <div className="mt-2 text-xs text-blue-600">
                        Line {comment.line}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Citations Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => setShowCitations(!showCitations)}
            className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">
                Citations ({citations.length})
              </span>
            </div>
            {showCitations ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          {showCitations && (
            <div className="max-h-96 overflow-y-auto">
              {citations.map((citation) => (
                <div key={citation.id} className="p-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    {citation.title}
                  </h4>
                  <p className="text-xs text-gray-600 mb-1">
                    {citation.authors}
                  </p>
                  <p className="text-xs text-gray-500">
                    {citation.journal}, {citation.year}
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    DOI: {citation.doi}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Version History */}
        <div className="flex-1">
          <button
            onClick={() => setShowVersions(!showVersions)}
            className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">
                Version History
              </span>
            </div>
            {showVersions ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          {showVersions && (
            <div className="max-h-96 overflow-y-auto">
              {versions.map((version, index) => (
                <div
                  key={index}
                  className={`p-4 border-t border-gray-100 ${
                    version.current ? "bg-orange-50" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-sm font-semibold ${
                        version.current ? "text-orange-700" : "text-gray-900"
                      }`}
                    >
                      {version.version}
                    </span>
                    {version.current && (
                      <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{version.date}</p>
                  <p className="text-xs text-gray-600 mb-1">
                    by {version.author}
                  </p>
                  <p className="text-xs text-gray-500">{version.changes}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaperPage;
