const API_BASE_URL =
  (import.meta as any).env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? 'http://localhost:3000'

type ApiRequestOptions = RequestInit & {
  token?: string
}

export async function apiFetch<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
  const { token, headers, ...rest } = options
  const finalHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(headers as Record<string, string> | undefined)
  }

  if (token) {
    finalHeaders.Authorization = `Bearer ${token}`
  }

  let response: Response
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...rest,
      headers: finalHeaders
    })
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error)
    throw new Error(
      `Nie udało się połączyć z serwerem. Spróbuj ponownie później. Szczegóły: ${reason}`
    )
  }

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    const message = errorBody.message ?? 'Wystąpił błąd podczas komunikacji z serwerem.'
    throw new Error(message)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return (await response.json()) as T
}

export function getApiBaseUrl() {
  return API_BASE_URL
}
