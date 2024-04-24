import { useState } from 'react';
import './styles.css';
import { Button, Flicker, Icon, Input, Label } from '@myrepo/components';

export const ToDoList = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const countTasks = () => {
        return tasks.length;
    };

    return (
        <div className='container'>
            <div className="header">
                <Input
                    type="text"
                    placeholder={`Add a task...(${countTasks()})`}
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    isOutlined
                />
                <Button type='secondary' onClick={handleAddTask}><Icon name='IoAddCircleOutline' size='m' /></Button>
            </div>
            <div className="list-container">
                <Label size='xs'
                    style={{
                        marginLeft: '20px',
                        color: 'var(--colors-brand-outline)',
                    }}
                >Press task to delete</Label>
                <ul>
                    {tasks.map((task, index) => (
                        <Flicker key={index} onClick={() => handleDeleteTask(index)}>
                            <li key={index}>
                                {task}
                            </li>
                        </Flicker>
                    ))}
                </ul>
            </div>
        </div >
    );
};