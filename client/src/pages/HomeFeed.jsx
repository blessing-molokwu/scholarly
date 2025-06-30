"use client";

import { useState } from "react";
import {
  MessageCircle,
  Heart,
  Share2,
  Bookmark,
  Filter,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeFeed = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const posts = [
    {
      id: 1,
      user: {
        name: "Dr. Sarah Chen",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        institution: "MIT",
      },
      group: "AI Research Collective",
      time: "2 hours ago",
      content:
        "Just published our latest findings on transformer architecture optimization. The results show a 23% improvement in training efficiency while maintaining accuracy. Would love to hear thoughts from the community!",
      tags: ["AI", "Machine Learning", "Transformers"],
      likes: 47,
      comments: 12,
      shares: 8,
      hasImage: true,
    },
    {
      id: 2,
      user: {
        name: "Prof. Michael Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        institution: "Stanford",
      },
      group: "Quantum Computing Hub",
      time: "4 hours ago",
      content:
        "Exciting breakthrough in quantum error correction! Our team has developed a new protocol that reduces error rates by 40%. Looking for collaborators to help scale this approach.",
      tags: ["Quantum Computing", "Physics"],
      likes: 89,
      comments: 23,
      shares: 15,
      hasImage: false,
    },
    {
      id: 3,
      user: {
        name: "Dr. Emily Watson",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        institution: "Harvard Medical",
      },
      group: "Biomedical Research Network",
      time: "6 hours ago",
      content:
        "Our CRISPR gene therapy trial has shown promising results in treating rare genetic disorders. The preliminary data suggests 85% efficacy rate. Full paper coming soon!",
      tags: ["Biology", "CRISPR", "Gene Therapy"],
      likes: 156,
      comments: 34,
      shares: 28,
      hasImage: true,
    },
  ];

  const filters = [
    { id: "all", label: "All Posts", count: 234 },
    { id: "ai", label: "AI", count: 89 },
    { id: "biology", label: "Biology", count: 67 },
    { id: "physics", label: "Physics", count: 45 },
    { id: "economics", label: "Economics", count: 33 },
  ];

  const trendingTopics = [
    { tag: "Machine Learning", posts: 156 },
    { tag: "Climate Change", posts: 89 },
    { tag: "CRISPR", posts: 67 },
    { tag: "Quantum Computing", posts: 45 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter by Topic
            </h3>
            <div className="space-y-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm flex justify-between items-center ${
                    activeFilter === filter.id
                      ? "bg-orange-100 text-orange-700"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span>{filter.label}</span>
                  <span className="text-xs text-gray-500">{filter.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trending Topics
            </h3>
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">#{topic.tag}</span>
                  <span className="text-xs text-gray-500">
                    {topic.posts} posts
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                {/* Post Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.user.avatar || "/placeholder.svg"}
                      alt={post.user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/profile/${post.id}`}
                          className="font-semibold text-gray-900 hover:text-orange-600"
                        >
                          {post.user.name}
                        </Link>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">
                          {post.user.institution}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Link
                          to={`/group/${post.id}`}
                          className="hover:text-orange-600"
                        >
                          {post.group}
                        </Link>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>
                  <Bookmark className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>

                {/* Post Content */}
                <div className="mb-4">
                  <p className="text-gray-800 leading-relaxed">
                    {post.content}
                  </p>
                  {post.hasImage && (
                    <div className="mt-3 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                      <span className="text-gray-500">
                        Research Image/Chart
                      </span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
                      <Share2 className="w-5 h-5" />
                      <span className="text-sm">{post.shares}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Your Groups</h3>
            <div className="space-y-3">
              <Link
                to="/group/1"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-600">
                    AI
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    AI Research
                  </div>
                  <div className="text-xs text-gray-500">1.2k members</div>
                </div>
              </Link>
              <Link
                to="/group/2"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-green-600">
                    BIO
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Biomedical
                  </div>
                  <div className="text-xs text-gray-500">856 members</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">
              Recent Activity
            </h3>
            <div className="space-y-3 text-sm">
              <div className="text-gray-600">
                <span className="font-medium">Dr. Smith</span> commented on your
                paper
              </div>
              <div className="text-gray-600">
                <span className="font-medium">3 new members</span> joined AI
                Research
              </div>
              <div className="text-gray-600">
                <span className="font-medium">Paper review</span> completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
