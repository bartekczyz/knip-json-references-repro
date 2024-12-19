# knip json references repro

This repository is a minimal reproduction of a potential bug in the [knip](https://github.com/webpro-nl/knip) package.

## Steps to reproduce

1. Clone this repository
2. Run `pnpm i`
3. Run `pnpm dump:trace`
4. Open the generated `trace.json` file.

You will see that the output file doesn't contain `example.json` even though it's imported by 2 files.