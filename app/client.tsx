"use client";
import * as lib from "../lib/index.js";

export function Client() {
  return <button onClick={() => alert(new lib.core.CoreError(lib.string()).message)}>go</button>;
}
