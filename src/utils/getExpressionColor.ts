import { expressionColors } from '@/utils/expressionColors';
import { isExpressionColor } from '@/utils/isExpressionColor';

export const getExpressionColor = (
  expression: string,
  fallbackValue = 'currentColor',
  form: 'hex' | 'rgba' | 'gl' | 'hsl' = 'hex',
): string | readonly (number | null)[] => {
  return isExpressionColor(expression)
    ? expressionColors[expression][form]
    : fallbackValue;
};
