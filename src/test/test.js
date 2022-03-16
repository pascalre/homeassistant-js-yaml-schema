/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const util = require('util');
const yaml = require('js-yaml');
const { HOMEASSISTANT_SCHEMA } = require('../index');

fs.readFile(path.join(__dirname, 'test.yaml'), 'utf8', (error, data) => {
  let loaded;

  if (!error) {
    loaded = yaml.load(data, { schema: HOMEASSISTANT_SCHEMA });
    console.log(util.inspect(loaded, false, 20, true));
    console.log(yaml.dump(loaded, { schema: HOMEASSISTANT_SCHEMA }));
    const tempYaml = yaml.dump(loaded, { schema: HOMEASSISTANT_SCHEMA });
    const newloaded = yaml.load(tempYaml, { schema: HOMEASSISTANT_SCHEMA });
    console.log(util.inspect(newloaded, false, 20, true));
  } else {
    console.error(error.stack || error.message || String(error));
  }
});
