// SIGNED-SOURCE: <cbe7d773dad7e69f94d065523333a47b>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 */
import { Context } from "@aphro/runtime-ts";
import { SID_of } from "@aphro/runtime-ts";
import { NodeSpecWithCreate } from "@aphro/runtime-ts";
import { default as TodoSpec } from "./TodoSpec.js";
import TodoList from "./TodoList.js";
import { Data } from "./TodoList.js";

const spec: NodeSpecWithCreate<TodoList, Data> = {
  type: "node",
  createFrom(ctx: Context, data: Data) {
    const existing = ctx.cache.get(data["id"], TodoList.name);
    if (existing) {
      return existing;
    }
    const result = new TodoList(ctx, data);
    ctx.cache.set(data["id"], result);
    return result;
  },

  primaryKey: "id",

  storage: {
    engine: "sqlite",
    db: "todomvc",
    type: "sql",
    tablish: "todolist",
  },

  outboundEdges: {
    todos: {
      type: "foreignKey",
      sourceField: "id",
      destField: "listId",
      get source() {
        return spec;
      },
      get dest() {
        return TodoSpec;
      },
    },
  },
};

export default spec;
