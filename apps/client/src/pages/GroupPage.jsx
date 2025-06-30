"use client";

import { useState } from "react";
import {
  Hash,
  Pin,
  Plus,
  Users,
  Settings,
  Search,
  FileText,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const GroupPage = () => {
  const [activeChannel, setActiveChannel] = useState("general");

  const channels = [
    { id: "general", name: "general", type: "text", unread: 0 },
    { id: "resources", name: "resources", type: "text", unread: 3 },
    { id: "papers", name: "papers", type: "text", unread: 1 },
    { id: "announcements", name: "announcements", type: "text", unread: 0 },
    { id: "collaboration", name: "collaboration", type: "text", unread: 5 },
  ];

  const posts = [
    {
      id: 1,
      user: {
        name: "Dr. Sarah Chen",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        role: "Group Admin",
      },
      time: "1 hour ago",
      content:
        "Welcome everyone to our AI Research Collective! Please introduce yourselves and share what specific areas of AI you're working on. Looking forward to some great collaborations!",
      isPinned: true,
      replies: 8,
    },
    {
      id: 2,
      user: {
        name: "Prof. Michael Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        role: "Researcher",
      },
      time: "3 hours ago",
      content:
        "Has anyone worked with the new GPT-4 API for research applications? I'm particularly interested in its performance on scientific text analysis.",
      isPinned: false,
      replies: 12,
    },
    {
      id: 3,
      user: {
        name: "Dr. Emily Watson",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        role: "PhD Student",
      },
      time: "5 hours ago",
      content:
        "Sharing our latest paper on neural network interpretability. Would love feedback from the community before we submit to NeurIPS.",
      isPinned: false,
      replies: 6,
      hasAttachment: true,
    },
  ];

  const members = [
    { name: "Dr. Sarah Chen", role: "Admin", status: "online" },
    { name: "Prof. Michael Rodriguez", role: "Moderator", status: "online" },
    { name: "Dr. Emily Watson", role: "Member", status: "away" },
    { name: "Alex Thompson", role: "Member", status: "offline" },
    { name: "Dr. James Liu", role: "Member", status: "online" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        {/* Group Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">AI Research Collective</h2>
            <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-400">
            <Users className="w-4 h-4 mr-1" />
            <span>1,247 members</span>
          </div>
        </div>

        {/* Channels */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                Channels
              </h3>
              <Plus className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="space-y-1">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.id)}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded text-left ${
                    activeChannel === channel.id
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <Hash className="w-4 h-4 mr-2" />
                    <span className="text-sm">{channel.name}</span>
                  </div>
                  {channel.unread > 0 && (
                    <span className="bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
                      {channel.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">JD</span>
            </div>
            <div>
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-gray-400">PhD Student</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Channel Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Hash className="w-5 h-5 text-gray-500" />
              <h1 className="text-xl font-semibold text-gray-900">
                {activeChannel}
              </h1>
              <span className="text-sm text-gray-500">|</span>
              <span className="text-sm text-gray-500">
                General discussion and updates
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>New Post</span>
              </button>
              <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${
                  post.isPinned ? "border-orange-200 bg-orange-50" : ""
                }`}
              >
                {post.isPinned && (
                  <div className="flex items-center space-x-2 mb-3 text-orange-600">
                    <Pin className="w-4 h-4" />
                    <span className="text-sm font-medium">Pinned Post</span>
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <img
                    src={post.user.avatar || "/placeholder.svg"}
                    alt={post.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-gray-900">
                        {post.user.name}
                      </span>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {post.user.role}
                      </span>
                      <span className="text-sm text-gray-500">{post.time}</span>
                    </div>

                    <p className="text-gray-800 leading-relaxed mb-3">
                      {post.content}
                    </p>

                    {post.hasAttachment && (
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3 flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-gray-500" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            neural_interpretability_paper.pdf
                          </div>
                          <div className="text-xs text-gray-500">
                            2.3 MB • PDF
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.replies} replies</span>
                      </button>
                      <Link
                        to={`/paper/${post.id}`}
                        className="hover:text-orange-600"
                      >
                        View Thread
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Members Sidebar */}
      <div className="w-64 bg-white border-l border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">
            Members ({members.length})
          </h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {members.map((member, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                      member.status === "online"
                        ? "bg-green-400"
                        : member.status === "away"
                        ? "bg-yellow-400"
                        : "bg-gray-400"
                    }`}
                  ></div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {member.name}
                  </div>
                  <div className="text-xs text-gray-500">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
