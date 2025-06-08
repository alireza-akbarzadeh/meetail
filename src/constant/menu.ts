import {
  BarChartIcon,
  BellIcon,
  BotIcon,
  CalendarIcon,
  FilePlusIcon,
  FileTextIcon,
  HelpCircleIcon,
  LockIcon,
  SettingsIcon,
  StarIcon,
  UsersIcon,
  VideoIcon,
} from 'lucide-react';

const primarySection = [
  {
    icon: VideoIcon,
    label: 'Meetings',
    href: '/meetings', // This section should enable users to quickly schedule, join, and manage video calls.
    // Features:
    // - Schedule one-on-one or group meetings.
    // - Join meetings with a single click.
    // - Include quick meeting notes and recording options.
    // - Integrate with external calendars (Google, Outlook) for automatic scheduling.
  },
  {
    icon: BotIcon,
    label: 'Agents',
    href: '/agents', // A critical feature where users can create and manage virtual agents for specific tasks.
    // Features:
    // - Allow users to create AI-powered agents (chatbots, task automators, etc.).
    // - Implement NLP for agents to interact with users.
    // - Create agent templates for specific use cases (e.g., customer service, scheduling).
    // - Allow agents to be deployed in different contexts (e.g., as assistants in meetings).
  },
  {
    icon: UsersIcon,
    label: 'Team',
    href: '/team', // Managing teams and collaboration tools.
    // Features:
    // - Add or remove team members with specific roles.
    // - Manage permissions for each member (Admin, User, Viewer).
    // - View team member activity logs to track productivity.
    // - Real-time collaboration features (e.g., team chat, shared files).
    // - Assign and manage tasks within the team.
  },
  {
    icon: FileTextIcon,
    label: 'Documents',
    href: '/documents', // Store and manage shared documents and files.
    // Features:
    // - File storage and sharing (e.g., PDFs, spreadsheets, presentations).
    // - Integrations with cloud services (Google Drive, Dropbox, etc.).
    // - Enable real-time document editing and commenting.
    // - Manage document versions and permissions (e.g., who can edit, view).
    // - Search functionality for quick access to specific documents.
  },
];

const secondSection = [
  {
    icon: StarIcon,
    label: 'Upgrade',
    href: '/upgrade', // A premium feature section, encouraging users to upgrade to premium accounts.
    // Features:
    // - Offer additional functionality, such as more agents, meeting participants, or extended storage.
    // - Provide a pricing page with benefits clearly outlined.
    // - Introduce a freemium model to attract new users, with an option to upgrade based on usage.
    // - Enable trials to test premium features.
  },
  {
    icon: BellIcon,
    label: 'Notifications',
    href: '/notifications', // Let users manage and track important notifications.
    // Features:
    // - Notify users about upcoming meetings, tasks, messages, etc.
    // - Enable custom notification settings (e.g., daily summaries, meeting reminders).
    // - Group notifications by type (e.g., meeting, task, agent status).
    // - Option for push notifications, email notifications, or in-app notifications.
  },
  {
    icon: CalendarIcon,
    label: 'Calendar',
    href: '/calendar', // Sync and view a user's meetings or events in a calendar.
    // Features:
    // - Integrate with Google Calendar, Outlook, or any other popular calendar service.
    // - Provide a quick view of the next upcoming meeting.
    // - Allow users to add events directly from the calendar view.
    // - Support recurring meetings or events and reminders.
  },
];

const thirdSection = [
  {
    icon: SettingsIcon,
    label: 'Settings',
    href: '/settings', // Allow users to modify general settings for the app.
    // Features:
    // - Change user preferences (theme, language, etc.).
    // - Modify app-wide settings like default notification settings, privacy preferences, etc.
    // - Manage connected accounts and integrations (Google, Microsoft).
  },
  {
    icon: LockIcon,
    label: 'Security',
    href: '/security', // Provide security-related settings.
    // Features:
    // - Change passwords and enable two-factor authentication (2FA).
    // - Display recent security logs and notifications (e.g., failed login attempts).
    // - Enable IP whitelist or manage trusted devices.
  },
  {
    icon: HelpCircleIcon,
    label: 'Help & Support',
    href: '/help', // A support section for troubleshooting, FAQs, and contacting customer support.
    // Features:
    // - In-app FAQs and guides for common problems.
    // - Access to chat support or ticketing system.
    // - Video tutorials or onboarding guides for new users.
  },
  {
    icon: FilePlusIcon,
    label: 'Create New',
    href: '/create', // Allow users to quickly create new items (meetings, agents, tasks, etc.).
    // Features:
    // - Direct links to create new meetings, agents, tasks, and documents.
    // - Allow users to instantly create a new project or agenda with one click.
  },
  {
    icon: BarChartIcon, // New icon for Analytics
    label: 'Analytics',
    href: '/analytics', // New section for viewing performance metrics.
    // Features:
    // - Display user/team activity: meetings attended, agents created, tasks completed.
    // - Graphs showing meeting engagement, team productivity, and agent success.
    // - Insights for improving productivity and collaboration.
  },
];

export { primarySection, secondSection, thirdSection };
