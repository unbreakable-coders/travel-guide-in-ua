export enum PillowColor {
  Success = "success",
  Danger = "danger",
  Warning = "warning",
}

export const PillowColorMap: Record<PillowColor, string> = {
  [PillowColor.Success]: "#22c55e",
  [PillowColor.Danger]: "#ef4444",
  [PillowColor.Warning]: "#E5BA41",
};
