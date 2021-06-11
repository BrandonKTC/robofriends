const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '2px solid black',
        height: '700px',
      }}
    >
      {children}
    </div>
  )
}

export default Scroll
