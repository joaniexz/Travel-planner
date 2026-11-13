import { APP_CONFIG } from '@/lib/config';

type LogPayload = Record<string, unknown>;

function sanitizeValue(value: unknown): unknown {
  if (value === null || value === undefined) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(sanitizeValue);
  }

  if (typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const sanitized: Record<string, unknown> = {};

    for (const [key, entry] of Object.entries(record)) {
      if ((APP_CONFIG.logging.stripInlineDataKeys as readonly string[]).includes(key)) {
        sanitized[key] = '[stripped-inline-data]';
      } else {
        sanitized[key] = sanitizeValue(entry);
      }
    }
    return sanitized;
  }

  return value;
}

export function logFunctionCall(functionName: string, params?: LogPayload): void {
  if (!APP_CONFIG.logging.enableInfoLogging) {
    return;
  }

  const safeParams = params ? sanitizeValue(params) : {};
  console.info(`[fn:call] ${functionName}`, safeParams);
}

export function logGenAICall(details: {
  model: string;
  prompt: unknown;
  config?: unknown;
  output?: unknown;
}): void {
  if (!APP_CONFIG.logging.enableInfoLogging) {
    return;
  }

  console.info('[genai:call]', {
    model: details.model,
    prompt: sanitizeValue(details.prompt),
    config: sanitizeValue(details.config),
    output: sanitizeValue(details.output),
  });
}
