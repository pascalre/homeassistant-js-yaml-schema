# homeassistant-js-yaml-schema
Schema to allow js-yaml to process YAML formatted Home Assistent templates that use Home Assistent specific [local tags](https://www.home-assistant.io/docs/configuration/splitting_configuration/) while parsing or dumping, for example: `!env_var`, `!include_dir_named`.

See [tags.json](https://github.com/pascalre/homeassistant-js-yaml-schema/blob/master/src/tags.json) for currently supported local tags.

# Usage
```typescript
import * as jsyaml from "js-yaml"
import { HOMEASSISTANT_SCHEMA } from "homeassistant-js-yaml-schema"

let body = jsyaml.load(yamlDocument, { schema: HOMEASSISTANT_SCHEMA });
console.log(JSON.stringify(body, null, 2));

body = jsyaml.dump(body, { schema: HOMEASSISTANT_SCHEMA });
console.log(body);
```

See usage in [vscode-yaml-sort](https://github.com/pascalre/vscode-yaml-sort).

# License
homeassistant-js-yaml-schema is licensed under the [MIT License](https://raw.githubusercontent.com/pascalre/homeassistant-js-yaml-schema/master/LICENSE).