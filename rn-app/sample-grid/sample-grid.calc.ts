import { GridItem } from './grid-model';

export function convertCategoryListToGrid(
  categoryList: GridItem[],
  maxRowItems: number
): (GridItem | 'CATEGORY_MANAGEMENT' | 'EMPTY')[][] {
  const listWithCategoryManagement: (GridItem | 'CATEGORY_MANAGEMENT' | 'EMPTY')[] = [
    ...categoryList,
    'CATEGORY_MANAGEMENT',
  ];
  const result: (GridItem | 'CATEGORY_MANAGEMENT' | 'EMPTY')[][] = [];

  for (let i = 0; i < listWithCategoryManagement.length; i += maxRowItems) {
    const rows = listWithCategoryManagement.slice(i, i + maxRowItems);

    if (rows.length < maxRowItems) {
      const paddings: (GridItem | 'CATEGORY_MANAGEMENT' | 'EMPTY')[] = Array(
        maxRowItems - rows.length
      ).fill('EMPTY');
      result.push([...rows, ...paddings]);
    } else {
      result.push(rows);
    }
  }

  return result;
}

export function findCategoryRowInGrid(
  category: GridItem,
  grid: (GridItem | 'CATEGORY_MANAGEMENT' | 'EMPTY')[][]
): number | null {
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];

    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      if (item !== 'CATEGORY_MANAGEMENT' && item !== 'EMPTY' && item.name === category.name) {
        return i;
      }
    }
  }

  return null;
}
