/**
 * Capitalizes the first letter of the given string.
 *
 * @param str - The string to capitalize
 * @returns The capitalized string, or an empty string if the input is falsy
 */

function capitalize (str: string): string {
  if (!str) return '';

  return str.charAt(0).toUpperCase() + str.slice(1);
}