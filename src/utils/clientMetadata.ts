export interface ClientMetadata {
  language?: string
  country?: string
  deviceType?: string
  browserName?: string
  browserVersion?: string
  osName?: string
  osVersion?: string
  userAgent?: string
}

export const gatherClientMetadata = (): ClientMetadata => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return {}
  }

  const userAgent = navigator.userAgent ?? ''
  const languageRaw = navigator.language || navigator.languages?.[0]
  const language = languageRaw ? languageRaw.split('-')[0]?.toLowerCase() : undefined
  const country =
    languageRaw && languageRaw.includes('-')
      ? languageRaw.split('-')[1]?.toUpperCase()
      : undefined

  const deviceType = detectDeviceType(userAgent)
  const { name: browserName, version: browserVersion } = detectBrowser(userAgent)
  const { name: osName, version: osVersion } = detectOs(userAgent)

  return {
    language,
    country,
    deviceType,
    browserName,
    browserVersion,
    osName,
    osVersion,
    userAgent
  }
}

const detectDeviceType = (ua: string): string | undefined => {
  const lowered = ua.toLowerCase()
  if (/ipad|tablet/.test(lowered)) {
    return 'Tablet'
  }
  if (/mobi|iphone|android/.test(lowered)) {
    return 'Mobile'
  }
  if (!ua) {
    return undefined
  }
  return 'Desktop'
}

const detectBrowser = (ua: string): { name?: string; version?: string } => {
  const match = (regex: RegExp) => ua.match(regex)?.[1]
  if (/edg\//i.test(ua)) {
    return { name: 'Edge', version: match(/edg\/([\d.]+)/i) }
  }
  if (/opr\//i.test(ua)) {
    return { name: 'Opera', version: match(/opr\/([\d.]+)/i) }
  }
  if (/chrome\//i.test(ua) && !/edg\//i.test(ua) && !/opr\//i.test(ua)) {
    return { name: 'Chrome', version: match(/chrome\/([\d.]+)/i) }
  }
  if (/safari/i.test(ua) && /version\//i.test(ua) && !/chrome\//i.test(ua)) {
    return { name: 'Safari', version: match(/version\/([\d.]+)/i) }
  }
  if (/firefox\//i.test(ua)) {
    return { name: 'Firefox', version: match(/firefox\/([\d.]+)/i) }
  }
  return {}
}

const detectOs = (ua: string): { name?: string; version?: string } => {
  if (/windows nt/i.test(ua)) {
    const versionRaw = ua.match(/windows nt ([\d.]+)/i)?.[1]
    return { name: 'Windows', version: mapWindowsVersion(versionRaw) }
  }
  if (/android/i.test(ua)) {
    const version = ua.match(/android ([\d.]+)/i)?.[1]
    return { name: 'Android', version }
  }
  if (/(iphone|ipad|ipod)/i.test(ua)) {
    const version = ua.match(/os ([\d_]+)/i)?.[1]?.replace(/_/g, '.')
    return { name: 'iOS', version }
  }
  if (/mac os x/i.test(ua)) {
    const version = ua.match(/mac os x ([\d_]+)/i)?.[1]?.replace(/_/g, '.')
    return { name: 'macOS', version }
  }
  if (/linux/i.test(ua)) {
    return { name: 'Linux' }
  }
  return {}
}

const mapWindowsVersion = (versionRaw?: string) => {
  if (!versionRaw) {
    return undefined
  }
  const map: Record<string, string> = {
    '5.1': 'XP',
    '6.0': 'Vista',
    '6.1': '7',
    '6.2': '8',
    '6.3': '8.1',
    '10.0': '10/11'
  }
  return map[versionRaw] ?? versionRaw
}
