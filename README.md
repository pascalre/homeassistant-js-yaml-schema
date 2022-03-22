# homeassistant-js-yaml-schema

[![Coverage Status](https://coveralls.io/repos/github/pascalre/homeassistant-js-yaml-schema/badge.svg?branch=master)](https://coveralls.io/github/pascalre/homeassistant-js-yaml-schema?branch=master)

Schema to allow js-yaml to process YAML formatted Home Assistent templates that use Home Assistent specific [local tags](https://www.home-assistant.io/docs/configuration/splitting_configuration/) while parsing or dumping, for example: `!env_var`, `!include_dir_named`.

See [tags.json](https://github.com/pascalre/homeassistant-js-yaml-schema/blob/master/src/tags.json) for currently supported local tags.

# Usage
```typescript
const jsyaml = require('js-yaml');
const fs     = require('fs');
import { HOMEASSISTANT_SCHEMA } from "homeassistant-js-yaml-schema"

let doc = yaml.load(fs.readFileSync('/path/to/file.yml', 'utf8'));
let body = jsyaml.load(doc, { schema: HOMEASSISTANT_SCHEMA });
console.log(JSON.stringify(body, null, 2));

body = jsyaml.dump(body, { schema: HOMEASSISTANT_SCHEMA });
console.log(body);
```

See usage in [vscode-yaml-sort](https://github.com/pascalre/vscode-yaml-sort).

# License
homeassistant-js-yaml-schema is licensed under the [MIT License](https://raw.githubusercontent.com/pascalre/homeassistant-js-yaml-schema/master/LICENSE).