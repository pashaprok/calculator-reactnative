import processors from "./processors";

export default function processKey(state, key) {
  return processors[key.type](state, key);
}