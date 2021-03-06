import React, {Component} from 'react';
import keyboard from 'usfl/input/keyboard';

export default class DebugData extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isVisible: false
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.toggle, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.toggle);
    }

    toggle(event) {
        if (event.keyCode === keyboard.D) {
            this.setState({isVisible: !this.state.isVisible});
        }
    }

    render() {
        const {
            id,
            site,
            location,
            seo,
            modules
        } = this.props;

        return this.state.isVisible ? (
            <div style={{
                background: 'white',
                color: 'black',
                fontSize: '90%',
                padding: '20px'
            }}>
                <h1>{id}</h1>

                <h1>site</h1>
                <pre style={{whiteSpace: 'pre-wrap'}}>
                    {JSON.stringify(site, null, 2)}
                </pre>
                <hr/>

                <h1>location</h1>
                <pre style={{whiteSpace: 'pre-wrap'}}>
                    {JSON.stringify(location, null, 2)}
                </pre>
                <hr/>

                <h1>seo</h1>
                <pre style={{whiteSpace: 'pre-wrap'}}>
                    {JSON.stringify(seo, null, 2)}
                </pre>
                <hr/>

                <h1>modules</h1>
                {modules.map(m => (
                    <div key={m.id}>
                        <h3>{m.type} -- ({Object.keys(m).join(',')})</h3>
                        <pre style={{whiteSpace: 'pre-wrap'}}>
                            {JSON.stringify(m, null, 2)}
                        </pre>
                        <hr/>
                    </div>
                ))}
            </div>
        ) : null;
    }
}
