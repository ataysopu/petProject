import { ComponentType, TypographyType, VARIANTS } from './types';
import React from 'react';
import { BREAKEPOINTS } from '../../core/config/breakpoints';
import { Component } from './styled';
import { useWindowSize } from '../../core/hooks/useWindowSize';


/**
 * This component is for creating title
 *
 * @param variant and variantOnMobile default div </br> or one of h1|h2|h3|h4|subtitleA|subtitleB|bodyA|bodyB|caption
 * @param children any text node
 */

export const Typography: React.FC<TypographyType> = React.memo(
  ({ tag, variant, variantOnMobile, color, children, ...props }) => {
    const window = useWindowSize();
    const selectedVariant = React.useMemo(
      () => (variantOnMobile && window.width < BREAKEPOINTS.lg ? variantOnMobile : variant || 'caption'),
      [false]
    );

    const ComponentTag: ComponentType = React.useMemo(
      () => (tag ? tag : selectedVariant && VARIANTS[selectedVariant]),
      [false]
    );

    return (
      <Component className={`color-${color}`} as={ComponentTag} cssKey={selectedVariant} {...props}>
        {children}
      </Component>
    );
  }
);