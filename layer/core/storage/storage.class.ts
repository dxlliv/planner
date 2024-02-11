import localforage from "localforage";

export default class Storage {
  static initialize() {
    localforage.config({
      driver: localforage.INDEXEDDB,
      name: "planner",
    })
  }
}