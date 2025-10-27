import { useMemo } from "react";
import textContent from "../locales/en.json";

type TextPath = string;

export const useText = () => {
  const t = useMemo(() => {
    return (path: TextPath): string => {
      const keys = path.split(".");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let result: any = textContent;

      for (const key of keys) {
        if (result && typeof result === "object" && key in result) {
          result = result[key];
        } else {
          return path;
        }
      }

      return typeof result === "string" ? result : path;
    };
  }, []);

  return { t, textContent };
};
