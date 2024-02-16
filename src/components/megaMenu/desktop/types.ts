import { CategoryDto } from '../../../types/categories';

export interface IDestopMenuUI {
  data: CategoryDto[];
  onClick: (key: CategoryDto) => void;
}
