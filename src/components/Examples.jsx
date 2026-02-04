export default function Examples({children, onSelect}){
    console.log('Examples component rendered');
    return (
        <button onClick={onSelect}>{children}</button>
    )
}