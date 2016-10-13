/**
 * Component to render a starwars casting.
 *
 * Example:
 *  <StarCasting />
 */
class StarCasting extends React.Component {

    constructor() {
        super();

        // Default state values
        this.state ={
            casting: [],
            prev: null, next: null
        };

        // On create class, load the default page casting
        this._loadCasting('http://swapi.co/api/people/');
    }

    /**
     * Load casting by URL.
     *
     * @url
     *    URL for load casting.
     */
    _loadCasting(url) {
        let _this = this;
        $.get(url, function(data) {
            _this.setState({
                casting: data.results,
                next: data.next,
                prev: data.previous
            });
        });
        return false;
    }

    render() {
        return (
            <div id="casting">
                <StarPaginator next={this.state.next != null} onClickNext={this._loadCasting.bind(this, this.state.next)}
                               prev={this.state.prev != null} onClickPrev={this._loadCasting.bind(this, this.state.prev)} />

                {this.state.casting.map(function(people) {
                    return <StarActor url={people.url} name={people.name} key={people.name} />;
                })}
            </div>
        );
    }
}
