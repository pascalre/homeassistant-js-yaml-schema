const fs = require('fs');
const jsyaml = require('js-yaml');
const { HOMEASSISTANT_SCHEMA } = require('../src/index');

test('should load yaml with HOMEASSISTANT_SCHEMA', () => {
  const file = fs.readFileSync('test/resources/test.yml', 'utf8');
  const doc = jsyaml.load(file, { schema: HOMEASSISTANT_SCHEMA });
  expect(JSON.stringify(doc)).toBe('{"example":{"password":{"class":"env_var","name":"env_var","data":"PASSWORD default_password"}},"light":{"class":"include","name":"include","data":"lights.yaml"}}');
});
