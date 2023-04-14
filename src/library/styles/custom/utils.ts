import { ConfigType } from '@stitches/react/types/config';
import type { CSSProperties } from '@stitches/react';

type Value = string | number;

type Utils = ConfigType.Utils<{
  w: (value: Value) => CSSProperties;
  minW: (value: Value) => CSSProperties;
  maxW: (value: Value) => CSSProperties;
  h: (value: Value) => CSSProperties;
  minH: (value: Value) => CSSProperties;
  maxH: (value: Value) => CSSProperties;
  m: (value: Value) => CSSProperties;
  mt: (value: Value) => CSSProperties;
  mb: (value: Value) => CSSProperties;
  ml: (value: Value) => CSSProperties;
  mr: (value: Value) => CSSProperties;
  mx: (value: Value) => CSSProperties;
  my: (value: Value) => CSSProperties;
  ms: (value: Value) => CSSProperties;
  me: (value: Value) => CSSProperties;
  p: (value: Value) => CSSProperties;
  pt: (value: Value) => CSSProperties;
  pb: (value: Value) => CSSProperties;
  pl: (value: Value) => CSSProperties;
  pr: (value: Value) => CSSProperties;
  px: (value: Value) => CSSProperties;
  py: (value: Value) => CSSProperties;
  ps: (value: Value) => CSSProperties;
  pe: (value: Value) => CSSProperties;
  br: (value: Value) => CSSProperties;
  square: (value: Value) => CSSProperties;
  circle: (value: Value) => CSSProperties;
  bgGradient: (value: Value) => CSSProperties;
  bg: (value: Value) => CSSProperties;
  bgColor: (value: string) => CSSProperties;
  flexDir: (value: string) => CSSProperties;
}>;

export const utils: Utils = {
  w: (value) => ({
    width: value,
  }),
  minW: (value) => ({
    minWidth: value,
  }),
  maxW: (value) => ({
    maxWidth: value,
  }),
  h: (value) => ({
    height: value,
  }),
  minH: (value) => ({
    minHeight: value,
  }),
  maxH: (value) => ({
    maxHeight: value,
  }),
  m: (value) => ({
    margin: value,
  }),
  mt: (value) => ({
    marginTop: value,
  }),
  mb: (value) => ({
    marginBottom: value,
  }),
  ml: (value) => ({
    marginLeft: value,
  }),
  mr: (value) => ({
    marginRight: value,
  }),
  mx: (value) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value) => ({
    marginTop: value,
    marginBottom: value,
  }),
  ms: (value) => ({
    marginInlineStart: value,
  }),
  me: (value) => ({
    marginInlineEnd: value,
  }),
  p: (value) => ({
    padding: value,
  }),
  pt: (value) => ({
    paddingTop: value,
  }),
  pb: (value) => ({
    paddingBottom: value,
  }),
  pl: (value) => ({
    paddingLeft: value,
  }),
  pr: (value) => ({
    paddingRight: value,
  }),
  px: (value) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  ps: (value) => ({
    paddingInlineStart: value,
  }),
  pe: (value) => ({
    paddingInlineEnd: value,
  }),
  br: (value) => ({
    borderRadius: value,
  }),
  square: (value) => ({
    width: value,
    height: value,
  }),
  circle: (value) => ({
    width: value,
    height: value,
    borderRadius: '100%',
  }),
  bgGradient: (value) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  bg: (value) => ({
    backgroundColor: value,
  }),
  bgColor: (value) => ({
    backgroundColor: value,
  }),
  flexDir: (value) => ({
    flexDirection: value,
  }),
};
