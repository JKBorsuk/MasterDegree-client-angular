export default interface PagingContent<T> {
    content: Array<T>,
    pageIndex: number,
    count: number
}