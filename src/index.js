const jsyaml = require('js-yaml');
const localTags = require('./tags.json');

function build(tags) {
  function Model(name) {
    return function createModel(data) {
      this.class = name;
      this.name = name;
      this.data = data;
    };
  }
  function CustomYamlType(name, kind) {
    const model = Model(name);
    return new jsyaml.Type(`!${name}`, {
      kind,
      instanceOf: model,
      construct(data) {
        // eslint-disable-next-line new-cap
        return new model(data);
      },
    });
  }
  const tmp = [];
  Object.keys(tags).map((kind) => tags[kind].map((tag) => tmp.push(new CustomYamlType(tag, kind))));
  return tmp;
}

const homeassistantTags = build(localTags, jsyaml);

module.exports.localTags = localTags;
module.exports.build = build;
module.exports.homeassistantTags = homeassistantTags;
module.exports.HOMEASSISTANT_SCHEMA = jsyaml.DEFAULT_SCHEMA.extend(homeassistantTags);
