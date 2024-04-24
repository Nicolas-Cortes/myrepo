import React from 'react'
import { Label, ToDoList } from '@myrepo/components'

export default function TaskList() {
    return (
        <div>
            <Label size='l' style={{ margin: '10px 0px -10px 20px' }} isBold>My Tasks</Label>
            <ToDoList />
        </div>
    )
}