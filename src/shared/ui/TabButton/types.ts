export const TabButtonState = {
  Static: "static",
  Active: "active",
  Disabled: "disabled",
} as const;

export type TabButtonState = (typeof TabButtonState)[keyof typeof TabButtonState];
