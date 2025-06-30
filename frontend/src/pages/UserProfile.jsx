"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  FileText,
  Activity,
  Mail,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const user = {
    name: "Dr. Sarah Chen",
    title: "Assistant Professor of Computer Science",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    joinDate: "January 2022",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face",
    bio: "Passionate researcher in artificial intelligence and machine learning with focus on scientific computing applications. Currently working on neural network optimization for climate modeling and drug discovery.",
    email: "sarah.chen@mit.edu",
    website: "https://sarahchen.mit.edu",
    stats: {
      papers: 23,
      collaborations: 45,
      citations: 1247,
      groups: 8,
    },
  };

  const groups = [
    {
      id: 1,
      name: "AI Research Collective",
      members: 1247,
      role: "Admin",
      avatar: "AI",
    },
    {
      id: 2,
      name: "Climate Computing Lab",
      members: 456,
      role: "Member",
      avatar: "CC",
    },
    {
      id: 3,
      name: "Neural Networks Hub",
      members: 892,
      role: "Moderator",
      avatar: "NN",
    },
    {
      id: 4,
      name: "Scientific ML",
      members: 634,
      role: "Member",
      avatar: "ML",
    },
  ];

  const papers = [
    {
      id: 1,
      title: "Neural Network Optimization for Scientific Computing",
      coAuthors: ["Prof. Michael Rodriguez", "Dr. Emily Watson"],
      status: "Published",
      journal: "Nature Machine Intelligence",
      date: "2024-01-15",
      citations: 23,
    },
    {
      id: 2,
      title: "Climate Modeling with Deep Learning Approaches",
      coAuthors: ["Dr. James Liu", "Prof. Anna Martinez"],
      status: "Under Review",
      journal: "Science",
      date: "2023-12-10",
      citations: 0,
    },
    {
      id: 3,
      title: "Transformer Networks for Biological Sequence Analysis",
      coAuthors: ["Dr. Kevin Park"],
      status: "Published",
      journal: "Bioinformatics",
      date: "2023-11-22",
      citations: 67,
    },
  ];

  const activities = [
    {
      id: 1,
      type: "paper",
      action: "Published new paper",
      target: "Neural Network Optimization for Scientific Computing",
      time: "2 days ago",
    },
    {
      id: 2,
      type: "comment",
      action: "Commented on",
      target: "Climate Change Discussion in AI Research Collective",
      time: "1 week ago",
    },
    {
      id: 3,
      type: "collaboration",
      action: "Started collaboration with",
      target: "Prof. Michael Rodriguez on quantum computing project",
      time: "2 weeks ago",
    },
    {
      id: 4,
      type: "group",
      action: "Joined group",
      target: "Scientific ML",
      time: "3 weeks ago",
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "papers", label: "Papers" },
    { id: "groups", label: "Groups" },
    { id: "activity", label: "Activity" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {/* Avatar and Basic Info */}
            <div className="text-center mb-6">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h1 className="text-xl font-bold text-gray-900 mb-1">
                {user.name}
              </h1>
              <p className="text-gray-600 mb-2">{user.title}</p>
              <p className="text-sm text-gray-500 mb-4">{user.institution}</p>

              <div className="flex justify-center space-x-3">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                  Connect
                </button>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg">
                  Message
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {user.stats.papers}
                </div>
                <div className="text-sm text-gray-500">Papers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {user.stats.citations}
                </div>
                <div className="text-sm text-gray-500">Citations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {user.stats.collaborations}
                </div>
                <div className="text-sm text-gray-500">Collaborations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {user.stats.groups}
                </div>
                <div className="text-sm text-gray-500">Groups</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Joined {user.joinDate}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${user.email}`}
                  className="hover:text-orange-600"
                >
                  {user.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <ExternalLink className="w-4 h-4" />
                <a
                  href={user.website}
                  className="hover:text-orange-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Personal Website
                </a>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {user.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? "border-orange-500 text-orange-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Recent Papers
                    </h3>
                    <div className="space-y-4">
                      {papers.slice(0, 2).map((paper) => (
                        <div
                          key={paper.id}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <Link
                                to={`/paper/${paper.id}`}
                                className="text-lg font-semibold text-gray-900 hover:text-orange-600"
                              >
                                {paper.title}
                              </Link>
                              <p className="text-sm text-gray-600 mt-1">
                                Co-authors: {paper.coAuthors.join(", ")}
                              </p>
                              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                <span>{paper.journal}</span>
                                <span>•</span>
                                <span>{paper.date}</span>
                                <span>•</span>
                                <span>{paper.citations} citations</span>
                              </div>
                            </div>
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                paper.status === "Published"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {paper.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Active Groups
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {groups.slice(0, 4).map((group) => (
                        <Link
                          key={group.id}
                          to={`/group/${group.id}`}
                          className="border border-gray-200 rounded-lg p-4 hover:border-orange-200 hover:bg-orange-50"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-semibold text-blue-600">
                                {group.avatar}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">
                                {group.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {group.members} members
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Papers Tab */}
              {activeTab === "papers" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      All Papers ({papers.length})
                    </h3>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                      New Paper
                    </button>
                  </div>
                  {papers.map((paper) => (
                    <div
                      key={paper.id}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Link
                            to={`/paper/${paper.id}`}
                            className="text-xl font-semibold text-gray-900 hover:text-orange-600"
                          >
                            {paper.title}
                          </Link>
                          <p className="text-gray-600 mt-2">
                            Co-authors: {paper.coAuthors.join(", ")}
                          </p>
                          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                            <span>{paper.journal}</span>
                            <span>•</span>
                            <span>{paper.date}</span>
                            <span>•</span>
                            <span>{paper.citations} citations</span>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 text-sm rounded-full ${
                            paper.status === "Published"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {paper.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Groups Tab */}
              {activeTab === "groups" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Groups ({groups.length})
                    </h3>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                      Join Group
                    </button>
                  </div>
                  <div className="grid gap-4">
                    {groups.map((group) => (
                      <div
                        key={group.id}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="font-semibold text-blue-600">
                                {group.avatar}
                              </span>
                            </div>
                            <div>
                              <Link
                                to={`/group/${group.id}`}
                                className="text-lg font-semibold text-gray-900 hover:text-orange-600"
                              >
                                {group.name}
                              </Link>
                              <p className="text-sm text-gray-500">
                                {group.members} members
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                group.role === "Admin"
                                  ? "bg-purple-100 text-purple-700"
                                  : group.role === "Moderator"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {group.role}
                            </span>
                            <Link
                              to={`/group/${group.id}`}
                              className="text-orange-600 hover:text-orange-700"
                            >
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Activity Tab */}
              {activeTab === "activity" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {activities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg"
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activity.type === "paper"
                              ? "bg-green-100"
                              : activity.type === "comment"
                              ? "bg-blue-100"
                              : activity.type === "collaboration"
                              ? "bg-purple-100"
                              : "bg-orange-100"
                          }`}
                        >
                          {activity.type === "paper" && (
                            <FileText className="w-5 h-5 text-green-600" />
                          )}
                          {activity.type === "comment" && (
                            <MessageCircle className="w-5 h-5 text-blue-600" />
                          )}
                          {activity.type === "collaboration" && (
                            <Users className="w-5 h-5 text-purple-600" />
                          )}
                          {activity.type === "group" && (
                            <Activity className="w-5 h-5 text-orange-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800">
                            <span className="font-medium">
                              {activity.action}
                            </span>{" "}
                            <span className="text-orange-600">
                              {activity.target}
                            </span>
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
