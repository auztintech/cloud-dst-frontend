// FILE: src/App.jsx
// IMPORTANT: This file should ONLY import components, not define them!
// All component definitions should be in their own files in the /pages folder

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Cloud } from 'lucide-react';

// Import data
import { SERVICE_CATEGORIES } from './data/serviceCategories';

// Import utilities
import { calculateScore } from './utils/scoring';

// Import ALL page components from their respective files
import BusinessNamePage from './pages/BusinessNamePage';
import IndustryPage from './pages/IndustryPage';
import EmployeesPage from './pages/EmployeesPage';
import LocationPage from './pages/LocationPage';
import YearsUsagePage from './pages/YearsUsagePage';
import BudgetPage from './pages/BudgetPage';
import InfrastructurePage from './pages/InfrastructurePage';
import CloudProviderPage from './pages/CloudProviderPage';
import PainPointsPage from './pages/PainPointsPage';
import DataSensitivityPage from './pages/DataSensitivityPage';
import GrowthPage from './pages/GrowthPage';
import RemoteWorkPage from './pages/RemoteWorkPage';
import DisasterRecoveryPage from './pages/DisasterRecoveryPage';
import StoragePage from './pages/StoragePage';
import CDNPage from './pages/CDNPage';
import RequestsPage from './pages/RequestsPage';
import CompliancePage from './pages/CompliancePage';
import ServicePage from './pages/ServicePage';
import ResultsPage from './pages/ResultsPage';

export default function App() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState('forward');
  const [answers, setAnswers] = useState({
    businessName: '',
    industry: 'retail',
    employees: 5,
    state: '',
    lga: '',
    yearsUsage: '',
    monthlyBudget: 50000,
    onPrem: false,
    usesCloud: false,
    cloudProvider: '',
    pain: [],
    dataSensitivity: 'medium',
    compliance: [],
    growth: 10,
    remoteWork: 50,
    disasterRecovery: false,
    storageGB: 50,
    cdnGB: 0,
    monthlyRequests: 100000,
    selectedServices: {}
  });
  const [score, setScore] = useState(0);

  const totalPages = 17 + SERVICE_CATEGORIES.length;

  useEffect(() => {
    if (page === totalPages) {
      setScore(calculateScore(answers));
    }
  }, [page, answers, totalPages]);

  const next = () => {
    setDirection('forward');
    if (page === totalPages) {
      setPage(0); // Restart
    } else {
      setPage(p => p + 1);
    }
  };

  const prev = () => {
    setDirection('back');
    setPage(p => Math.max(p - 1, 0));
  };

  const updateAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const toggleService = (category, item) => {
    setAnswers(prev => {
      const current = prev.selectedServices[category] || [];
      const updated = current.includes(item)
        ? current.filter(i => i !== item)
        : [...current, item];
      return {
        ...prev,
        selectedServices: { ...prev.selectedServices, [category]: updated }
      };
    });
  };

  const toggleArrayItem = (key, item) => {
    setAnswers(prev => {
      const current = prev[key] || [];
      const updated = current.includes(item)
        ? current.filter(i => i !== item)
        : [...current, item];
      return { ...prev, [key]: updated };
    });
  };

  const progress = ((page / totalPages) * 100).toFixed(1);

  // Render current page
  const renderPage = () => {
    if (page === 0) return <BusinessNamePage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 1) return <IndustryPage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 2) return <EmployeesPage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 3) return <LocationPage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 4) return <YearsUsagePage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 5) return <BudgetPage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 6) return <InfrastructurePage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 7) return <CloudProviderPage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 8) return <PainPointsPage answers={answers} toggleArrayItem={toggleArrayItem} />;
    if (page === 9) return <DataSensitivityPage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 10) return <GrowthPage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 11) return <RemoteWorkPage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 12) return <DisasterRecoveryPage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 13) return <StoragePage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 14) return <CDNPage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 15) return <RequestsPage answers={answers} updateAnswer={updateAnswer} />;
    if (page === 16) return <CompliancePage answers={answers} toggleArrayItem={toggleArrayItem} />;
    
    // Service pages (14 categories)
    if (page >= 17 && page < 17 + SERVICE_CATEGORIES.length) {
      return (
        <ServicePage
          service={SERVICE_CATEGORIES[page - 17]}
          answers={answers}
          toggleService={toggleService}
        />
      );
    }
    
    // Results page
    if (page === totalPages) {
      return <ResultsPage answers={answers} score={score} />;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
      
      <div style={{
        width: '100%',
        maxWidth: '440px',
        background: '#ffffff',
        borderRadius: '32px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        minHeight: '700px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header with Progress */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '24px 24px 16px',
          color: 'white'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Cloud size={28} />
            <div style={{ fontSize: '20px', fontWeight: '700' }}>Cloud Assessment</div>
          </div>
          <div style={{ fontSize: '13px', opacity: 0.9 }}>
            {page === totalPages ? 'Your Results' : `Question ${page + 1} of ${totalPages}`}
          </div>
          <div style={{
            marginTop: '12px',
            background: 'rgba(255,255,255,0.2)',
            height: '6px',
            borderRadius: '999px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: 'white',
              transition: 'width 0.3s ease',
              borderRadius: '999px'
            }} />
          </div>
        </div>

        {/* Content Area */}
        <div style={{
          flex: 1,
          padding: '28px 24px',
          overflowY: 'auto',
          animation: direction === 'forward' ? 'slideInRight 0.3s ease' : 'slideInLeft 0.3s ease'
        }}>
          {renderPage()}
        </div>

        {/* Navigation Buttons */}
        <div style={{
          padding: '20px 24px',
          borderTop: '1px solid #f0f0f0',
          background: '#fafafa',
          display: 'flex',
          gap: '12px'
        }}>
          {page > 0 && page < totalPages && (
            <button
              onClick={prev}
              style={{
                padding: '14px 20px',
                border: '2px solid #e0e0e0',
                background: 'white',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '15px',
                fontWeight: '600',
                color: '#666',
                flex: '0 0 auto',
                transition: 'all 0.2s'
              }}
              onMouseOver={e => e.currentTarget.style.borderColor = '#667eea'}
              onMouseOut={e => e.currentTarget.style.borderColor = '#e0e0e0'}
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <button
            onClick={next}
            style={{
              padding: '14px 24px',
              border: 'none',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '15px',
              fontWeight: '600',
              flex: 1,
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {page === totalPages ? 'Restart Assessment' : page === totalPages - 1 ? 'See Results' : 'Continue'}
            {page < totalPages && <ChevronRight size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}