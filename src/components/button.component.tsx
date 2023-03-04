import { Spinner } from './spinner.component';

import { convertHexadecimalColorToRgbaColor } from '../utils/convert-hexadecimal-color-to-rgba-color';

import type { FC, ComponentProps } from 'react';
import type { CSSProperties } from '@stitches/react';

import { styled } from '../styles';

const ButtonUI = styled('button', {
  all: 'unset',
  minWidth: '100px',
  minHeight: '40px',
  borderRadius: '6px',
  padding: '0 16px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  position: 'relative',

  textAlign: 'center',
  fontWeight: '500',
  fontFamily: 'inherit',
  fontSize: '16px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',

  cursor: 'pointer',

  transition: 'all 0.2s ease',

  '&:disabled': {
    cursor: 'not-allowed',
    filter: 'brightness(0.6)',
  },

  '&:not(:disabled):hover': {
    filter: 'brightness(0.8)',
  },

  variants: {
    variant: {
      solid: {
        '&:not(:disabled):hover': {
          filter: 'brightness(0.9)',
        },

        '&:disabled': {
          filter: 'brightness(0.7)',
        },
      },

      outline: {
        backgroundColor: 'transparent',
      },

      ghost: {
        backgroundColor: 'transparent',
      },

      link: {
        backgroundColor: 'transparent',
        textDecoration: 'underline',
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
});

const CustomChildrenUI = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',

  opacity: 0,
});

type ButtonProps = Omit<ComponentProps<typeof ButtonUI>, 'disabled'> & {
  href?: string;
  colorTheme?: string;
  loadingText?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const ButtonHandlerProps: FC<ButtonProps> = ({
  variant = 'solid',
  isLoading = false,
  isDisabled = false,
  colorTheme = '#6d28d9',
  children,
  css,
  ...props
}) => {
  const converterdColor = convertHexadecimalColorToRgbaColor(colorTheme, 0.3);
  const solid: CSSProperties = {
    color: '#fff',
    backgroundColor: colorTheme,
  };
  const outline = {
    color: colorTheme,
    borderColor: colorTheme,
    '&:not(:disabled):hover': {
      backgroundColor: converterdColor,
    },
  };
  const ghost = {
    color: colorTheme,
    '&:not(:disabled):hover': {
      backgroundColor: converterdColor,
    },
  };
  const link: CSSProperties = {
    color: colorTheme,
  };
  const customColors = {
    solid,
    outline,
    ghost,
    link,
  }[variant as 'solid' | 'outline' | 'ghost' | 'link'];
  const spinnerColor = variant === 'solid' ? '#fff' : colorTheme;

  return (
    <ButtonUI
      variant={variant}
      disabled={isDisabled || isLoading}
      css={{ ...customColors, ...css }}
      {...props}>
      {!isLoading && <>{children}</>}

      {isLoading && (
        <>
          <Spinner color={spinnerColor} css={{ position: 'absolute' }} />
          <CustomChildrenUI>{children}</CustomChildrenUI>
        </>
      )}
    </ButtonUI>
  );
};

export const Button: FC<ButtonProps> = (props) => {
  const { variant, href } = props;
  const buttonIsLink = variant === 'link';

  if (buttonIsLink) {
    return (
      <a href={href}>
        <ButtonHandlerProps {...props} />
      </a>
    );
  }

  return <ButtonHandlerProps {...props} />;
};
