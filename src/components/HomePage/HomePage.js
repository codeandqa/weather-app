import React from 'react';

class HomePage extends React.Component {
    state={
        user: {},
        isLoading: true
    };
    
    withNoData = <div>Loading.......</div> 

    async componentDidMount() {
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({
            isLoading: false,
            user: data.results[0]
        });
    }

    render() {
      return (
        <div>
            <h1>Random User from https://randomuser.me</h1>
        {
            this.state.isLoading ? 
            (<div>Loading....</div>) :
            (<div>
                {this.state.user.cell}  
                <img src={this.state.user.picture.large} />  
            </div>)
    }
        </div>
      )
    };
}

export default HomePage;