// FILE: src/pages/ResultsPage.jsx
import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  Target, 
  ArrowRight,
  BarChart3,
  Package,
  Clock,
  Monitor,
  Database,
  HardDrive,
  Cloud,
  Lock,
  Rocket,
  Users,
  LineChart,
  Search,
  Settings
} from 'lucide-react';

export default function ResultsPage({ answers, score }) {
  const getScoreColor = (s) => {
    if (s >= 75) return '#10b981';
    if (s >= 50) return '#f59e0b';
    return '#ef4444';
  };

  const getScoreLabel = (s) => {
    if (s >= 75) return 'Advanced Adopter';
    if (s >= 50) return 'Growing User';
    return 'Getting Started';
  };

  const getAdoptionLevel = (s) => {
    if (s >= 75) return {
      level: 'High Cloud Maturity',
      description: 'Your business shows strong cloud adoption with multiple cloud services in use.'
    };
    if (s >= 50) return {
      level: 'Moderate Cloud Adoption',
      description: 'Your business is making good progress with cloud services, with room for growth.'
    };
    return {
      level: 'Early Cloud Journey',
      description: 'Your business is starting its cloud journey. There are many opportunities ahead.'
    };
  };

  const totalServices = Object.values(answers.selectedServices).reduce(
    (acc, arr) => acc + arr.length, 0
  );
  
  const adoptionInfo = getAdoptionLevel(score);

  // Calculate cloud adoption metrics
  const categoryCount = Object.keys(answers.selectedServices).filter(
    key => answers.selectedServices[key] && answers.selectedServices[key].length > 0
  ).length;

  // Generate personalized recommendations
  const recommendations = generateRecommendations(answers, score, totalServices);
  
  // Next steps
  const nextSteps = generateNextSteps(answers, score);

  // Calculate simple estimated cost
  const estimatedMonthlyCost = calculateSimpleCost(answers);

  return (
    <div style={{ animation: 'fadeIn 0.5s ease', paddingBottom: '20px' }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{
          width: '140px',
          height: '140px',
          margin: '0 auto 20px',
          borderRadius: '50%',
          background: `conic-gradient(${getScoreColor(score)} ${score * 3.6}deg, #f0f0f0 0deg)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            width: '116px',
            height: '116px',
            borderRadius: '50%',
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ fontSize: '36px', fontWeight: '800', color: getScoreColor(score) }}>
              {score}
            </div>
            <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>CLOUD SCORE</div>
          </div>
        </div>
        
        <h2 style={{ margin: '0 0 8px', fontSize: '24px', fontWeight: '700' }}>
          {answers.businessName || 'Your Business'}
        </h2>
        <div style={{
          display: 'inline-block',
          padding: '8px 20px',
          borderRadius: '24px',
          background: `${getScoreColor(score)}20`,
          color: getScoreColor(score),
          fontWeight: '700',
          fontSize: '14px',
          marginBottom: '8px'
        }}>
          {getScoreLabel(score)}
        </div>
        <p style={{ color: '#666', fontSize: '14px', margin: '12px 0 0', lineHeight: '1.6' }}>
          {adoptionInfo.description}
        </p>
      </div>

      {/* Cloud Adoption Overview */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '16px',
        padding: '24px',
        color: 'white',
        marginBottom: '20px'
      }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: '700' }}>
          Your Cloud Usage Summary
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <MetricCard
            value={totalServices}
            label="Services Using"
            icon={<BarChart3 size={24} />}
          />
          <MetricCard
            value={categoryCount}
            label="Service Types"
            icon={<Package size={24} />}
          />
          <MetricCard
            value={answers.yearsUsage || 'New'}
            label="Cloud Experience"
            icon={<Clock size={24} />}
          />
          <MetricCard
            value={`${answers.remoteWork}%`}
            label="Remote Team"
            icon={<Monitor size={24} />}
          />
        </div>
      </div>

      {/* Business Profile Summary */}
      <SectionCard title="Your Business Details" icon={Target}>
        <InfoRow label="Industry" value={answers.industry} />
        <InfoRow label="Team Size" value={`${answers.employees} people`} />
        <InfoRow label="Location" value={`${answers.state}${answers.lga ? `, ${answers.lga}` : ''}`} />
        <InfoRow label="Monthly IT Budget" value={`₦${answers.monthlyBudget.toLocaleString()}`} />
        <InfoRow label="Growth Target" value={`${answers.growth}% this year`} />
        <InfoRow label="Data Sensitivity" value={answers.dataSensitivity} />
      </SectionCard>

      {/* Simple Cost Estimate */}
      <SectionCard title="Estimated Monthly Costs" icon={DollarSign}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
            Approximate Monthly Cost
          </div>
          <div style={{ fontSize: '36px', fontWeight: '800', color: '#667eea' }}>
            ₦{estimatedMonthlyCost.toLocaleString()}
          </div>
          <div style={{ fontSize: '12px', color: '#888', marginTop: '8px' }}>
            Based on {answers.storageGB}GB storage and your selected services
          </div>
        </div>
        
        <div style={{
          padding: '16px',
          background: '#f8f9fa',
          borderRadius: '12px',
          fontSize: '13px',
          color: '#666',
          lineHeight: '1.6'
        }}>
          <strong>Note:</strong> This is a rough estimate. Actual costs depend on usage, chosen providers, and specific plans. Contact cloud providers for accurate pricing.
        </div>
      </SectionCard>

      {/* Key Recommendations */}
      <SectionCard title="What We Recommend" icon={CheckCircle}>
        {recommendations.map((rec, idx) => (
          <RecommendationItem
            key={idx}
            icon={rec.icon}
            title={rec.title}
            description={rec.description}
            priority={rec.priority}
          />
        ))}
      </SectionCard>

      {/* Pain Points & Solutions */}
      {answers.pain && answers.pain.length > 0 && (
        <SectionCard title="Solving Your Challenges" icon={AlertCircle}>
          {answers.pain.map(pain => (
            <PainPointSolution key={pain} pain={pain} />
          ))}
        </SectionCard>
      )}

      {/* Next Steps */}
      <SectionCard title="Your Action Plan" icon={ArrowRight}>
        {nextSteps.map((step, idx) => (
          <NextStepItem
            key={idx}
            number={idx + 1}
            title={step.title}
            description={step.description}
            timeline={step.timeline}
          />
        ))}
      </SectionCard>

      {/* Summary Footer */}
      <div style={{
        marginTop: '24px',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '12px',
        textAlign: 'center',
        border: '1px solid #e9ecef'
      }}>
        <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
          <strong>✅ Assessment Complete!</strong><br />
          We recommend reviewing your cloud strategy every 6 months to track progress and find new savings.
        </div>
      </div>
    </div>
  );
}

// Helper Components
function MetricCard({ value, label, icon }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.15)',
      borderRadius: '12px',
      padding: '16px',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {icon}
      </div>
      <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>{value}</div>
      <div style={{ fontSize: '12px', opacity: 0.9 }}>{label}</div>
    </div>
  );
}

function SectionCard({ title, icon: Icon, children }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '20px',
      border: '1px solid #e9ecef',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '16px'
      }}>
        <Icon size={22} color="#667eea" />
        <h3 style={{ margin: 0, fontSize: '17px', fontWeight: '700' }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid #f0f0f0'
    }}>
      <span style={{ color: '#888', fontSize: '14px' }}>{label}</span>
      <span style={{ fontWeight: '600', fontSize: '14px', textTransform: 'capitalize' }}>{value}</span>
    </div>
  );
}

function RecommendationItem({ icon, title, description, priority }) {
  return (
    <div style={{
      padding: '16px',
      background: '#f8f9fa',
      borderRadius: '12px',
      marginBottom: '12px',
      borderLeft: `4px solid ${priority === 'high' ? '#ef4444' : priority === 'medium' ? '#f59e0b' : '#10b981'}`
    }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '2px' }}>
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            marginBottom: '6px'
          }}>
            <div style={{ fontWeight: '700', fontSize: '15px' }}>{title}</div>
            {priority && (
              <span style={{
                fontSize: '10px',
                padding: '3px 8px',
                borderRadius: '12px',
                background: priority === 'high' ? '#fee2e2' : priority === 'medium' ? '#fef3c7' : '#d1fae5',
                color: priority === 'high' ? '#dc2626' : priority === 'medium' ? '#d97706' : '#059669',
                fontWeight: '700',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}>
                {priority}
              </span>
            )}
          </div>
          <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>{description}</div>
        </div>
      </div>
    </div>
  );
}

function PainPointSolution({ pain }) {
  const solutions = {
    cost: {
      icon: <DollarSign size={24} color="#f59e0b" />,
      title: 'Reduce Your Costs',
      solution: 'Review your subscriptions monthly, cancel unused services, and negotiate better rates with providers. Consider annual plans for discounts.'
    },
    backup: {
      icon: <HardDrive size={24} color="#f59e0b" />,
      title: 'Better Backups',
      solution: 'Set up automatic backups daily. Use cloud storage services and test restoring your data regularly to ensure it works.'
    },
    uptime: {
      icon: <Shield size={24} color="#f59e0b" />,
      title: 'Improve Reliability',
      solution: 'Choose providers with 99.9% uptime guarantees. Have backup systems ready and monitor your services regularly.'
    },
    security: {
      icon: <Lock size={24} color="#f59e0b" />,
      title: 'Strengthen Security',
      solution: 'Use strong passwords and two-factor authentication. Keep software updated and train your team on security basics.'
    },
    performance: {
      icon: <Rocket size={24} color="#f59e0b" />,
      title: 'Speed Things Up',
      solution: 'Use faster internet, optimize your apps, and consider CDN services for better performance across locations.'
    },
    complexity: {
      icon: <Target size={24} color="#f59e0b" />,
      title: 'Simplify Your Setup',
      solution: 'Reduce the number of tools you use. Choose integrated solutions that work well together to make management easier.'
    }
  };

  const painInfo = solutions[pain];
  if (!painInfo) return null;

  return (
    <div style={{
      padding: '16px',
      background: '#fff7ed',
      borderRadius: '12px',
      marginBottom: '12px',
      borderLeft: '4px solid #f59e0b'
    }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '2px' }}>
          {painInfo.icon}
        </div>
        <div>
          <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '6px' }}>
            {painInfo.title}
          </div>
          <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
            {painInfo.solution}
          </div>
        </div>
      </div>
    </div>
  );
}

function NextStepItem({ number, title, description, timeline }) {
  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      padding: '16px 0',
      borderBottom: '1px solid #f0f0f0'
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: '14px',
        flexShrink: 0
      }}>
        {number}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '4px' }}>{title}</div>
        <div style={{ fontSize: '13px', color: '#666', marginBottom: '6px', lineHeight: '1.6' }}>
          {description}
        </div>
        <div style={{
          fontSize: '12px',
          color: '#667eea',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Clock size={12} />
          {timeline}
        </div>
      </div>
    </div>
  );
}

// Simplified cost calculation
function calculateSimpleCost(answers) {
  let cost = 0;
  
  // Base cloud services if using cloud
  if (answers.usesCloud) {
    cost += 15000; // Basic cloud infrastructure
  }
  
  // Storage cost
  cost += (answers.storageGB || 0) * 2;
  
  // Number of services factor
  const serviceCount = Object.values(answers.selectedServices).reduce(
    (acc, arr) => acc + arr.length, 0
  );
  cost += serviceCount * 500; // Rough estimate per service
  
  return Math.round(cost);
}

// Simplified recommendation generation
function generateRecommendations(answers, score, totalServices) {
  const recs = [];

  if (score < 50) {
    recs.push({
      icon: <Target size={24} color="#667eea" />,
      title: 'Start with the Basics',
      description: 'Begin with email, file storage, and accounting software. These are easy to use and show quick benefits.',
      priority: 'high'
    });
  } else if (score >= 75) {
    recs.push({
      icon: <Rocket size={24} color="#667eea" />,
      title: 'Go Advanced',
      description: 'You\'re ready for more sophisticated tools like automation, analytics, and integrated systems.',
      priority: 'medium'
    });
  }

  if (totalServices < 3) {
    recs.push({
      icon: <Package size={24} color="#667eea" />,
      title: 'Add More Cloud Tools',
      description: 'Try adding collaboration tools, backup services, or customer management systems to boost productivity.',
      priority: 'high'
    });
  }

  if (!answers.usesCloud && answers.onPrem) {
    recs.push({
      icon: <Cloud size={24} color="#667eea" />,
      title: 'Move to the Cloud Gradually',
      description: 'Start by moving your documents and backups to the cloud. Keep critical systems local until you\'re comfortable.',
      priority: 'high'
    });
  }

  if (!answers.disasterRecovery) {
    recs.push({
      icon: <Shield size={24} color="#667eea" />,
      title: 'Plan for Emergencies',
      description: 'Set up automatic backups and document how to restore your data if something goes wrong.',
      priority: 'high'
    });
  }

  if (answers.remoteWork > 50) {
    recs.push({
      icon: <Users size={24} color="#667eea" />,
      title: 'Support Remote Work',
      description: 'Use cloud tools for video calls, project management, and file sharing to keep your remote team connected.',
      priority: 'medium'
    });
  }

  if (answers.growth > 50) {
    recs.push({
      icon: <LineChart size={24} color="#667eea" />,
      title: 'Prepare for Growth',
      description: 'Choose cloud services that can easily scale up as your business grows without major changes.',
      priority: 'medium'
    });
  }

  return recs.slice(0, 5);
}

// Simplified next steps
function generateNextSteps(answers, score) {
  const steps = [];

  if (score < 50) {
    steps.push(
      {
        title: 'Learn the Basics',
        description: 'Spend time learning about cloud services. Watch tutorials or attend workshops to understand how they can help your business.',
        timeline: 'Week 1-2'
      },
      {
        title: 'Pick Your First Tool',
        description: 'Choose one simple cloud service to start with, like Google Drive or Dropbox for file storage.',
        timeline: 'Week 3-4'
      },
      {
        title: 'Train Your Team',
        description: 'Show your employees how to use the new tool. Make sure everyone is comfortable before adding more.',
        timeline: 'Month 2'
      }
    );
  } else if (score < 75) {
    steps.push(
      {
        title: 'Review What You Have',
        description: 'Check all your current cloud services. Are you using them fully? Are there any you don\'t need?',
        timeline: 'Week 1-2'
      },
      {
        title: 'Add Key Missing Tools',
        description: 'Look for gaps in your setup. Maybe you need better analytics, security, or collaboration tools.',
        timeline: 'Month 1-2'
      },
      {
        title: 'Set Up Monitoring',
        description: 'Track your cloud costs and usage. Set alerts so you know if spending gets too high.',
        timeline: 'Month 2-3'
      }
    );
  } else {
    steps.push(
      {
        title: 'Optimize Your Setup',
        description: 'Review your cloud architecture. Look for ways to improve performance and reduce costs.',
        timeline: 'Week 1-3'
      },
      {
        title: 'Automate Where Possible',
        description: 'Use automation tools to reduce manual work and improve efficiency.',
        timeline: 'Month 1-2'
      },
      {
        title: 'Plan for the Future',
        description: 'Consider advanced strategies like using multiple cloud providers for better reliability.',
        timeline: 'Month 3-4'
      }
    );
  }

  steps.push({
    title: 'Check Progress',
    description: 'Review your cloud usage again in 6 months to see how much you\'ve improved and what to do next.',
    timeline: '6 months'
  });

  return steps;
}