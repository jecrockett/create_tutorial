var Skill = React.createClass({
  getInitialState() {
    return({ editable: false });
  },

  onUpdate() {
    if (this.state.editable) {
      var skill   = { id: this.props.skill.id,
                      name: this.refs.name.value,
                      details: this.refs.details.value };

      this.props.handleUpdate(skill);
    }
    this.setState({ editable: !this.state.editable });
  },

  render() {
    var name = this.state.editable ?
               <input type='text' ref='name' defaultValue={this.props.skill.name} /> :
               <h3>{this.props.skill.name}</h3>;

    var details = this.state.editable ?
                  <textarea type='text' ref='details' defaultValue={this.props.skill.details}></textarea> : <p>{this.props.skill.details}</p>;

    return (
      <div>
        {name}
        <p><strong>Level:</strong> {this.props.skill.level}</p>
        {details}

        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.onUpdate}>{this.state.editable ? 'Submit': 'Edit'}</button>
      </div>
    );
  }
});
