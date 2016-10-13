
/**
 * Simple paginator for starwars app.
 *
 * Example:
 *  <StarPaginator next="true" onClickNext="alert('next!')"
 *                 previous="true" onClickPrev="alert('prev')"/>
 */
class StarPaginator extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="paginator">
            {this.props.prev ? <a href="#" onClick={this.props.onClickPrev}>&lt;&lt; Previous</a> : null}
            {this.props.prev && this.props.next ? " | " : null}
            {this.props.next ? <a href="#" onClick={this.props.onClickNext}>Next &gt;&gt;</a>  : null}
            </div>
        )
    }
}

/**
 * Properties definitions.
 */
StarPaginator.propTypes = {
    // Boolean to define if has next paginator
    next: React.PropTypes.bool,
    // Boolean to define if has previous paginator
    prev: React.PropTypes.bool,

    // previous action
    onClickPrev: React.PropTypes.any.isRequired,
    // next action
    onClickNext: React.PropTypes.any.isRequired
};
