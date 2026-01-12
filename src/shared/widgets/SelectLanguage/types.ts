import { Language } from "@/shared/i18n/types";
import UkraineFlagIcon from "@/shared/icons/Ukraine.svg";
import EnglishFlagIcon from "@/shared/icons/United-Kingdom.svg";

export const LANGUAGE_ICON: Record<Language, string> = {
  [Language.Ukrainian]: UkraineFlagIcon,
  [Language.English]: EnglishFlagIcon,
};
