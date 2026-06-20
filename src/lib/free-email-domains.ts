// Common free/personal email providers — blocked for job posting verification
const FREE_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.ca', 'yahoo.co.uk',
  'hotmail.com', 'hotmail.ca', 'outlook.com', 'outlook.ca', 'live.com',
  'msn.com', 'icloud.com', 'me.com', 'mac.com', 'aol.com', 'protonmail.com',
  'proton.me', 'tutanota.com', 'zoho.com', 'yandex.com', 'mail.com',
  'inbox.com', 'fastmail.com', 'hey.com',
])

export function isCompanyEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase()
  if (!domain) return false
  return !FREE_DOMAINS.has(domain)
}

export function getEmailDomain(email: string): string {
  return email.split('@')[1]?.toLowerCase() || ''
}
