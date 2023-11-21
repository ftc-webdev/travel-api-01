const Field = ({ label, data }) => {
  return (
    <div className="field">
      <span className="label">{label}</span>
      <span classname="data">{data}</span>
    </div>
  )
}

export default Field