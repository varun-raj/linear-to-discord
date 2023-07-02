import { ILinearUpdateData, IIssueData, ILinearData } from "@/@types";
import { UPDATABLE_FIELDS } from "@/config/appConstants";

const findUpdatedField = (data: ILinearUpdateData<IIssueData>) => {
  const { updatedFrom } = data;
  const updatedField = UPDATABLE_FIELDS.find((fieldItem) => {
    // @ts-ignore
    return updatedFrom?.[fieldItem.key];
  });
  if (updatedField) {
    return {
      ...updatedField,
      // @ts-ignore
      newData: data.data[updatedField.key],
    }
  } else {
    return null;
  }
}

export const titleUpdateParser = (data: ILinearUpdateData<IIssueData>): string => {
  const { data: issue, url, updatedFrom } = data;
  const { title } = issue;
    return `Title updated from *${updatedFrom?.title}* to [${title}](${url})`;
}

export const stateUpdateParser = (data: ILinearUpdateData<IIssueData>): string => {
  const { data: issue, url } = data;
  const { state } = issue;
  const { name } = state;
  return `[${issue.title}](${url}) status updated to **${name}**`;
}

export const labelUpdateParser = (data: ILinearUpdateData<IIssueData>): string => {
  const { data: issue, url, updatedFrom } = data;
  if (!updatedFrom) return `Label updated for [${issue.title}](${url})`;
  const { labelIds: oldLabelIds  } = updatedFrom
  const { labelIds: newLabelIds, labels } = issue;
  const addedLabelId = newLabelIds.find((id) => !oldLabelIds.includes(id));
  const removedLabelId = oldLabelIds.find((labelId: string) => !newLabelIds.includes(labelId));
  if (addedLabelId) {
    const addedLabel = labels.find((label) => label.id === addedLabelId);
    return `Label *${addedLabel?.name}* added to [${issue.title}](${url})`;
  } else if (removedLabelId) {
    const latestLabels = labels.map((label) => label.name).join(", ");
    return `Issue [${issue.title}](${url}) labels update to *${latestLabels}*`;
  }
  return `Label updated for [${issue.title}](${url})`;
}

export const assigneeUpdateParser = (data: ILinearUpdateData<IIssueData>): string => {
  const { data: issue, url } = data;
  const { assignee, assigneeId } = issue;
  const { name } = assignee;
  if (!assigneeId) {
    return `Issue's [${issue.title}](${url}) assigned to ${name}`;
  } else {
    return `Issue's [${issue.title}](${url}) unassigned`;
  }
}

export const createIssueParser = (data: ILinearData<IIssueData>) => {
  const { data: issue, url } = data;
  const { title } = issue;
  return `New issue created: [${title}](${url})`;
}

export const updateIssueParser = (data: ILinearData<IIssueData>) => {
  const { data: issue, url } = data;
  const { title } = issue;
  const updatedField = findUpdatedField(data);
  switch (updatedField?.key) {
    case "title": return titleUpdateParser(data)
    case "stateId": return stateUpdateParser(data)
    case "assigneeId": return assigneeUpdateParser(data)
    case "labelIds": return labelUpdateParser(data)
    default: return `Issue [${title}](${url}) updated`;
  }
}
