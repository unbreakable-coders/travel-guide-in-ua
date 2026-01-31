export const formFieldSnippets = {
  text: `
<FormField
    name="username"
    label="Username"
    placeholder="Enter your username"
    value={value}
    onChange={setValue}
/>
  `,
  disabled: `
<FormField
    name="email"
    placeholder: 'Enter your email',
    label="Email Address"
    value="user@example.com"
    isDisabled
/>
  `,
  password: `
<FormField
    name="password"
    type="password"
    placeholder="Enter password"
    ariaLabel="Password field"
    value={value}
    onChange={setValue}
/>
  `,
};

export const passwordFieldSnippets = {
  standard: `
<PasswordField
    name="user_password"
    label="Account Password"
    placeholder="Minimum 8 characters"
    value={password}
    onChange={setPassword}
/>
  `,
  disabled: `
<PasswordField
    name="locked_password"
    label="Old Password"
    value="secret123"
    isDisabled
/>
  `,
  ariaOnly: `
<PasswordField
    name="security_code"
    placeholder="Enter security code"
    ariaLabel="Secure access code"
    value={code}
    onChange={setCode}
/>
  `,
};

export const textAreaFieldSnippets = {
  standard: `
<TextAreaField
    name="description"
    label="Project Description"
    placeholder="Briefly describe your project goals..."
    height="150px"
    onChange={setValue}
/>
  `,
  customHeight: `
<TextAreaField
    name="feedback"
    label="Detailed Feedback"
    placeholder="Write your thoughts here..."
    height="150px"
    onChange={setValue}
/>
  `,
  disabled: `
<TextAreaField
    name="notes"
    label="Archived Notes"
    isDisabled
    height="150px"
    onChange={setValue}
/>
  `,
};

export const selectFieldSnippets = {
  standard: `
<SelectField
    name="category"
    label="Category"
    options={[
        { label: 'Development', value: 'dev' },
        { label: 'Design', value: 'design' },
        { label: 'Marketing', value: 'marketing' }
    ]}
    modelValue={value}
    onChange={setValue}
/>
  `,
  withIcons: `
<SelectField
    name="language"
    label="Select Language"
    options={[
        { label: 'Ukrainian', value: 'ua', icon: Ukraine },
        { label: 'English', value: 'en', icon: UnitedKingdom }
    ]}
    modelValue={value}
    onChange={setValue}
/>
  `,
  disabled: `
<SelectField
    name="country"
    label="Country (Locked)"
    options={[{ label: 'Ukraine', value: 'ua', icon: Ukraine }]}
    modelValue="ua"
    isDisabled
/>
  `,
};

export const checkboxButtonSnippets = {
  standard: `
<CheckboxButton
    name="preferences"
    value="newsletter"
    label="Subscribe to newsletter"
    modelValue={selectedValues}
    onChange={setSelectedValues}
/>
  `,
  checked: `
<CheckboxButton
    name="terms"
    value="accepted"
    label="I accept the terms and conditions"
    modelValue={['accepted']}
    onChange={setSelectedValues}
/>
  `,
  disabled: `
<CheckboxButton
    name="beta"
    value="tester"
    label="Beta Access (Invite only)"
    isDisabled
    modelValue={[]}
    onChange={setSelectedValues}
/>
  `,
};

export const checkboxGroupSnippets = {
  basic: `
<CheckboxGroup
    name="skills"
    label="Select your skills"
    options={[
        { label: 'React', value: 'react' },
        { label: 'TypeScript', value: 'ts' },
        { label: 'Node.js', value: 'node' }
    ]}
    modelValue={selectedSkills}
    onChange={setSelectedSkills}
/>
  `,
  preSelected: `
<CheckboxGroup
    name="notifications"
    label="Notification Settings"
    options={[
        { label: 'Email', value: 'email' },
        { label: 'SMS', value: 'sms' },
        { label: 'Push', value: 'push' }
    ]}
    modelValue={['email', 'push']}
    onChange={setNotifications}
/>
  `,
  mixed: `
<CheckboxGroup
    name="permissions"
    label="Project Permissions"
    options={[
        { label: 'Read', value: 'read' },
        { label: 'Write', value: 'write' },
        { label: 'Admin (restricted)', value: 'admin', disabled: true }
    ]}
    modelValue={selectedPerms}
    onChange={setSelectedPerms}
/>
  `,
};

export const radioButtonSnippets = {
  standard: `
<RadioButton
    name="plan"
    value="basic"
    label="Basic Plan"
    modelValue={selectedPlan}
    onChange={setSelectedPlan}
/>
  `,
  selected: `
<RadioButton
    name="plan"
    value="pro"
    label="Pro Plan (Recommended)"
    modelValue="pro"
    onChange={setSelectedPlan}
/>
  `,
  disabled: `
<RadioButton
    name="plan"
    value="enterprise"
    label="Enterprise (Contact Sales)"
    isDisabled
    modelValue={selectedPlan}
    onChange={setSelectedPlan}
/>
  `,
};

export const radioGroupSnippets = {
  basic: `
<RadioGroup
    name="shipping"
    label="Shipping Method"
    options={[
        { label: 'Standard Delivery', value: 'standard' },
        { label: 'Express Delivery', value: 'express' },
        { label: 'Next Day Air', value: 'air' }
    ]}
    modelValue={selectedShipping}
    onChange={setSelectedShipping}
/>
  `,
  preSelected: `
<RadioGroup
    name="theme"
    label="Display Theme"
    options={[
        { label: 'Light Mode', value: 'light' },
        { label: 'Dark Mode', value: 'dark' },
        { label: 'System Default', value: 'system' }
    ]}
    modelValue="dark"
    onChange={setTheme}
/>
  `,
  mixed: `
<RadioGroup
    name="payment"
    label="Payment Frequency"
    options={[
        { label: 'Monthly', value: 'monthly' },
        { label: 'Yearly (Save 20%)', value: 'yearly' },
        { label: 'Lifetime Access', value: 'lifetime', disabled: true }
    ]}
    modelValue={selectedPayment}
    onChange={setSelectedPayment}
/>
  `,
};

export const calendarFieldSnippets = {
  standard: `
<CalendarField
    calendar={[
        {
            month: 'January',
            days: [
                { day: 25, availableTime: ['10:00', '14:00'] },
                { day: 26, availableTime: ['09:00', '11:00', '16:00'] }
            ]
        },
        {
          month: 'February',
            days: [
               { day: 1, availableTime: ['10:00'] }
            ]
        }
    ]}
    onChange={(value) => handleDateSelection(value)}
/>
  `,
  limited: `
<CalendarField
    calendar={[
        {
            month: 'March',
            days: [{ day: 15, availableTime: ['09:00'] }]
        }
    ]}
    onChange={(value) => handleDateSelection(value)}
/>
  `,
};

export const buttonSnippets = {
  primary: `
<Button 
    color={ButtonColor.PRIMARY} 
    onClick={handleClick}
>
    Primary Action
</Button>
  `,
  success: `
<Button 
    color={ButtonColor.SUCCESS} 
    onClick={handleClick}
>
    Save Changes
</Button>
  `,
  danger: `
<Button 
    color={ButtonColor.DANGER} 
    onClick={handleClick}
>
    Delete Record
</Button>
  `,
  warning: `
<Button 
    color={ButtonColor.WARNING} 
    onClick={handleClick}
>
    Update Settings
</Button>
  `,
  gray: `
<Button 
    color={ButtonColor.GRAY} 
    onClick={handleClick}
>
    Secondary Action
</Button>
  `,
  disabled: `
<Button 
    color={ButtonColor.PRIMARY} 
    isDisabled
>
    Disabled Button
</Button>
  `,
  loading: `
<Button 
    color={ButtonColor.PRIMARY} 
    isLoading
>
    Loading...
</Button>
  `,
  submit: `
<Button 
    type={ButtonType.Submit}
    color={ButtonColor.PRIMARY}
>
    Submit Form
</Button>
  `,
};

export const iconButtonSnippets = {
  navigation: `
<IconButton 
    icon={Arrow} 
    ariaLabel="Go back" 
    onClick={handleBack} 
/>
  `,
  delete: `
<IconButton 
    icon={Trash} 
    ariaLabel="Delete item" 
    className="icon-button--danger"
    onClick={handleDelete} 
/>
  `,
  success: `
<IconButton 
    icon={TickMark} 
    ariaLabel="Confirm action" 
    size="48px" 
    onClick={handleConfirm} 
/>
  `,
  disabled: `
<IconButton 
    icon={Trash} 
    ariaLabel="Cannot delete" 
    isDisabled 
/>
  `,
};

export const pillowSnippets = {
  primary: `
<Pillow color={PillowColor.Primary}>
    Primary Status
</Pillow>
  `,
  success: `
<Pillow color={PillowColor.Success}>
    Completed
</Pillow>
  `,
  danger: `
<Pillow color={PillowColor.Danger}>
    Rejected
</Pillow>
  `,
  warning: `
<Pillow color={PillowColor.Warning}>
    Pending
</Pillow>
  `,
  info: `
<Pillow color={PillowColor.Info}>
    Information
</Pillow>
  `,
  dark: `
<Pillow color={PillowColor.Dark}>
    Dark Theme
</Pillow>
  `,
  disabled: `
<Pillow color={PillowColor.Disabled}>
    Archived
</Pillow>
  `,
  active: `
<Pillow color={PillowColor.Active}>
    In Progress
</Pillow>
  `,
};

export const tabButtonSnippets = {
  active: `
<TabButton state="active" onClick={handleClick}>
    Active Tab
</TabButton>
  `,
  static: `
<TabButton state="static" onClick={handleClick}>
    Default Tab
</TabButton>
  `,
  disabled: `
<TabButton state="disabled">
    Locked Tab
</TabButton>
  `,
};

export const tabGroupSnippets = {
  standard: `
<TabGroup
    options={[
        { label: 'Profile', value: 'profile' },
        { label: 'Security', value: 'security' },
        { label: 'Notifications', value: 'notifications' }
    ]}
    onUpdate={handleTabChange}
/>
  `,
  preSelected: `
<TabGroup
    options={[
        { label: 'Overview', value: 'overview' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Reports', value: 'reports' }
    ]}
    defaultOption="analytics"
    onUpdate={handleTabChange}
/>
  `,
  withDisabled: `
<TabGroup
    options={[
        { label: 'General', value: 'general' },
        { label: 'Advanced', value: 'advanced' },
        { label: 'Billing (Locked)', value: 'billing', disabled: true }
    ]}
    onUpdate={handleTabChange}
/>
  `,
};

export const ratingSnippets = {
  integer: `
<Rating>5</Rating>
  `,
  float: `
<Rating>4.7</Rating>
  `,
  string: `
<Rating>4.2</Rating>
  `,
  fallback: `
<Rating>0</Rating>
  `,
};

export const appLogoSnippets = {
  horizontal: `
<AppLogo />
  `,
  vertical: `
<AppLogo isVertical />
  `,
};

export const appFeedbackSnippets = {
  usage: `
<AppFeedback 
    feedback={{
        rating: 5,
        text: "An incredible experience exploring the hidden gems...",
        user: {
            name: "Olena Petrenko",
            avatar: "/avatar-path.jpg",
            country: "Ukraine",
            city: "Lviv"
        }
    }} 
/>
  `,
};

export const bookingCardSnippets = {
  usage: `
<BookingCard 
    booking={{
        id: "bk-123",
        title: "Guided Tour: Kyiv Pechersk Lavra",
        time: 1769853600000
    }} 
    onDelete={(id) => handleRemove(id)}
/>
  `,
};

export const lineChartSnippets = {
  monthly: `
<LineChart
    title="Monthly Bookings"
    labelSet: LineChartLabelSet.MONTHS,
    data={[45, 52, 38, 65, 48, 72, 80, 95, 110, 85, 90, 120]}
    color="#3BC1A8"
    height={250}
    grid={{ x: false, y: true }}
/>
  `,
  weekly: `
<LineChart
    title="User Activity"
    labelSet: LineChartLabelSet.WEEK_DAYS,
    data={[120, 150, 180, 140, 210, 250, 190]}
    color="#1055c9"
    thickness={4}
/>
  `,
};

export const placeCardSnippets = {
  usage: `
<PlaceCard 
    place={{
        id: "p-1",
        title: "St. Sophia Cathedral",
        city: "Kyiv",
        poster: "/cathedral.jpg",
        rating: 4.9,
        badges: ["recommended", "top"]
    }} 
/>
  `,
};

export const placeFeedbackSnippets = {
  usage: `
<PlaceFeedback 
    feedback={{
        id: "f-101",
        rating: 5,
        text: "The view from the bell tower is absolutely breathtaking...",
        user: {
            id: "u-1",
            name: "Danylo Halytskyi",
            avatar: "/avatar.jpg",
            country: "Ukraine",
            city: "Lviv"
        },
        createdAt: 1738272000000
    }} 
/>
  `,
};

export const placeSwiperSnippets = {
  usage: `
<PlaceSwiper
    label="Popular Destinations"
    places={[
        {
            id: "ps-1",
            title: "Kyiv Pechersk Lavra",
            city: "Kyiv",
            poster: "/lavra.jpg",
            rating: 4.9,
            badges: ["top"]
        },
        {
            id: "ps-2",
            title: "Lake Synevyr",
            city: "Zakarpattia",
            poster: "/synevyr.jpg",
            rating: 4.8,
            badges: ["recommended"]
        }
    ]}
/>
  `,
};

export const codeSnippetSnippets = {
  usage: `
<CodeSnippet 
    code={sourceCodeString} 
    language="tsx" 
    filename="Component.tsx" 
/>
  `,
};
