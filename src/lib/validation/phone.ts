/**
 * Phone & WhatsApp Validation and Sanitization Module
 */

export interface PhoneValidationResult {
  isValid: boolean;
  error?: string;
  cleaned: string;
}

/**
 * Cleans phone input:
 * - Keeps leading '+' if present at the very beginning
 * - Strips all letters, spaces, slashes, hyphens, and parentheses
 * - Limits digits to max 15 (max total 16 chars with +)
 */
export function cleanPhoneNumber(val: string): string {
  if (!val) return '';
  const trimmed = val.trim();
  const hasPlus = trimmed.startsWith('+');

  // Strip all non-digit characters
  const digitsOnly = trimmed.replace(/\D/g, '').slice(0, 15);

  return hasPlus ? `+${digitsOnly}` : digitsOnly;
}

/**
 * Validates a standard phone number:
 * - Allows empty values (optional)
 * - If entered, digit count must be between 10 and 15
 */
export function validatePhoneNumber(val: string, required = false): PhoneValidationResult {
  const cleaned = cleanPhoneNumber(val);
  const digitsOnly = cleaned.replace(/\D/g, '');

  if (!digitsOnly) {
    if (required) {
      return { isValid: false, error: 'Lütfen geçerli bir telefon numarası girin.', cleaned: '' };
    }
    return { isValid: true, cleaned: '' };
  }

  if (digitsOnly.length < 10) {
    return { isValid: false, error: 'Telefon numarası en az 10 haneli olmalıdır.', cleaned };
  }

  if (digitsOnly.length > 15) {
    return { isValid: false, error: 'Telefon numarası en fazla 15 haneli olabilir.', cleaned };
  }

  return { isValid: true, cleaned };
}

/**
 * Validates a WhatsApp number:
 * - Must include country code (e.g. 905551234567)
 * - CANNOT start with 0 (e.g. 05551234567 is invalid format)
 * - Digit count between 10 and 15
 */
export function validateWhatsAppNumber(val: string, required = false): PhoneValidationResult {
  const cleaned = cleanPhoneNumber(val);
  const digitsOnly = cleaned.replace(/\D/g, '');

  if (!digitsOnly) {
    if (required) {
      return { isValid: false, error: 'Lütfen WhatsApp numaranızı girin.', cleaned: '' };
    }
    return { isValid: true, cleaned: '' };
  }

  if (digitsOnly.startsWith('0')) {
    return {
      isValid: false,
      error: 'WhatsApp numarası 0 ile başlayamaz. Lütfen ülke koduyla girin (Örn: 905551234567).',
      cleaned,
    };
  }

  if (digitsOnly.length < 10) {
    return {
      isValid: false,
      error: 'WhatsApp numarası ülke koduyla en az 10 haneli olmalıdır.',
      cleaned,
    };
  }

  if (digitsOnly.length > 15) {
    return {
      isValid: false,
      error: 'WhatsApp numarası en fazla 15 haneli olabilir.',
      cleaned,
    };
  }

  return { isValid: true, cleaned };
}

/**
 * Generates a clean tel: href string or null if invalid
 */
export function formatPhoneLink(val?: string): string | null {
  if (!val) return null;
  const validation = validatePhoneNumber(val);
  if (!validation.isValid || !validation.cleaned) return null;
  return `tel:${validation.cleaned}`;
}

/**
 * Generates a clean wa.me href string or null if invalid
 */
export function formatWhatsAppLink(val?: string, message?: string): string | null {
  if (!val) return null;
  const validation = validateWhatsAppNumber(val);
  if (!validation.isValid || !validation.cleaned) return null;

  const cleanNum = validation.cleaned.replace('+', '');
  const encodedMsg = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${cleanNum}${encodedMsg ? `?text=${encodedMsg}` : ''}`;
}
