import { expressionColors } from '@/utils/expressionColors';
import { isExpressionColor } from '@/utils/isExpressionColor';
import titleCase from 'voca/title_case';

export const getExpressionColor = (
  expression: string,
  fallbackValue = 'currentColor',
  form: 'hex' | 'rgba' | 'gl' | 'hsl' = 'hex',
): string | readonly (number | null)[] => {
  let expressionApiKey = titleCase(String(expression));
  if (expression === 'surprisePositive') {
    expressionApiKey = 'Surprise (positive)';
  }
  if (expression === 'surpriseNegative') {
    expressionApiKey = 'Surprise (negative)';
  }

  return isExpressionColor(expressionApiKey)
    ? expressionColors[expressionApiKey][form]
    : fallbackValue;
};
