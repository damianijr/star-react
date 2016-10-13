/**
 * Component to render a star-wars actor.
 *
 * Example:
 *  <StarActor name="Luke Skywalker" url="http://www.lukesky.com/me.json" />
 */
class StarActor extends React.Component {

    constructor() {
        super();
        this._loadDetails = this._loadDetails.bind(this);
    }

    /**
     * Render starwars actor details.
     */
    _loadDetails() {
        ReactDOM.render(
            <StarActorDetails url={this.props.url} />,
            document.querySelector('#app')
        );
    }

    render() {
        return (
            <div className="start-people">
                <StarImageDefault src={'images/casting/' + this.props.name + '.png'}
                              srcDefault={'images/casting/Default.jpg'}
                              alt={this.props.name} title={this.props.name} />
                <a href="#" onClick={this._loadDetails}>{this.props.name}</a>
            </div>
        );
    }
}

/**
 * Properties definitions.
 */
StarActor.propTypes = {
    // Name of actor
    name: React.PropTypes.any.isRequired,
    // URL to get details
    url: React.PropTypes.any.isRequired
};
