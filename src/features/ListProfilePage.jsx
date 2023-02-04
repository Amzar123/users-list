import axios from "axios";
import { Component, Fragment } from "react";
import ProfileCard from "../components/ProfileCard";


class ListProfilePage extends Component {
    state = {
        users: []
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                this.setState({
                    users: res.data
                })
            })
    }
    render(){
        return (
            <Fragment>
                {
                    this.state.users.map(user => {
                        return <ProfileCard 
                            key={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email} 
                        />
                    })
                }
            </Fragment>    
        )
    }
}

export default ListProfilePage