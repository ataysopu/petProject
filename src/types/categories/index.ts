import { ImageDto } from '../images';

/**
 * В данном файле хранятся Dto для категории
 */

export type CategoryDto = {
  id: number;
  name: string;
  slug: string;
  level: number;
  position: number;
  parent: CategoryParentDto | null;
  description: string;
  is_visible: boolean;
  image: ImageDto;
  children: CategoryDto[] | [];
};

export type CategoryParentDto = {
  id: number;
  slug: string;
};

export type CategoryQueryDto = {
  level?: string | number;
};
