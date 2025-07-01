import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import cmsAdmin from '../../lib/cms-admin';

const { FiEdit, FiFileText, FiUsers, FiSettings, FiBarChart3, FiTrendingUp, FiEye, FiPlus } = FiIcons;

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    featuredPosts: 0
  });

  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    // Load CMS data
    cmsAdmin.loadFromLocalStorage();
    const posts = cmsAdmin.getAllPostsForAdmin();
    
    // Calculate stats
    const totalPosts = posts.length;
    const publishedPosts = posts.filter(post => post.status === 'published').length;
    const draftPosts = posts.filter(post => post.status === 'draft').length;
    const featuredPosts = posts.filter(post => post.featured).length;

    setStats({
      totalPosts,
      publishedPosts,
      draftPosts,
      featuredPosts
    });

    // Get recent posts (last 5)
    setRecentPosts(posts.slice(0, 5));
  }, []);

  const quickActions = [
    {
      title: 'Blog Management',
      description: 'Create, edit, and manage blog posts',
      icon: FiFileText,
      link: '/admin/cms',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'SEO Settings',
      description: 'Manage meta tags and structured data',
      icon: FiBarChart3,
      link: '/admin/seo',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Site Analytics',
      description: 'View website performance metrics',
      icon: FiTrendingUp,
      link: '/admin/analytics',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Settings',
      description: 'Configure site settings and preferences',
      icon: FiSettings,
      link: '/admin/settings',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const statCards = [
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      icon: FiFileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Published',
      value: stats.publishedPosts,
      icon: FiEye,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Drafts',
      value: stats.draftPosts,
      icon: FiEdit,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Featured',
      value: stats.featuredPosts,
      icon: FiUsers,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Pro HVAC Services</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Admin Dashboard</h1>
          <p className="text-gray-600">Manage your HVAC website content and settings</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {statCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                  <SafeIcon icon={stat.icon} className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${action.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mr-4`}>
                        <SafeIcon icon={action.icon} className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {action.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{action.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Recent Posts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Posts</h2>
                <Link
                  to="/admin/cms"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  View All
                </Link>
              </div>

              {recentPosts.length > 0 ? (
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {post.category} • {post.status}
                        </p>
                        <p className="text-xs text-gray-400">
                          {new Date(post.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <SafeIcon icon={FiFileText} className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 mb-4">No posts yet</p>
                  <Link
                    to="/admin/cms"
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
                  >
                    <SafeIcon icon={FiPlus} className="w-4 h-4 mr-2" />
                    Create First Post
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">System Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">CMS Online</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">Blog System Active</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">SEO Optimized</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Dashboard;