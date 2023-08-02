# TileDocument to ModelInstanceDocument transition example

Simple example scripts showing how to use the `Model` and `ModelInstanceDocument` streams instead of `TileDocument` using Ceramic packages directly (no ComposeDB).

Both the `tile-document.js` and `model-instance-document.js` scripts use the same JSON schema, defined in the `common.js` file.

## Installation

```sh
pnpm install
```

## Usage

1. Have a local Ceramic node running on `http://localhost:7007` or provide a custom URL in the `createClient()` call of the scripts
1. Execute one of the following scripts:
   - `node ./tile-document.js` to run the `TileDocument` logic
   - `node ./model-instance-document.js` to run the `Model` and `ModelInstanceDocument` logic
