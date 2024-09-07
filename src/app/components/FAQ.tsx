'use client'
import { useState } from 'react';

const faqs = [
    {
        question: "What is a social media app?",
        answer: "A social media app is a platform that enables users to create, share, and interact with content and connect with others online."
      },
      {
        question: "What are the most popular social media apps?",
        answer: "The most popular social media apps include Facebook, Instagram, Twitter, TikTok, Snapchat, and LinkedIn."
      },
      {
        question: "How do I create an account on a social media app?",
        answer: "To create an account, download the app, click on 'Sign Up' or 'Create Account,' and follow the steps to provide your details such as name, email, or phone number."
      },
      {
        question: "Is my data safe on social media apps?",
        answer: "Social media apps have privacy policies and security measures in place, but it is important to review their privacy settings and avoid sharing sensitive information."
      },
      {
        question: "How can I increase my followers on social media?",
        answer: "You can increase your followers by consistently posting engaging content, using relevant hashtags, collaborating with influencers, and interacting with your audience."
      },
      {
        question: "What should I do if my social media account is hacked?",
        answer: "If your account is hacked, immediately change your password, enable two-factor authentication, and contact the platform's support team for help."
      },
      {
        question: "Can I delete my social media account permanently?",
        answer: "Yes, most social media apps provide the option to permanently delete your account. Check the app’s settings or help center for instructions on account deletion."
      },
      {
        question: "How do I report inappropriate content on social media?",
        answer: "Most social media apps have a 'Report' or 'Flag' option next to the content. Use it to report any inappropriate or abusive posts."
      },
      {
        question: "Why do social media apps show ads?",
        answer: "Social media apps show ads as a way to generate revenue. The ads are often targeted based on user activity and preferences."
      },
      {
        question: "How can I protect my privacy on social media?",
        answer: "To protect your privacy, use strong passwords, enable two-factor authentication, limit the information you share, and review your privacy settings regularly."
      }
    ];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null); // To keep track of which FAQ is open

  const toggleFAQ = (index : any) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between opening and closing FAQ
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-3xl text-blue-900 font-bold text-center mb-8">Frequently Asked Questions</h2>
 <p className='text-center font-serif text-md'>   {`  Quick answers to quwestion you may have can't find what are you looking for?`}</p>
    <p className='text-center font-serif text-md'> Check out our full documentation  </p>  
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-blue-400  bg-blue-50 rounded-lg p-4 mt-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between text-blue-500 font-serif  items-center w-full text-left text-lg font-medium focus:outline-none"
            >
              {faq.question}
              <span className="ml-2">
                {openIndex === index ? '-' : '+'} {/* Change icon based on open/closed state */}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-blue-500 font-serif">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
