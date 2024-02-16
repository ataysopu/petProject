import React from 'react';
import { SvgWrapper } from './styled';

interface IProgressProps<T> {
  refElement: T;
  svgSize?: number;
}

export const Progress = <T extends unknown>({ refElement, svgSize }: IProgressProps<T>) => {
  const [progress, setProgress] = React.useState<number>(233);
  const el = refElement && (refElement as T[]);
  const count =
    el &&
    Array.from(el)
      .map((item: T) => item)
      .filter((i: any) => i.value !== '');

  React.useEffect(() => {
    if (refElement) {
      const EmptyRoundProgress = 233;
      const countField = 5;
      const percentOneFiled = EmptyRoundProgress / countField;
      setProgress(EmptyRoundProgress - percentOneFiled * count?.length);
    }
  }, [count, refElement]);

  return (
    <SvgWrapper progress={progress} svgSize={svgSize}>
      <svg viewBox="0 0 100 100">
        <path
          className="grey"
          fill="none"
          d="M40,90
             A40,40 0 1,1 60,90"
        />
        <path
          className="purple"
          fill="none"
          d="M40,90
             A40,40 0 1,1 60,90"
        />
      </svg>
    </SvgWrapper>
  );
};
