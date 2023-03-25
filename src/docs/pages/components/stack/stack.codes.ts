export const codes = {
  import: `import { Stack } from 'popix-ui';`,
  direction: `<Stack>
  <Box>1</Box>
  <Box>2</Box>
  <Box>3</Box>
</Stack>
<Stack direction="column">
  <Box>1</Box>
  <Box>2</Box>
  <Box>3</Box>
</Stack>`,
  spacing: `<Stack spacing="16px">
  <Box>1</Box>
  <Box>2</Box>
  <Box>3</Box>
</Stack>`,
  responsiveness: {
    direction: `<Stack
  spacing="16px"
  direction={{
    '(max-width: 1000px)': 'column',
    '(max-width: 700px)': 'row',
  }}
>
  <Box>1</Box>
  <Box>2</Box>
  <Box>3</Box>
  <Box>4</Box>
  <Box>5</Box>
</Stack>`,
    gap: `<Stack
  spacing="32px"
  css={{
    '@media(max-width: 900px)': {
      gap: '8px',
    },
  }}
>
  <Box>1</Box>
  <Box>2</Box>
  <Box>3</Box>
  <Box>4</Box>
  <Box>5</Box>
</Stack>`,
  },
};
