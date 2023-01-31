import { Draggable, Droppable } from 'react-drag-and-drop';

function DragAndDrop() {
    function onDrop(data) {
        console.log(data)
        // => banana 
    }
    return (
        <div>
            <ul>
                <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
                <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
                <Draggable type="metal" data="silver"><li>Silver</li></Draggable>
            </ul>
            <Droppable
                types={['fruit','metal']} // <= allowed drop types
                onDrop={onDrop}>
                <ul className="Smoothie"></ul>
            </Droppable>
        </div>
    )
}

export default DragAndDrop;