class Color extends React.Component {

  render() {
    const style = {
      backgroundColor: this.props.hexCode
    }
    return (
      <div className="color"
      onChange=
      {this.props.update.bind(this, this.props.index)} style={style}>
        <p
        className= "color-code">
        {this.props.hexCode}</p>
      </div>
    )}