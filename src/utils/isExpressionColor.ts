import { expressionColors } from '@/utils/expressionColors';

export function isExpressionColor(
  s: string | number | symbol,
): s is keyof typeof expressionColors {
  return s in expressionColors;
}
