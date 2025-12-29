import { Building2, TrendingUp, HardDrive, Shield, Server, Cloud, MessageSquare, Users, Lock, BarChart3, Database, CreditCard, Package, FileText } from 'lucide-react';

export const SERVICE_CATEGORIES = [
  {
    id: 'businessTools',
    title: 'Which business management (accounting/ERP) software does your business use?',
    icon: 'Building2',
    items: ['QuickBooks Online', 'Xero', 'Zoho Books', 'Salesforce', 'Zoho CRM', 'HubSpot', 'Odoo', 'SAP Business One', 'Microsoft Dynamics 365', 'FreshBooks', 'Wave', 'Sage Cloud Accounting']
  },
  {
    id: 'marketing',
    title: 'Which marketing tools do you use?',
    icon: 'TrendingUp',
    items: ['Mailchimp', 'Sendinblue', 'Constant Contact', 'HubSpot Marketing', 'ActiveCampaign', 'ConvertKit', 'GetResponse', 'Drip']
  },
  {
    id: 'storage',
    title: 'Which cloud storage service(s) do you use?',
    icon: 'HardDrive',
    items: ['Google Drive', 'Dropbox', 'OneDrive', 'iCloud', 'Box', 'Mega', 'pCloud', 'Sync.com']
  },
  {
    id: 'backup',
    title: 'Which backup solution(s) do you use?',
    icon: 'Shield',
    items: ['Backblaze', 'Carbonite', 'IDrive', 'AWS Backup', 'Azure Backup', 'Google Vault', 'Barracuda Cloud Backup', 'Acronis']
  },
  {
    id: 'infra',
    title: 'Which type of infrastructure hosting do you use?',
    icon: 'Server',
    items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Linode', 'Vultr', 'OVH', 'IBM Cloud']
  },
  {
    id: 'platform',
    title: 'Do you use any platform services (PaaS) for building/running apps?',
    icon: 'Cloud',
    items: ['Heroku', 'Google App Engine', 'Azure App Service', 'AWS Elastic Beanstalk', 'Firebase', 'Supabase', 'Vercel', 'Netlify', 'Render']
  },
  {
    id: 'security',
    title: 'What security services do you use to protect your systems?',
    icon: 'Lock',
    items: ['Cloudflare', 'NordLayer', 'Perimeter 81', 'Auth0', 'Okta', 'LastPass', '1Password', 'Duo Security']
  },
  {
    id: 'analytics',
    title: 'Do you use any analytics or business-intelligence tools?',
    icon: 'BarChart3',
    items: ['Google Analytics', 'Looker Studio', 'Power BI', 'Tableau Cloud', 'Zoho Analytics', 'Databox', 'Mixpanel', 'Amplitude']
  },
  {
    id: 'database',
    title: 'What type of database services do you use?',
    icon: 'Database',
    items: ['MongoDB Atlas', 'Amazon RDS', 'Azure SQL', 'Google Cloud SQL', 'Firebase Realtime DB', 'Supabase', 'PlanetScale', 'CockroachDB']
  },
  {
    id: 'payments',
    title: 'Which payment platforms do you accept online?',
    icon: 'CreditCard',
    items: ['Paystack', 'Flutterwave', 'Stripe', 'PayPal', 'Remita', 'Monnify', 'VoguePay', 'Interswitch']
  },
  {
    id: 'ecommerce',
    title: 'Do you sell through an e-commerce platform?',
    icon: 'Package',
    items: ['Shopify', 'WooCommerce', 'Wix eCommerce', 'Squarespace Commerce', 'Magento', 'BigCommerce', 'PrestaShop']
  }
];

export const ICON_MAP = {
  Building2,
  TrendingUp,
  HardDrive,
  Shield,
  Server,
  Cloud,
  Lock,
  BarChart3,
  Database,
  CreditCard,
  Package,
};