import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import blogCMS from '../lib/cms';

const { FiCalendar, FiUser, FiArrowRight, FiBookOpen, FiSearch } = FiIcons;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load initial data
    setCategories(blogCMS.getCategories());
    setFeaturedPosts(blogCMS.getFeaturedPosts());
    loadPosts();
  }, [selectedCategory]);

  const loadPosts = () => {
    setIsLoading(true);
    const allPosts = blogCMS.getAllPosts({ 
      category: selectedCategory,
      limit: 12 
    });
    setPosts(allPosts);
    setIsLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchResults = blogCMS.searchPosts(searchQuery);
      setPosts(searchResults);
      setSelectedCategory('All');
    } else {
      loadPosts();
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Helmet>
        <title>HVAC Blog | Expert Tips, Maintenance Guides & Industry Insights</title>
        <meta name="description" content="Expert HVAC advice, maintenance tips, energy-saving guides, and industry insights from professional technicians. Stay informed about heating and cooling best practices." />
        <meta name="keywords" content="HVAC blog, heating tips, cooling advice, HVAC maintenance, energy efficiency, air quality, HVAC guides" />
        <link rel="canonical" href="https://prohvacservices.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Pro HVAC Services Blog",
            "description": "Expert HVAC advice and industry insights",
            "url": "https://prohvacservices.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Pro HVAC Services",
              "url": "https://prohvacservices.com"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiBookOpen} className="w-12 h-12 text-yellow-400 mr-4" />
              <h1 className="text-4xl lg:text-6xl font-bold">HVAC Blog</h1>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Expert advice, maintenance tips, and industry insights from professional HVAC technicians to keep your systems running efficiently.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="relative">
                <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded hover:bg-primary-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-primary-100 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === 'All' && !searchQuery && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                        <div className="flex items-center">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full mr-2"
                          />
                          {post.author.name}
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                      >
                        Read Full Article
                        <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {searchQuery ? `Search Results for "${searchQuery}"` : 
               selectedCategory === 'All' ? 'Recent Articles' : `${selectedCategory} Articles`}
            </h2>
            
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading articles...</p>
              </div>
            ) : posts.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                        <div className="flex items-center">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-5 h-5 rounded-full mr-1"
                          />
                          {post.author.name}
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                        >
                          Read More
                          <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">
                  {searchQuery ? 'No articles found for your search.' : 'No articles available in this category.'}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    loadPosts();
                  }}
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  View All Articles
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated with HVAC Tips</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest HVAC tips, maintenance reminders, and industry insights delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex space-x-4 mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              <button className="bg-yellow-400 text-primary-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;