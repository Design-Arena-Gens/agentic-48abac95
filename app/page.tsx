'use client';

import { useState } from 'react';
import {
  TrendingUp,
  Search,
  Video,
  BarChart3,
  Target,
  Lightbulb,
  Clock,
  Users,
  Eye,
  ThumbsUp,
  MessageSquare,
  Award,
  Zap,
  BookOpen,
  Moon,
  Heart
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('strategy');

  const competitorChannels = [
    { name: 'Kahani Ghar', subscribers: '2.5M', avgViews: '500K', uploadFreq: '3/week' },
    { name: 'Hindi Stories TV', subscribers: '1.8M', avgViews: '350K', uploadFreq: '2/week' },
    { name: 'Bedtime Tales Hindi', subscribers: '1.2M', avgViews: '280K', uploadFreq: '4/week' },
    { name: 'Moral Kahaniyan', subscribers: '950K', avgViews: '200K', uploadFreq: '3/week' },
  ];

  const contentIdeas = [
    {
      title: 'राजा और भिखारी की कहानी',
      category: 'सोने से पहले की कहानी',
      keywords: ['moral story', 'hindi kahani', 'bedtime story', 'sone ki kahani'],
      estimatedViews: '200-500K',
      difficulty: 'Medium',
      trending: true
    },
    {
      title: 'ईमानदार किसान की सीख',
      category: 'नैतिक शिक्षा',
      keywords: ['hindi moral story', 'farmer story', 'honesty lesson'],
      estimatedViews: '150-400K',
      difficulty: 'Easy',
      trending: false
    },
    {
      title: 'चतुर गधा और शेर',
      category: 'पशु कहानियाँ',
      keywords: ['animal stories hindi', 'clever donkey', 'kids stories'],
      estimatedViews: '300-600K',
      difficulty: 'Easy',
      trending: true
    },
    {
      title: 'संत और सोने का दीपक',
      category: 'आध्यात्मिक कहानी',
      keywords: ['spiritual story', 'saint story', 'hindi adhyatmik kahani'],
      estimatedViews: '100-300K',
      difficulty: 'Hard',
      trending: false
    },
  ];

  const seoTips = [
    {
      title: 'Title Optimization',
      tips: [
        'Use "सोने से पहले" (before sleep) in titles',
        'Include "नैतिक शिक्षा" or "Moral Story" keywords',
        'Add episode numbers for series content',
        'Keep titles under 60 characters',
        'Use emojis strategically (🌙 😴 📚 ❤️)'
      ]
    },
    {
      title: 'Description Strategy',
      tips: [
        'First 2 lines are crucial - include main keywords',
        'Add Hindi and English keywords naturally',
        'Include 5-7 relevant hashtags',
        'Add timestamps for longer videos (10+ mins)',
        'Link to playlists and channel subscription'
      ]
    },
    {
      title: 'Tags Strategy',
      tips: [
        'Mix of broad and specific tags (15-20 total)',
        'Include: hindi story, moral story, bedtime story',
        'Add regional variations: kahani, katha, varta',
        'Use competitor channel names strategically',
        'Include trending story character names'
      ]
    },
    {
      title: 'Thumbnail Best Practices',
      tips: [
        'Use warm colors (orange, yellow, purple)',
        'Include moon/stars for bedtime theme',
        'Show main character clearly',
        'Add Hindi text in bold, readable font',
        'Maintain consistent branding elements'
      ]
    }
  ];

  const uploadSchedule = [
    { day: 'Monday', time: '8:00 PM', type: 'पशु कहानी (Animal Story)', rationale: 'High engagement start of week' },
    { day: 'Wednesday', time: '8:00 PM', type: 'राजा-रानी कहानी (Royalty Story)', rationale: 'Mid-week boost' },
    { day: 'Friday', time: '8:30 PM', type: 'नैतिक शिक्षा (Moral Lesson)', rationale: 'Weekend preparation' },
    { day: 'Sunday', time: '7:30 PM', type: 'लंबी कहानी (Long Story)', rationale: 'Maximum availability' },
  ];

  const growthStrategies = [
    {
      strategy: 'Series Creation',
      description: 'Create story series with recurring characters',
      impact: 'High',
      effort: 'Medium',
      tips: ['Panchatantra series', 'Akbar-Birbal series', 'Moral lesson series']
    },
    {
      strategy: 'Collaboration',
      description: 'Collaborate with other Hindi content creators',
      impact: 'High',
      effort: 'High',
      tips: ['Guest narrators', 'Story exchanges', 'Cross-promotions']
    },
    {
      strategy: 'Community Engagement',
      description: 'Build loyal community through interaction',
      impact: 'Medium',
      effort: 'Low',
      tips: ['Respond to comments', 'Story requests', 'Polls and surveys']
    },
    {
      strategy: 'Quality Audio',
      description: 'Invest in professional voice narration',
      impact: 'High',
      effort: 'Medium',
      tips: ['Clear Hindi pronunciation', 'Soothing voice', 'Background music']
    },
    {
      strategy: 'Animation/Visuals',
      description: 'Add simple animations or illustrations',
      impact: 'Very High',
      effort: 'High',
      tips: ['Character animations', 'Scene illustrations', 'Text overlays']
    },
    {
      strategy: 'Trending Topics',
      description: 'Create stories around trending themes',
      impact: 'Medium',
      effort: 'Low',
      tips: ['Festival-themed stories', 'Current moral issues', 'Popular requests']
    }
  ];

  const analyticsMetrics = [
    { metric: 'Target Subscribers (6 months)', value: '100K', status: 'goal' },
    { metric: 'Optimal Upload Time', value: '7:30-8:30 PM IST', status: 'recommend' },
    { metric: 'Ideal Video Length', value: '8-15 minutes', status: 'recommend' },
    { metric: 'Expected Watch Time', value: '60-70%', status: 'goal' },
    { metric: 'Target CTR', value: '8-12%', status: 'goal' },
    { metric: 'Engagement Rate', value: '5-8%', status: 'goal' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Moon className="w-12 h-12 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Hindi Moral Stories
            </h1>
            <BookOpen className="w-12 h-12 text-yellow-300" />
          </div>
          <p className="text-xl text-purple-200">YouTube Channel Domination Platform</p>
          <p className="text-lg text-purple-300 mt-2">सोने से पहले की नैतिक कहानियाँ</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {[
            { id: 'strategy', label: 'Growth Strategy', icon: TrendingUp },
            { id: 'content', label: 'Content Ideas', icon: Lightbulb },
            { id: 'seo', label: 'SEO Optimization', icon: Search },
            { id: 'schedule', label: 'Upload Schedule', icon: Clock },
            { id: 'competitors', label: 'Competitor Analysis', icon: Target },
            { id: 'analytics', label: 'Analytics Goals', icon: BarChart3 },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-yellow-400 text-purple-900 shadow-lg scale-105'
                    : 'bg-purple-800 text-white hover:bg-purple-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">

          {/* Growth Strategy Tab */}
          {activeTab === 'strategy' && (
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <Zap className="w-8 h-8 text-yellow-500" />
                Channel Growth Strategies
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {growthStrategies.map((item, idx) => (
                  <div key={idx} className="border-2 border-purple-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-purple-800">{item.strategy}</h3>
                      <div className="flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.impact === 'Very High' ? 'bg-green-500 text-white' :
                          item.impact === 'High' ? 'bg-blue-500 text-white' :
                          'bg-yellow-500 text-white'
                        }`}>
                          {item.impact} Impact
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.effort === 'Low' ? 'bg-green-100 text-green-800' :
                          item.effort === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {item.effort} Effort
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="font-semibold text-purple-900 mb-2">Action Items:</p>
                      <ul className="space-y-1">
                        {item.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-purple-500">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content Ideas Tab */}
          {activeTab === 'content' && (
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <Lightbulb className="w-8 h-8 text-yellow-500" />
                Trending Content Ideas
              </h2>
              <div className="space-y-4">
                {contentIdeas.map((idea, idx) => (
                  <div key={idx} className="border-2 border-purple-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-purple-800">{idea.title}</h3>
                          {idea.trending && (
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              TRENDING
                            </span>
                          )}
                        </div>
                        <p className="text-purple-600 font-semibold">{idea.category}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        idea.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                        idea.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {idea.difficulty}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-gray-700 mb-2">Keywords:</p>
                        <div className="flex flex-wrap gap-2">
                          {idea.keywords.map((keyword, i) => (
                            <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-2">Estimated Views:</p>
                        <p className="text-2xl font-bold text-green-600 flex items-center gap-2">
                          <Eye className="w-6 h-6" />
                          {idea.estimatedViews}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SEO Optimization Tab */}
          {activeTab === 'seo' && (
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <Search className="w-8 h-8 text-yellow-500" />
                SEO Optimization Guide
              </h2>
              <div className="space-y-6">
                {seoTips.map((section, idx) => (
                  <div key={idx} className="border-2 border-purple-200 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 bg-purple-50 p-3 rounded-lg">
                          <Award className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-800">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">Sample Optimized Title Examples:</h3>
                  <ul className="space-y-2">
                    <li className="bg-white p-3 rounded-lg text-gray-800 font-semibold">
                      🌙 राजा और भिखारी की कहानी | सोने से पहले की नैतिक कहानी | Hindi Moral Story #1
                    </li>
                    <li className="bg-white p-3 rounded-lg text-gray-800 font-semibold">
                      😴 ईमानदार किसान की सीख | Bedtime Moral Story in Hindi | Kids Stories
                    </li>
                    <li className="bg-white p-3 rounded-lg text-gray-800 font-semibold">
                      📚 चतुर गधा और शेर | पशु कहानियाँ | Hindi Animal Stories for Sleep
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Upload Schedule Tab */}
          {activeTab === 'schedule' && (
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <Clock className="w-8 h-8 text-yellow-500" />
                Optimal Upload Schedule
              </h2>
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Key Insights:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-800">
                    <span className="text-green-500">✓</span>
                    Best time: 7:30-8:30 PM IST (when people prepare for sleep)
                  </li>
                  <li className="flex items-center gap-2 text-gray-800">
                    <span className="text-green-500">✓</span>
                    Upload frequency: 3-4 videos per week for optimal growth
                  </li>
                  <li className="flex items-center gap-2 text-gray-800">
                    <span className="text-green-500">✓</span>
                    Consistency is more important than quantity
                  </li>
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {uploadSchedule.map((schedule, idx) => (
                  <div key={idx} className="border-2 border-purple-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-purple-800">{schedule.day}</h3>
                      <span className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-bold">
                        {schedule.time}
                      </span>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-semibold text-purple-900 mb-2">{schedule.type}</p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Rationale:</span> {schedule.rationale}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Competitor Analysis Tab */}
          {activeTab === 'competitors' && (
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <Target className="w-8 h-8 text-yellow-500" />
                Competitor Analysis
              </h2>
              <div className="space-y-4 mb-6">
                {competitorChannels.map((channel, idx) => (
                  <div key={idx} className="border-2 border-purple-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-purple-800">{channel.name}</h3>
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                        #{idx + 1} Competitor
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Subscribers</p>
                        <p className="text-xl font-bold text-blue-600">{channel.subscribers}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 text-center">
                        <Eye className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Avg Views</p>
                        <p className="text-xl font-bold text-green-600">{channel.avgViews}</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4 text-center">
                        <Video className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Upload Freq</p>
                        <p className="text-xl font-bold text-purple-600">{channel.uploadFreq}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-100 to-teal-100 border-2 border-green-400 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-green-900 mb-4">How to Beat Competitors:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-800"><strong>Better Quality:</strong> Invest in professional voice-over and animations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-800"><strong>Consistency:</strong> Upload 4x per week (more than most competitors)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-800"><strong>Engagement:</strong> Reply to every comment in first 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-800"><strong>Unique Angle:</strong> Focus on "sleep-specific" content with calming music</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800"><strong>SEO Mastery:</strong> Better titles, descriptions, and tags than competitors</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Analytics Goals Tab */}
          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <BarChart3 className="w-8 h-8 text-yellow-500" />
                Analytics & Growth Goals
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {analyticsMetrics.map((item, idx) => (
                  <div key={idx} className="border-2 border-purple-200 rounded-xl p-5 bg-gradient-to-br from-purple-50 to-blue-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{item.metric}</p>
                        <p className="text-3xl font-bold text-purple-800">{item.value}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.status === 'goal' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {item.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-400 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Month-by-Month Growth Plan:</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-purple-900">Month 1-2: Foundation</p>
                    <p className="text-gray-700">Goal: 1K subscribers | Upload 8-10 videos | Focus on quality & consistency</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-purple-900">Month 3-4: Growth</p>
                    <p className="text-gray-700">Goal: 10K subscribers | Create series | Start collaborations | Improve SEO</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-purple-900">Month 5-6: Acceleration</p>
                    <p className="text-gray-700">Goal: 50-100K subscribers | Daily uploads | Monetization | Community building</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-400 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Key Performance Indicators to Track:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-bold text-gray-800">Views</p>
                    <p className="text-sm text-gray-600">Track daily/weekly trends</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-bold text-gray-800">Watch Time</p>
                    <p className="text-sm text-gray-600">Aim for 60%+ retention</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <ThumbsUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-bold text-gray-800">Engagement</p>
                    <p className="text-sm text-gray-600">Likes + comments ratio</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <p className="font-bold text-gray-800">Subscribers</p>
                    <p className="text-sm text-gray-600">Growth rate per week</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <MessageSquare className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <p className="font-bold text-gray-800">CTR</p>
                    <p className="text-sm text-gray-600">Click-through rate 8%+</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <p className="font-bold text-gray-800">Impressions</p>
                    <p className="text-sm text-gray-600">YouTube recommendation</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-purple-200">
          <p className="text-lg font-semibold">🚀 Follow this guide to dominate Hindi moral stories on YouTube! 🚀</p>
          <p className="text-sm mt-2">Success = Quality Content + Consistency + Smart SEO + Community Engagement</p>
        </div>
      </div>
    </main>
  );
}
