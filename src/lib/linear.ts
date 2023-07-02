import type { ILinearData } from '@/@types';
import { ERRORS } from '@/config/appConstants';

import { createCommentParser } from './linearActions/commentChanges';
import {
  createIssueParser,
  updateIssueParser,
} from './linearActions/issueChanges';

export const parseData = (data: ILinearData<any>): string => {
  const { action, type } = data;
  switch (action) {
    case 'create':
      if (type === 'Issue') return createIssueParser(data);
      if (type === 'Comment') return createCommentParser(data);
      return ERRORS.UNKNOWN_ACTION;
    case 'update':
      if (type === 'Issue') return updateIssueParser(data);
      return ERRORS.UNKNOWN_ACTION;
    default:
      return ERRORS.UNKNOWN_ACTION;
  }
};
