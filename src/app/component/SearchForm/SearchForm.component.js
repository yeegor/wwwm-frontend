import { PureComponent } from 'react';

class SearchForm extends PureComponent {
    render() {
        const {
            handlePlaceInput,
            apiResponses
        } = this.props;

        console.log(this.props);

        return(
            <div block="SearchForm">
                <h3>Find a place and time to meet!</h3>
                
                <p>Where are you located?</p>
                {/* TODO style this */}
                <div block="SearchForm" elem="HintWrapper">
                    <div block="SearchForm" elem="Origin1-Hint">
                        {/* { apiResponses.origin1[0] } */}
                    </div>
                    <input onInput={ handlePlaceInput } name="origin1" />
                </div>
                
                <p>Where is your travel partner located?</p>
                <input onInput={ handlePlaceInput } name="origin2" />

                <p>Where would you like to go?</p>
                <input onInput={ handlePlaceInput } name="destination" />
            </div>
        );
    }
}

export default SearchForm;