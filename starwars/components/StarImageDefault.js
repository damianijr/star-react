/**
 * Render a HTML image with default source, rendered if src main not exist.
 *
 * Example:
 * <StarImageDefault src="404.jpg" srcDefault="200.jpg" />
 */
class StarImageDefault extends React.Component {

    constructor(props) {
        super(props);
        this._loadSrcDefault = this._loadSrcDefault.bind(this);
    }


    /**
     * Load default image when error occured.
     * @event Image event.
     */
    _loadSrcDefault(event) {
        event.currentTarget.src = this.props.srcDefault;
    }

    /**
     * Render component.
     */
    render() {
        return <img src={this.props.src}
                    onClick={this.props.onClick}
                    alt={this.props.alt} title={this.props.title}
                    onError={this._loadSrcDefault}/>
    }
}

/**
 * Properties definitions.
 */
StarImageDefault.propTypes = {
    // image source
    src: React.PropTypes.any.isRequired,
    // image source default
    srcDefault: React.PropTypes.any.isRequired
};
