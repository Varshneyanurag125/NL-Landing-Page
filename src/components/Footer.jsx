"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { Button } from '@/components/ui/stateful-button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleNewsletterSubscribe = async () => {
    if (!email || !email.includes('@')) {
      throw new Error('Please enter a valid email address');
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset email on success
    setEmail('');
    return true;
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Contact Us", href: "#" }
    ],
    products: [
      { name: "Ayrton Simulation", href: "/ayrton" },
    ],
    resources: [
      { name: "Community", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { 
      id: 1,
      name: "Twitter",
      designation: "Follow us on X",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzE4MTgxOCIvPgo8cGF0aCBkPSJNMjcuMjQ0IDEyLjI1aDMuMzA4bC03LjIyNyA4LjI2IDguNTAyIDExLjI0SDE5LjE3bC01LjIxNC02LjgxN0w3Ljk5IDMxLjc1SDQuNjhsNy43My04LjgzNUw0LjI1NCAxMi4yNUgxMS4wOGw0LjcxMyA2LjIzMXptLTEuMTYxIDE3LjUyaDEuODMzTDEwLjA4NCAxNC4xMjZIOC4xMTd6IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
      href: "#"
    },
    { 
      id: 2,
      name: "LinkedIn",
      designation: "Connect with us",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzE4MTgxOCIvPgo8cGF0aCBkPSJNMzAuNDQ3IDMwLjQ1MmgtMy41NTR2LTUuNTY5YzAtMS4zMjgtLjAyNy0zLjAzNy0xLjg1Mi0zLjAzNy0xLjg1MyAwLTIuMTM2IDEuNDQ1LTIuMTM2IDIuOTM5djUuNjY3SDE5LjM1MVYxOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek0xNS4zMzcgMTcuNDMzYy0xLjE0NCAwLTIuMDYzLS45MjYtMi4wNjMtMi4wNjUgMC0xLjEzOC45Mi0yLjA2MyAyLjA2My0yLjA2MyAxLjE0IDAgMi4wNjQuOTI1IDIuMDY0IDIuMDYzIDAgMS4xMzktLjkyNSAyLjA2NS0yLjA2NCAyLjA2NXptMS43ODIgMTMuMDE5SDEzLjU1NVYxOWgzLjU2NHYxMS40NTJ6TTMyLjIyNSAxMEgxMS43NzFDMTAuNzkyIDEwIDEwIDEwLjc3NCAxMCAxMS43Mjl2MjAuNTQyQzEwIDMzLjIyNyAxMC43OTIgMzQgMTEuNzcxIDM0aDIwLjQ1MUMzMy4yIDM0IDM0IDMzLjIyNyAzNCAzMi4yNzFWMTEuNzI5QzM0IDEwLjc3NCAzMy4yIDEwIDMyLjIyMiAxMGguMDAzeiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
      href: "#"
    },
    { 
      id: 3,
      name: "GitHub",
      designation: "View our code",
         image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzE4MTgxOCIvPgo8cGF0aCBkPSJNMjIgMTBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
      href: "#"
    },
    { 
      id: 4,
      name: "Email",
      designation: "Contact us",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzE4MTgxOCIvPgo8cGF0aCBkPSJNMzQgMTUuNDU3djEzLjkwOWMwIC45MDQtLjczMiAxLjYzNi0xLjYzNiAxLjYzNmgtMy44MTlWMjEuNzNMMjIgMjYuNjRsLTYuNTQ1LTQuOTF2OS4yNzNIOS42MzZBMS42MzYgMS42MzYgMCAwIDEgOCAyOS4zNjZWMTUuNDU3YzAtLjkwNC43MzItMS42MzYgMS42MzYtMS42MzZoLjgzMkwyMiAyMS4zNjdsOS41MzItNy41NDZoLjgzMmMuOTA0IDAgMS42MzYuNzMyIDEuNjM2IDEuNjM2eiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
      href: "mailto:contact@noether.com"
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Noether Labs
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                Revolutionizing engineering simulation with AI-powered cloud solutions. 
                From concept to results in three simple steps.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-2">
                <AnimatedTooltip items={socialLinks} />
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates on simulation technology and engineering innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
              <Button 
                onClick={handleNewsletterSubscribe}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:ring-blue-500"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Noether Labs. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Made with ❤️ for engineers</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
