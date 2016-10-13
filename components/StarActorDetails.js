/**
 * Component to render details from starwars actor.
 * The URL prop expect a JSON content.
 *
 * Example:
 *  <StarActorDetails url="http://www.lukeskywalker.com/me.json" />
 */
class StarActorDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            // Default state values
            name: '-', gender: '-', height: '-', hair_color: '-', eye_color: '-', skin_color: '-'
        };
        this._loadDetails(this.props.url.replace('http://', 'https://'));
    }

    /**
     * Load actor defailts updating copoment's state.
     */
    _loadDetails(url) {
        let _this = this;
        $.get(url, function(data) {
            _this.setState(data);
        });
    }

    render() {
        return (
            <div id="people-detail">
                <h1>{this.state.name}</h1>
                <StarImageDefault src={'images/casting/' + this.state.name + '.png'}
                             alt={this.state.name} title={this.state.name}
                             def={'images/casting/Default.jpg'} />
                <dl>
                    <dt>Gender:</dt>
                    <dd>{this.state.gender}</dd>

                    <dt>Height:</dt>
                    <dd>{this.state.height}</dd>

                    <dt>Hair color:</dt>
                    <dd>{this.state.hair_color}</dd>

                    <dt>Eye color:</dt>
                    <dd>{this.state.eye_color}</dd>

                    <dt>Skin Color:</dt>
                    <dd>{this.state.skin_color}</dd>
                </dl>

                <a className="back" href="index.html">Back</a>
            </div>
        );
    }
}

/**
 * Properties definitions.
 */
StarActorDetails.propTypes = {
    // URL to get details from actor
    url: React.PropTypes.any.isRequired
};
