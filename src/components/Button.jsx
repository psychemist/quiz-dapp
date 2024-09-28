export default function Button({ index, handleClick, children }) {
  return (
    <button onClick={() => { handleClick(index) }}>{children}</button>
  )
}