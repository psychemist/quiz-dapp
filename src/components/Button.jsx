export default function Button({ children, check, index, handleClick }) {
  return (
    <button onClick={() => {
      check ?
        handleClick(check) :
        handleClick(index)
    }}>{children}</button>
  )
}