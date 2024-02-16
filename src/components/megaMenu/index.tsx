import React from 'react';
import { IMegaMenu } from './types';
import { URLS } from '../../routes/urls';
import { Menu, MenuHeader, MenuTitle, PrevStep, TopDark, Wrapper } from './styled';
import { IconChevron } from '../icons/chevron';
import { useDeviceDetected } from '../../core/hooks/useDeviceDetected';
import { CategoryDto } from '../../types/categories';
import { MenuUI } from './menu';
import { DestopMenuUI } from './desktop';
// import { useGetListCategories } from '../../core/hooks/redux/useGetListCategories';

export const MegaMenu: React.FC<IMegaMenu> = React.memo(({ hideTopDark, handleClose }) => {
  // const history = useHistory();
  const isMobile = useDeviceDetected();
  // const { categories } = useGetListCategories({ level: 1 });

  const [step, setStep] = React.useState<number>(0);
  const [names, setNames] = React.useState<{ [key: number]: string }>([]);
  const [categoryList, setCategoryList] = React.useState<{ [key: number]: CategoryDto[] }>([]);
  const [categoryDesktopList, setCategoryDesktopList] = React.useState<CategoryDto[]>();

  // React.useEffect(() => {
  //   if (categories) {
  //     setCategoryList({ [step]: categories });
  //   }
  // }, [categories]);

  React.useEffect(() => {
    if (!isMobile) {
      setStep(0);
    }
  }, [isMobile]);

  const handlePrev = () => {
    const prevStep = step - 1;
    setStep(prevStep);
    return prevStep;
  };

  const handleNext = () => {
    const nextStep = step + 1;
    setStep(nextStep);
    return nextStep;
  };

  const onMouserEnter = (item: CategoryDto) => {
    if (!isMobile) {
      setNames({ ...names, [step]: item.name });
      setCategoryDesktopList(item.children);
    }
  };

  // const goToPage = (url: string) => {
  //   handleClose();
  //   return history.push(url);
  // };

  // const handleClick = (item: CategoryDto) => {
  //   if ((!isMobile && item.level === 1) || item.level === 3) {
  //     const url = item.level === 1 ? Links.Category(item.slug) : Links.Catalog;
  //     return goToPage(url);
  //   }
  //
  //   return handleList(item);
  // };

  const handleList = (item: CategoryDto) => {
    const nextStep = handleNext();
    setNames({ ...names, [nextStep]: item.name });
    setCategoryList({ ...categoryList, [nextStep]: item.children });
  };

  return (
    <Wrapper>
      {hideTopDark && <TopDark />}
      <Menu>
        {isMobile && (
          <MenuHeader>
            <MenuTitle variant="subtitleA">{names[step] || 'Каталог'}</MenuTitle>
            {step > 0 && (
              <PrevStep onClick={() => handlePrev()}>
                <IconChevron direction="left" />
              </PrevStep>
            )}
          </MenuHeader>
        )}
        {/*<MenuUI data={categoryList[step]} name={names[step]} onClick={handleClick} onMouserEnter={onMouserEnter} />*/}
      </Menu>
      {/*{!isMobile && categoryDesktopList && <DestopMenuUI data={categoryDesktopList} onClick={handleClick} />}*/}
    </Wrapper>
  );
});
