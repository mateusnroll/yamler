# Yamler
A yaml parser for javascript that renders variables.

## Installation

Install using npm:
```sh
$ npm install --save yamler
```

Import yamler and give it the file to render:
```js
var yamler = require('yamler');
var file = yamler('file.yaml');
```

## Example

This sample yaml file:
```yaml
sample:
  variable: {{ process.env._ }}
```

Will be turned into this javascript object:
```js
{ 
    test: { 
        variable: '/Users/mateusnroll/.nvm/versions/node/v6.7.0/bin/node' 
    } 
}
```


## Dependencies

**js-yaml**
The official [PyYAML](http://pyyaml.org/) port for Javascript. Used to parse the yaml file into a javascript object.

**Handlebars**
Templating language to parse the variables inside the yaml file.


## API

### yamler(filePath, [safe], [context])

- `filePath` (default: null) - String with the path to the file. Will be read using fs.readFilySync()
- `safe` (default: false) - Boolean to choose if you want to do a safe content load. If you do not trust or control the contents of the yml file, use true.
- `context` (default: global) - Where to look for variables. If left blank, will attach node's global scope.

## License

Yamler is released under the [MIT license](https://tldrlegal.com/license/mit-license)