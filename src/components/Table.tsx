import React from 'react'
import { SocketEvent } from '../socket-event';

export default function Table(props: any) {

    const handleSelectCoordinate = (event: any) => {
        console.log("SELECT_COORDINATE", event.target.dataset.x, event.target.dataset.y)
        props.emitEvent(SocketEvent.SELECT_COORDINATE, {
            x: event.target.dataset.x,
            y: event.target.dataset.y,
        })
    }

    if (!props.visible) {
        return <div>Start game to create table!</div>
    }

    let table: any = [];
    for (let row: number = 0; row < +props.height; row++){
        let columns = []

        for (let column = 0; column < +props.width; column++) {
            let cellID = `cell${row}-${column}`
            let cell = props.coordinate[column * 6 + row]
            let cellState
            if (!cell.isSelected) {
                cellState = " "
            } else if (cell.isBomb) {
                cellState = "💣"
            } else {
                cellState = "❌"
            }

            columns.push(
                <td key={cellID}>
                    <button onClick={handleSelectCoordinate} data-x={column} data-y={row}>{cellState}</button>
                </td>
            )
        }
        table.push(<tr key={`row${row}`}>{columns}</tr>)
    }

    return (
        <table>
            <tbody>
                {table}
            </tbody>
        </table>
    )

}