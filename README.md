# useless-facts
An npm package that returns a random useless fact!

Facts are fetched using the [uselessfacts.jsph.pl](https://uselessfacts.jsph.pl/) API.
## Installation

```bash
npm install useless-facts
```

## Usage

```js
const getFact = require("useless-facts");

getFact()
    .then(console.log)
    .catch(console.error);
```

## Example Outputs

```
Banging your head against a wall for one hour burns 150 calories.
```

```
"Underground" is the only word in the English language that begins and ends with the letters "und"
```

## About

This package fetches a random fact from [here](https://uselessfacts.jsph.pl/api), parses it, and returns just the fact string.

- No dependencies
- Perfect for terminal fun, bots, or boredom relief

## License

[MIT](https://github.com/vams-skn/useless-facts/blob/main/LICENSE)