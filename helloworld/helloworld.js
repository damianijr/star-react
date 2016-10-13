class HelloWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.children
        };
        this._changeName = this._changeName.bind(this);
    }

    _changeName() {
        var newName = document.querySelector("#inpName").value;
        var newDesc = document.querySelector("#inpDesc").value;
        this.setState({ name: newName, description: newDesc });
    }

    render() {
        return (
            <div id="HelloWord">
                <h1 id="name">Welcome {this.state.name}!</h1>
                <em id="description">{this.state.description}</em>

                <hr />
                Name: <input id="inpName" />
                <br /><br />
                Description: <textarea id="inpDesc"></textarea>
                <br /><br />
                <button onClick={this._changeName}>Refresh</button>
            </div>
        );
    }
}
