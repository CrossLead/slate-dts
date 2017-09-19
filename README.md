# Generated TypeScript definition files for [Slate](https://github.com/ianstormtaylor/slate)

## Using the typings

First install the typings via npm. For example, to install the `slate` typings,
we would run:

```shell
npm install @crosslead/slate-typings
```

Next, add `"./node_modules/@crosslead"` to the `typeRoots` option in your `tsconfig.json`

```json
{
  ...,
  "typeRoots": ["./node_modules/@crosslead", "@types"]
}
```

## Typings

see [`./packages`](./packages) for the type definition files.

## Building

Run the generation script

```shell
sh ./scripts/generate.sh
```

