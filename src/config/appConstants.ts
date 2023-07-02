import { IIssueFields } from "@/@types";

export const UPDATABLE_FIELDS: {
  key: IIssueFields,
  label: string,
}[] = [
  { key: 'title', label: 'Title' },
  { key: 'description', label: 'Description' },
  { key: 'priority', label: 'Priority' },
  { key: 'stateId', label: 'State' },
  { key: 'teamId', label: 'Team' },
  { key: 'labelIds', label: 'Labels' },
  { key: 'assigneeId', label: 'Assignee' },
  { key: 'parentIssueId', label: 'Parent Issue' },
  { key: 'startDate', label: 'Start Date' },
  { key: 'dueDate', label: 'Due Date' },
  { key: 'estimate', label: 'Estimate' },
];

export const ERRORS = {
  UNKNOWN_ACTION: 'UNKNOWN_ACTION',
}