import UkraineFlagIcon from "@/shared/icons/Ukraine.svg";
import EnglishFlagIcon from "@/shared/icons/United-Kingdom.svg";

export enum Language {
  Ukrainian = "uk",
  English = "en",
}

export const LanguageIcon: Record<Language, string> = {
  [Language.Ukrainian]: UkraineFlagIcon,
  [Language.English]: EnglishFlagIcon,
};
