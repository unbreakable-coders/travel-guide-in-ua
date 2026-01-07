export const InputType = {
  Text: "text",
  Number: "number",
  Password: "password",
  Email: "email",
} as const;

export type InputType = (typeof InputType)[keyof typeof InputType];
