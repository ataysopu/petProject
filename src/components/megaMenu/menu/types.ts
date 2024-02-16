import { CategoryDto } from '../../../types/categories';

export interface IMenuUI {
  name: string;
  data: CategoryDto[];
  onClick: (key: CategoryDto) => void;
  onMouserEnter: (key: CategoryDto) => void;
}
