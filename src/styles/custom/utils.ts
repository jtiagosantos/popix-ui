import { ConfigType } from '@stitches/react/types/config';
import type { CSSProperties } from '@stitches/react';

type Value = string | number;

type Utils = ConfigType.Utils<{
  m: (value: Value) => CSSProperties;
  mt: (value: Value) => CSSProperties;
  mb: (value: Value) => CSSProperties;
  ml: (value: Value) => CSSProperties;
  mr: (value: Value) => CSSProperties;
  mx: (value: Value) => CSSProperties;
  my: (value: Value) => CSSProperties;
  p: (value: Value) => CSSProperties;
  pt: (value: Value) => CSSProperties;
  pb: (value: Value) => CSSProperties;
  pl: (value: Value) => CSSProperties;
  pr: (value: Value) => CSSProperties;
  br: (value: Value) => CSSProperties;
  square: (value: Value) => CSSProperties;
  circle: (value: Value) => CSSProperties;
  linearGradient: (value: Value) => CSSProperties;
}>;

export const utils: Utils = {
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
  linearGradient: (value) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
};
