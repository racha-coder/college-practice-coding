import { Dispatch, SetStateAction } from "react";

export type TasksType = {
    tasks: TaskType[] | undefined,
    status: string,
    setTasks: Dispatch<SetStateAction<TaskType[]>>
}

export type TaskType = {
    name: string,
    id: string,
    status: string,
}
