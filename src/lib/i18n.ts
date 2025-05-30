import { defaultStrings } from './locales/en';

/**
 * For now, we only have one language (English).
 * In a real i18n setup, this module would handle locale detection and selection
 * to provide strings in the appropriate language.
 */
export const strings = defaultStrings;

/**
 * A simple string interpolation function.
 * It replaces placeholders in a string with provided values.
 * Placeholders are expected in the format `{key}`.
 *
 * @param str The string template with placeholders.
 * @param values An optional object mapping keys (placeholders) to their replacement values.
 * @returns The interpolated string. If a placeholder is not found in values, it remains unchanged.
 *
 * @example
 * t("Hello, {name}!", { name: "World" }) // "Hello, World!"
 * t("Score: {score}", { score: 10 })    // "Score: 10"
 */
export function t(str: string, values?: Record<string, string | number>): string {
  if (!values) {
    return str;
  }
  return str.replace(/\{(\w+)\}/g, (match, key) => {
    return values.hasOwnProperty(key) ? String(values[key]) : match;
  });
}
