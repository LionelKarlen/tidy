import PocketBase from "pocketbase";
import { DEV } from "solid-js";

function getPBUrl(): string {
  if (DEV) {
    return "http://192.168.1.129:8090";
  }

  return "";
}

const pb = new PocketBase(getPBUrl());

export default pb;
