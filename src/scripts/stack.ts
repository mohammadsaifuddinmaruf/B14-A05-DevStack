export function addTechnology(selectedIds: string[], technologyId: string): string[] {
  return selectedIds.includes(technologyId)
    ? selectedIds
    : [...selectedIds, technologyId];
}

export function removeTechnology(selectedIds: string[], technologyId: string): string[] {
  return selectedIds.filter((id) => id !== technologyId);
}

export function clearStack(): string[] {
  return [];
}

export function getStackCountLabel(count: number): string {
  return `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected`;
}
