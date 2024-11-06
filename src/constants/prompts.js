const COMMON_PROMPT = 'Follow this strictly: Do not exceed 160 characters. Do not add special (unicode) characters.';

export const PROMPT_MAPPING = {
  ['shorter']: `${COMMON_PROMPT}. Objective: Paraphrase the given message to be shorter than the original, ensuring the tone remains sweet, warm, and friendly. If the original message is 20 characters or less and cannot be shortened further, return the original message as is. Tone: Use sweet, gentle, and kind language to convey a warm, friendly tone. Clarity: Preserve the main idea, ensuring it\'s clear and easy to understand. Do not add any placeholders, and remove any placeholders not found in the original message. Do not add any emojis, and remove any placeholders not found in the original message.  Creativity: Choose gentle and warm wording to make the message sound friendly and kind.`,
  ['upbeat']: `${COMMON_PROMPT}. Make the following message upbeat, using upbeating language to cheer someone up. Ensure the main idea remains clear and easy to understand. Do not add any placeholders, and remove any placeholders not found in the original message. Do not add any emojis, and remove any placeholders not found in the original message.`,
  ['formal']: `${COMMON_PROMPT}. Make the following message formal, using formal language to help the customer feel respected. Ensure the main idea remains clear and easy to understand. Do not add any placeholders, and remove any placeholders not found in the original message. Do not add any emojis, and remove any placeholders not found in the original message.`,
  ['genzify']: `${COMMON_PROMPT}. Make the following message genZified, using genZ language to help the customer feel something new. Ensure the main idea remains clear and easy to understand. Do not add any placeholders, and remove any placeholders not found in the original message. Do not add any emojis, and remove any placeholders not found in the original message.`,
  ['funny']: `${COMMON_PROMPT}. Make the following message funny, using humorous language to bring a smile or laugh. Ensure the main idea remains clear and easy to understand. Do not add any placeholders, and remove any placeholders not found in the original message. Do not add any emojis, and remove any placeholders not found in the original message.`,
  ['sanitize']: `Shorten the message within 150 characters. Remove any characters not on this list: '@', 'Δ', ' ', '0', '¡', 'P', '¿', 'p', '£', '_', '!', '1', 'A', 'Q', 'a', 'q', '$', 'Φ', '"', '2', 'B', 'R', 'b', 'r', '¥', 'Γ', '#', '3', 'C', 'S', 'c', 's', 'è', 'Λ', '¤', '4', 'D', 'T', 'd', 't', 'é', 'Ω', '%', '5', 'E', 'U', 'e', 'u', 'ù', 'Π', '&', '6', 'F', 'V', 'f', 'v', 'ì', 'Ψ', '\'', '7', 'G', 'W', 'g', 'w', 'ò', 'Σ', '(', '8', 'H', 'X', 'h', 'x', 'Ç', 'Θ', ')', '9', 'I', 'Y', 'i', 'y', "\n", 'Ξ', '*', ':', 'J', 'Z', 'j', 'z', 'Ø', "\x1B", '+', ';', 'K', 'Ä', 'k', 'ä', 'ø', 'Æ', ',', '<', 'L', 'Ö', 'l', 'ö', "\r", 'æ', '-', '=', 'M', 'Ñ', 'm', 'ñ', 'Å', 'ß', '.', '>', 'N', 'Ü', 'n', 'ü', 'å', 'É', '/', '?', 'O', '§', 'o', 'à'`
}