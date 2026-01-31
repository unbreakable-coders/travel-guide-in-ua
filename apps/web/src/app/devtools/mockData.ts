import {
  ButtonColor,
  ButtonType,
  CalendarValue,
  CheckboxValue,
  InputType,
  LineChartLabelSet,
  PillowColor,
  RadioValue,
  SelectValue,
  TabButtonState,
  TabValue,
} from '@org/ui';
import { Ukraine, UnitedKingdom, Arrow, Trash, TickMark } from '@org/ui';

export const formFieldMockData = {
  text: {
    name: 'username',
    label: 'Username',
    placeholder: 'Enter your username',
    onChange: (val: string) => console.log(val),
  },
  disabled: {
    name: 'email',
    placeholder: 'Enter your email',
    label: 'Email Address',
    isDisabled: true,
    onChange: (val: string) => console.log(val),
  },
  password: {
    name: 'password',
    type: InputType.Password,
    placeholder: 'Enter password',
    ariaLabel: 'Password field',
    onChange: (val: string) => console.log(val),
  },
};

export const passwordFieldMockData = {
  standard: {
    name: 'user_password',
    label: 'Account Password',
    placeholder: 'Minimum 8 characters',
    onChange: (val: string) => console.log(val),
  },
  disabled: {
    name: 'locked_password',
    label: 'Old Password',
    isDisabled: true,
    onChange: (val: string) => console.log(val),
  },
  ariaOnly: {
    name: 'security_code',
    placeholder: 'Enter security code',
    ariaLabel: 'Secure access code',
    onChange: (val: string) => console.log(val),
  },
};

export const textAreaFieldMockData = {
  standard: {
    name: 'description',
    label: 'Project Description',
    placeholder: 'Briefly describe your project goals...',
    height: '150px',
    onChange: (val: string) => console.log(val),
  },
  customHeight: {
    name: 'feedback',
    label: 'Detailed Feedback',
    placeholder: 'Write your thoughts here...',
    height: '150px',
    onChange: (val: string) => console.log(val),
  },
  disabled: {
    name: 'notes',
    label: 'Archived Notes',
    placeholder: 'No notes available',
    isDisabled: true,
    height: '150px',
    onChange: (val: string) => console.log(val),
  },
};

export const selectFieldMockData = {
  standard: {
    name: 'category',
    label: 'Category',
    options: [
      { label: 'Development', value: 'dev' },
      { label: 'Design', value: 'design' },
      { label: 'Marketing', value: 'marketing' },
    ],
    modelValue: 'dev',
    onChange: (val: SelectValue) => console.log(val),
  },
  withIcons: {
    name: 'language',
    label: 'Select Language',
    options: [
      { label: 'Ukrainian', value: 'ua', icon: Ukraine },
      { label: 'English', value: 'en', icon: UnitedKingdom },
    ],
    modelValue: 'ua',
    onChange: (val: SelectValue) => console.log(val),
  },
  disabled: {
    name: 'country',
    label: 'Country (Locked)',
    options: [{ label: 'Ukraine', value: 'ua', icon: Ukraine }],
    modelValue: 'ua',
    isDisabled: true,
    onChange: (val: SelectValue) => console.log(val),
  },
};

export const checkboxButtonMockData = {
  standard: {
    name: 'preferences',
    value: 'newsletter',
    label: 'Subscribe to newsletter',
    modelValue: [],
    onChange: (val: CheckboxValue[]) => console.log(val),
  },
  checked: {
    name: 'terms',
    value: 'accepted',
    label: 'I accept the terms and conditions',
    modelValue: ['accepted'],
    onChange: (val: CheckboxValue[]) => console.log(val),
  },
  disabled: {
    name: 'beta',
    value: 'tester',
    label: 'Beta Access (Invite only)',
    isDisabled: true,
    modelValue: [],
    onChange: (val: CheckboxValue[]) => console.log(val),
  },
};

export const checkboxGroupMockData = {
  basic: {
    name: 'skills',
    label: 'Select your skills',
    options: [
      { label: 'React', value: 'react' },
      { label: 'TypeScript', value: 'ts' },
      { label: 'Node.js', value: 'node' },
    ],
    modelValue: [],
    onChange: (val: CheckboxValue[]) => console.log(val),
  },
  preSelected: {
    name: 'notifications',
    label: 'Notification Settings',
    options: [
      { label: 'Email', value: 'email' },
      { label: 'SMS', value: 'sms' },
      { label: 'Push', value: 'push' },
    ],
    modelValue: ['email', 'push'],
    onChange: (val: CheckboxValue[]) => console.log(val),
  },
  mixed: {
    name: 'permissions',
    label: 'Project Permissions',
    options: [
      { label: 'Read', value: 'read' },
      { label: 'Write', value: 'write' },
      { label: 'Admin (restricted)', value: 'admin', disabled: true },
    ],
    modelValue: ['read'],
    onChange: (val: CheckboxValue[]) => console.log(val),
  },
};

export const radioButtonMockData = {
  standard: {
    name: 'plan',
    value: 'basic',
    label: 'Basic Plan',
    modelValue: 'pro',
    onChange: (val: RadioValue) => console.log(val),
  },
  selected: {
    name: 'plan',
    value: 'pro',
    label: 'Pro Plan (Recommended)',
    modelValue: 'pro',
    onChange: (val: RadioValue) => console.log(val),
  },
  disabled: {
    name: 'plan',
    value: 'enterprise',
    label: 'Enterprise (Contact Sales)',
    isDisabled: true,
    modelValue: 'pro',
    onChange: (val: RadioValue) => console.log(val),
  },
};

export const radioGroupMockData = {
  basic: {
    name: 'shipping',
    label: 'Shipping Method',
    options: [
      { label: 'Standard Delivery', value: 'standard' },
      { label: 'Express Delivery', value: 'express' },
      { label: 'Next Day Air', value: 'air' },
    ],
    modelValue: 'standard',
    onChange: (val: RadioValue) => console.log(val),
  },
  preSelected: {
    name: 'theme',
    label: 'Display Theme',
    options: [
      { label: 'Light Mode', value: 'light' },
      { label: 'Dark Mode', value: 'dark' },
      { label: 'System Default', value: 'system' },
    ],
    modelValue: 'dark',
    onChange: (val: RadioValue) => console.log(val),
  },
  mixed: {
    name: 'payment',
    label: 'Payment Frequency',
    options: [
      { label: 'Monthly', value: 'monthly' },
      { label: 'Yearly (Save 20%)', value: 'yearly' },
      { label: 'Lifetime Access', value: 'lifetime', disabled: true },
    ],
    modelValue: 'monthly',
    onChange: (val: RadioValue) => console.log(val),
  },
};

export const calendarFieldMockData = {
  standard: {
    calendar: [
      {
        month: 'January',
        days: [
          { day: 25, availableTime: ['10:00', '14:00'] },
          { day: 26, availableTime: ['09:00', '11:00', '16:00'] },
          { day: 30, availableTime: ['12:00'] },
        ],
      },
      {
        month: 'February',
        days: [
          { day: 1, availableTime: ['10:00'] },
          { day: 14, availableTime: ['18:00', '20:00'] },
        ],
      },
    ],
    onChange: (val: CalendarValue) => console.log('Selected:', val),
  },
  limited: {
    calendar: [
      {
        month: 'March',
        days: [{ day: 15, availableTime: ['09:00'] }],
      },
    ],
    onChange: (val: CalendarValue) => console.log('Selected:', val),
  },
};

export const buttonMockData = {
  primary: {
    type: ButtonType.Button,
    color: ButtonColor.PRIMARY,
    children: 'Primary Action',
    onClick: () => console.log('Primary clicked'),
  },
  success: {
    type: ButtonType.Button,
    color: ButtonColor.SUCCESS,
    children: 'Confirm Success',
    onClick: () => console.log('Success clicked'),
  },
  danger: {
    type: ButtonType.Button,
    color: ButtonColor.DANGER,
    children: 'Delete Item',
    onClick: () => console.log('Danger clicked'),
  },
  warning: {
    type: ButtonType.Button,
    color: ButtonColor.WARNING,
    children: 'Proceed with Caution',
    onClick: () => console.log('Warning clicked'),
  },
  gray: {
    type: ButtonType.Button,
    color: ButtonColor.GRAY,
    children: 'Secondary Action',
    onClick: () => console.log('Gray clicked'),
  },
  disabled: {
    type: ButtonType.Button,
    color: ButtonColor.PRIMARY,
    isDisabled: true,
    children: 'Disabled Button',
  },
  submit: {
    type: ButtonType.Submit,
    color: ButtonColor.PRIMARY,
    children: 'Submit Form',
  },
  loading: {
    type: ButtonType.Button,
    color: ButtonColor.PRIMARY,
    isLoading: true,
    children: 'Processing...',
  },
};

export const iconButtonMockData = {
  navigation: {
    icon: Arrow,
    ariaLabel: 'Go back',
    onClick: () => console.log('Back clicked'),
  },
  delete: {
    icon: Trash,
    ariaLabel: 'Delete item',
    className: 'icon-button--danger',
    onClick: () => console.log('Delete clicked'),
  },
  success: {
    icon: TickMark,
    ariaLabel: 'Confirm action',
    size: '48px',
    onClick: () => console.log('Confirmed'),
  },
  disabled: {
    icon: Trash,
    ariaLabel: 'Cannot delete',
    isDisabled: true,
  },
};

export const pillowMockData = {
  primary: {
    color: PillowColor.Primary,
    children: 'Primary Status',
  },
  success: {
    color: PillowColor.Success,
    children: 'Completed',
  },
  danger: {
    color: PillowColor.Danger,
    children: 'Rejected',
  },
  warning: {
    color: PillowColor.Warning,
    children: 'Pending',
  },
  info: {
    color: PillowColor.Info,
    children: 'Information',
  },
  dark: {
    color: PillowColor.Dark,
    children: 'Dark Theme',
  },
  disabled: {
    color: PillowColor.Disabled,
    children: 'Archived',
  },
  active: {
    color: PillowColor.Active,
    children: 'In Progress',
  },
};
export const tabButtonMockData = {
  active: {
    state: TabButtonState.Active,
    children: 'Active Tab',
    onClick: () => console.log('Active clicked'),
  },
  static: {
    state: TabButtonState.Static,
    children: 'Default Tab',
    onClick: () => console.log('Static clicked'),
  },
  disabled: {
    state: TabButtonState.Disabled,
    children: 'Locked Tab',
    onClick: () => console.log('Static clicked'),
  },
};

export const tabGroupMockData = {
  standard: {
    options: [
      { label: 'Profile', value: 'profile' },
      { label: 'Security', value: 'security' },
      { label: 'Notifications', value: 'notifications' },
    ],
    onUpdate: (val: TabValue) => console.log('Tab changed to:', val),
  },
  preSelected: {
    options: [
      { label: 'Overview', value: 'overview' },
      { label: 'Analytics', value: 'analytics' },
      { label: 'Reports', value: 'reports' },
    ],
    defaultOption: 'analytics',
    onUpdate: (val: TabValue) => console.log('Tab changed to:', val),
  },
  withDisabled: {
    options: [
      { label: 'General', value: 'general' },
      { label: 'Advanced', value: 'advanced' },
      { label: 'Billing (Locked)', value: 'billing', disabled: true },
    ],
    onUpdate: (val: TabValue) => console.log('Tab changed to:', val),
  },
};

export const ratingMockData = {
  integer: { children: 5 },
  float: { children: 4.7 },
  string: { children: '4.2' },
  fallback: { children: 'N/A' },
};

export const appLogoMockData = {
  horizontal: { isVertical: false },
  vertical: { isVertical: true },
};

export const appFeedbackMockData = {
  highRating: {
    feedback: {
      id: 'sth',
      rating: 5,
      text: 'An incredible experience exploring the hidden gems of the Carpathian Mountains. The guide was extremely knowledgeable!',
      user: {
        id: 'sth',
        name: 'Olena Petrenko',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
        country: 'Ukraine',
        city: 'Lviv',
      },
    },
  },
  midRating: {
    feedback: {
      id: 'sth',
      rating: 3,
      text: 'The tour was good, but I wish we had more time at the historical sites in Kyiv. Overall a solid choice for travelers.',
      user: {
        id: 'sth',

        name: 'John Smith',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
        country: 'USA',
        city: 'Chicago',
      },
    },
  },
};

export const bookingCardMockData = {
  upcoming: {
    booking: {
      id: 'bk-101',
      title: 'Guided Tour: Kyiv Pechersk Lavra',
      time: 1769853600000,
    },
    onDelete: (id: string) => console.log(`Delete booking: ${id}`),
  },
  nearFuture: {
    booking: {
      id: 'bk-202',
      title: 'Chernobyl Exclusion Zone Day Trip',
      time: 1740912000000,
    },
    onDelete: (id: string) => console.log(`Delete booking: ${id}`),
  },
};

export const lineChartMockData = {
  monthly: {
    title: 'Monthly Bookings',
    labelSet: LineChartLabelSet.MONTHS,
    data: [45, 52, 38, 65, 48, 72, 80, 95, 110, 85, 90, 120],
    color: '#3BC1A8',
    height: 250,
    grid: { x: false, y: true },
  },
  weekly: {
    title: 'User Activity',
    labelSet: LineChartLabelSet.WEEK_DAYS,
    data: [120, 150, 180, 140, 210, 250, 190],
    color: '#1055c9',
    height: 250,
    thickness: 4,
    grid: { x: true, y: true },
  },
};

export const placeCardMockData = {
  recommended: {
    place: {
      id: 'p-1',
      title: 'St. Sophia Cathedral',
      city: 'Kyiv',
      poster:
        'https://images.unsplash.com/photo-1556905200-279565513a2d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
      badges: ['recommended', 'top'],
    },
  },
  hot: {
    place: {
      id: 'p-2',
      title: 'Bukovel Ski Resort',
      city: 'Polyanytsya',
      poster:
        'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
      badges: ['hot'],
    },
  },
  simple: {
    place: {
      id: 'p-3',
      title: 'Old Town Square',
      city: 'Lviv',
      poster:
        'https://images.unsplash.com/photo-1526925528837-813a7961f5c7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.8,
      badges: [],
    },
  },
};

export const placeFeedbackMockData = {
  detailed: {
    feedback: {
      id: 'f-101',
      rating: 5,
      text: 'The view from the bell tower is absolutely breathtaking. You can see the whole of Kyiv from there. Highly recommend visiting early in the morning to avoid the crowds.',
      createdAt: 1738272000000,
      user: {
        id: 'u-1',
        name: 'Danylo Halytskyi',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
        country: 'Ukraine',
        city: 'Lviv',
      },
    },
  },
  short: {
    feedback: {
      id: 'f-102',
      rating: 4.5,
      text: 'Beautiful architecture and very peaceful atmosphere.',
      createdAt: 1738185600000,
      user: {
        id: 'u-2',
        name: 'Sarah Jenkins',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
        country: 'UK',
        city: 'London',
      },
    },
  },
};

export const placeSwiperMockData = {
  popular: {
    label: 'Popular Destinations',
    places: [
      {
        id: 'ps-1',
        title: 'Kyiv Pechersk Lavra',
        city: 'Kyiv',
        poster:
          'https://images.unsplash.com/photo-1616474648384-9e956216d1b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.9,
        badges: ['top'],
      },
      {
        id: 'ps-2',
        title: 'Lake Synevyr',
        city: 'Zakarpattia',
        poster:
          'https://images.unsplash.com/photo-1421284621639-884f4129b61d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.8,
        badges: ['recommended'],
      },
      {
        id: 'ps-3',
        title: 'Khotyn Fortress',
        city: 'Khotyn',
        poster:
          'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.7,
        badges: [],
      },
      {
        id: 'ps-4',
        title: 'Odesa Opera House',
        city: 'Odesa',
        poster:
          'https://images.unsplash.com/photo-1489914169085-9b54fdd8f2a2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.9,
        badges: ['hot'],
      },
      {
        id: 'ps-5',
        title: 'Kamianets-Podilskyi',
        city: 'Kamianets',
        poster:
          'https://images.unsplash.com/photo-1745486044145-c4329144b65f?q=80&w=2752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.8,
        badges: ['recommended'],
      },
    ],
  },
};

export const codeSnippetMockData = {
  tsx: {
    code: `
export const Welcome = ({ name }: { name: string }) => {
    return <h1>Hello, {name}!</h1>;
};
    `,
    language: 'tsx',
    filename: 'Welcome.tsx',
  },
  noFilename: {
    code: 'console.log("Showing language as fallback");',
    language: 'javascript',
  },
};
