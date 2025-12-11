import { Building2, TrendingUp, HardDrive, Shield, Server, Cloud, MessageSquare, Users, Lock, BarChart3, Database, CreditCard, Package, FileText } from 'lucide-react';

export const SERVICE_CATEGORIES = [
  {
    id: 'businessTools',
    title: 'Business Management',
    icon: 'Building2',
    items: ['QuickBooks Online', 'Xero', 'Zoho Books', 'Salesforce', 'Zoho CRM', 'HubSpot', 'Odoo', 'SAP Business One', 'Microsoft Dynamics 365', 'FreshBooks', 'Wave', 'Sage Cloud Accounting']
  },
  {
    id: 'marketing',
    title: 'Marketing Tools',
    icon: 'TrendingUp',
    items: ['Mailchimp', 'Sendinblue', 'Constant Contact', 'HubSpot Marketing', 'ActiveCampaign', 'ConvertKit', 'GetResponse', 'Drip']
  },
  {
    id: 'storage',
    title: 'Cloud Storage',
    icon: 'HardDrive',
    items: ['Google Drive', 'Dropbox', 'OneDrive', 'iCloud', 'Box', 'Mega', 'pCloud', 'Sync.com']
  },
  {
    id: 'backup',
    title: 'Backup Solutions',
    icon: 'Shield',
    items: ['Backblaze', 'Carbonite', 'IDrive', 'AWS Backup', 'Azure Backup', 'Google Vault', 'Barracuda Cloud Backup', 'Acronis']
  },
  {
    id: 'infra',
    title: 'Infrastructure (IaaS)',
    icon: 'Server',
    items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Linode', 'Vultr', 'OVH', 'IBM Cloud']
  },
  {
    id: 'platform',
    title: 'Platform (PaaS)',
    icon: 'Cloud',
    items: ['Heroku', 'Google App Engine', 'Azure App Service', 'AWS Elastic Beanstalk', 'Firebase', 'Supabase', 'Vercel', 'Netlify', 'Render']
  },
  {
    id: 'comms',
    title: 'Communication',
    icon: 'MessageSquare',
    items: ['WhatsApp Business API', 'Twilio', 'Microsoft Teams', 'Slack', 'Zoom', 'Google Meet', 'Discord', 'Rocket.Chat']
  },
  {
    id: 'support',
    title: 'Customer Support',
    icon: 'Users',
    items: ['Freshdesk', 'Zendesk', 'Intercom', 'Help Scout', 'LiveChat', 'Drift', 'Crisp', 'Tidio']
  },
  {
    id: 'security',
    title: 'Security Services',
    icon: 'Lock',
    items: ['Cloudflare', 'NordLayer', 'Perimeter 81', 'Auth0', 'Okta', 'LastPass', '1Password', 'Duo Security']
  },
  {
    id: 'analytics',
    title: 'Analytics & BI',
    icon: 'BarChart3',
    items: ['Google Analytics', 'Looker Studio', 'Power BI', 'Tableau Cloud', 'Zoho Analytics', 'Databox', 'Mixpanel', 'Amplitude']
  },
  {
    id: 'database',
    title: 'Database Services',
    icon: 'Database',
    items: ['MongoDB Atlas', 'Amazon RDS', 'Azure SQL', 'Google Cloud SQL', 'Firebase Realtime DB', 'Supabase', 'PlanetScale', 'CockroachDB']
  },
  {
    id: 'payments',
    title: 'Payment Platforms',
    icon: 'CreditCard',
    items: ['Paystack', 'Flutterwave', 'Stripe', 'PayPal', 'Remita', 'Monnify', 'VoguePay', 'Interswitch']
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    icon: 'Package',
    items: ['Shopify', 'WooCommerce', 'Wix eCommerce', 'Squarespace Commerce', 'Magento', 'BigCommerce', 'PrestaShop']
  },
  {
    id: 'productivity',
    title: 'Productivity Suites',
    icon: 'FileText',
    items: ['Google Workspace', 'Microsoft 365', 'Zoho Workplace', 'Notion', 'Monday.com', 'Asana', 'Trello', 'ClickUp']
  }
];

export const ICON_MAP = {
  Building2,
  TrendingUp,
  HardDrive,
  Shield,
  Server,
  Cloud,
  MessageSquare,
  Users,
  Lock,
  BarChart3,
  Database,
  CreditCard,
  Package,
  FileText
};