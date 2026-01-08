import UkraineFlagIcon from "@/shared/icons/Ukraine.svg";
import EnglishFlagIcon from "@/shared/icons/United-Kingdom.svg";

export enum Language {
  Ukrainian = "uk",
  English = "en",
}

export const LANGUAGE_ICON: Record<Language, string> = {
  [Language.Ukrainian]: UkraineFlagIcon,
  [Language.English]: EnglishFlagIcon,
};
