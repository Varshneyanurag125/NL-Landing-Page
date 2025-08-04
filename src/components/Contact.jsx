"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorldMap } from './ui/world-map';

export default function Contact() {
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    fullName: '',
    email: '',
    projectDetails: '',
    attachment: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        service: '',
        budget: '',
        fullName: '',
        email: '',
        projectDetails: '',
        attachment: null
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const serviceOptions = ['Consulting', 'Consulting', 'Consulting', 'Consulting'];
  const budgetOptions = ['Less than $10K', '$10K - $50K', 'More than $50K'];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4 md:px-8 lg:px-16 relative overflow-hidden">
     
    </section>
  );
}
