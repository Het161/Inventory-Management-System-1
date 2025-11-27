'use client'

import { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Mail, Phone, X, Send, Book, Video, FileText } from 'lucide-react'

export default function HelpPage() {
  const [showChatModal, setShowChatModal] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { sender: 'support', text: 'Hello! How can I help you today?' }
  ])
  const [newMessage, setNewMessage] = useState('')
  const [emailForm, setEmailForm] = useState({
    subject: '',
    message: ''
  })

  const handleStartChat = () => {
    setShowChatModal(true)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return
    
    setChatMessages([...chatMessages, { sender: 'user', text: newMessage }])
    setNewMessage('')
    
    // Simulate support response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        sender: 'support', 
        text: 'Thanks for your message! Our team will assist you shortly.' 
      }])
    }, 1000)
  }

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    alert('✅ Email sent successfully! We will respond within 24 hours.')
    setShowEmailModal(false)
    setEmailForm({ subject: '', message: '' })
  }

  const handleCallNow = () => {
    if (confirm('Call +880 1234-567890?')) {
      window.location.href = 'tel:+8801234567890'
    }
  }

  return (
    <MainLayout title="Help & Support" subtitle="Get assistance and find answers to your questions">
      
      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-8 border border-gray-200 text-center"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-gray-600 mb-6">Chat with our support team</p>
          <button
            onClick={handleStartChat}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Chat
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-8 border border-gray-200 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
          <p className="text-gray-600 mb-6">support@webyourvyavsay.com</p>
          <button
            onClick={() => setShowEmailModal(true)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Send Email
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-8 border border-gray-200 text-center"
        >
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
          <p className="text-gray-600 mb-6">+880 1234-567890</p>
          <button
            onClick={handleCallNow}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Call Now
          </button>
        </motion.div>
      </div>

      {/* Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-6 border border-gray-200"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-600 cursor-pointer transition-colors">
            <Book className="w-6 h-6 text-indigo-600 mb-2" />
            <h4 className="font-semibold text-gray-900 mb-1">Documentation</h4>
            <p className="text-sm text-gray-600">Complete guide to using the system</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-600 cursor-pointer transition-colors">
            <Video className="w-6 h-6 text-indigo-600 mb-2" />
            <h4 className="font-semibold text-gray-900 mb-1">Video Tutorials</h4>
            <p className="text-sm text-gray-600">Watch step-by-step tutorials</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-600 cursor-pointer transition-colors">
            <FileText className="w-6 h-6 text-indigo-600 mb-2" />
            <h4 className="font-semibold text-gray-900 mb-1">FAQs</h4>
            <p className="text-sm text-gray-600">Find answers to common questions</p>
          </div>
        </div>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {showChatModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowChatModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-0 right-0 m-4 md:m-8 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col">
                <div className="bg-indigo-600 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    <h3 className="font-bold">Live Chat Support</h3>
                  </div>
                  <button onClick={() => setShowChatModal(false)} className="p-1 hover:bg-indigo-700 rounded">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] px-4 py-2 rounded-lg ${
                        msg.sender === 'user' 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Email Modal */}
      <AnimatePresence>
        {showEmailModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEmailModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setShowEmailModal(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <h3 className="font-bold">Send Email</h3>
                  </div>
                  <button onClick={() => setShowEmailModal(false)} className="p-1 hover:bg-green-700 rounded">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSendEmail} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={emailForm.subject}
                      onChange={(e) => setEmailForm({...emailForm, subject: e.target.value})}
                      placeholder="What is this about?"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      required
                      value={emailForm.message}
                      onChange={(e) => setEmailForm({...emailForm, message: e.target.value})}
                      placeholder="Describe your issue or question..."
                      rows={6}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowEmailModal(false)}
                      className="flex-1 px-6 py-3 border border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Email
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </MainLayout>
  )
}
