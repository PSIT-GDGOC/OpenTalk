import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { FeedList } from './features/feed/FeedList';
import { TrendingHub } from './features/trending/TrendingHub';

export const App = () => {
  const [currentTab, setCurrentTab] = useState('feed');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-950 flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
          <Sidebar currentTab={currentTab} onSelectTab={setCurrentTab} />
          <section className="flex-1 min-w-0">
            <FeedList />
          </section>
          <TrendingHub />
        </main>
      </div>
    </AuthProvider>
  );
};

export default App;
