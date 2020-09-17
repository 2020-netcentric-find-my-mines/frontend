import ICoordinate from './coordinate.interface'

export default interface IGame {
    width: number,
    height: number,
    id: string,
    started: boolean,
    noBombs: number,
    noBombsFound: number,
    players: string[],
    coordinates: ICoordinate[],
    tick: number
}