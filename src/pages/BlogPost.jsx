import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import blogCMS from '../lib/cms';

const { FiCalendar, FiUser, FiClock, FiArrowLeft, FiArrowRight, FiPhone, FiShare2, FiHeart } = FiIcons;

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const currentPost = blogCMS.getPostBySlug(slug);
    
    if (!currentPost) {
      navigate('/blog');
      return;
    }

    setPost(currentPost);
    
    // Get related posts
    const related = blogCMS.getRelatedPosts(currentPost.id, currentPost.category, 2);
    setRelatedPosts(related);
    
    setLoading(false);

    // Scroll to top
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pro HVAC Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prohvacservices.com/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://prohvacservices.com/blog/${post.slug}`
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.seo?.metaTitle || post.title} | Pro HVAC Services Blog</title>
        <meta name="description" content={post.seo?.metaDescription || post.excerpt} />
        <meta name="keywords" content={post.seo?.keywords?.join(', ') || post.tags.join(', ')} />
        <link rel="canonical" href={`https://prohvacservices.com/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://prohvacservices.com/blog/${post.slug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Article specific */}
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:modified_time" content={post.updatedAt} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center space-x-6 text-gray-300 mb-6">
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-sm text-gray-400">{post.author.bio}</div>
                </div>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiClock} className="w-5 h-5 mr-2" />
                {post.readTime}
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiShare2} className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  liked ? 'bg-red-500 hover:bg-red-600' : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                }`}
              >
                <SafeIcon icon={FiHeart} className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                <span>Like</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-primary max-w-none"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-start space-x-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">About {post.author.name}</h3>
                <p className="text-gray-600 leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Need Professional HVAC Service?</h3>
            <p className="text-primary-100 mb-6">
              If this article helped you identify an HVAC issue, don't wait for a complete breakdown. Our expert technicians are here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Schedule Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Link
                    key={index}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium mr-3">
                            {relatedPost.category}
                          </span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <div className="flex items-center text-primary-600 mt-4 group-hover:translate-x-2 transition-transform">
                          <span className="font-medium">Read Article</span>
                          <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPost;