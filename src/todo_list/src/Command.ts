import {Action, ActionNewTodo, AppState, Priority, PRIORITY_NAME_MAP} from "./type";
import {waitForInput} from "./Input";
import {constants} from "os";
import {getIsValidEnumValue} from "./util";

export abstract class Command {
    constructor(public key: string, private desc: string) {
    }

    toString() {
        return `${this.key}: ${this.desc}`;
    }

    abstract async run(state: AppState): Promise<void | Action>;
}

export class CommandPrintTodos extends Command {
    constructor() {
        super('p', '모든 할 일 출력하기');
    }
    async run(state: AppState): Promise<void> {
        for (const todo of state.todos) {
            const text = todo.toString();
            console.log(text);
        }
        await waitForInput('press any key : ');
    }
}

export class CommandNewTodo extends Command {
    constructor() {
        super('n', '할 일 추가하기');
    }
    async run(): Promise<void | ActionNewTodo> {
        const title = await waitForInput('제 : ');
        const priorityStr = await waitForInput(`우선순위 ${PRIORITY_NAME_MAP[Priority.High]}(${Priority.High}) ~ ${PRIORITY_NAME_MAP[Priority.Low]}(${Priority.Low}): `);
        const priority = Number(priorityStr);
        if (title && CommandNewTodo.getIsPriority(priority)) {
            return {
                type: 'newTodo',
                title,
                priority
            }
        }
    }
    static getIsPriority(priority: number): priority is Priority {
        return getIsValidEnumValue(Priority, priority);
    }
}