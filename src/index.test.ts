import fs from "fs";
import { plugin } from "./index";
import path from "path";

test("plugin", () => {
  const result = plugin({}, [], {
    exports: ["A", "B"],
  });
  fs.writeFileSync("./.tmp.ts", result);
});
