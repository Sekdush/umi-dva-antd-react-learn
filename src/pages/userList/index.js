import React, { Component } from 'react';
import Table from "./components/table";

class userListPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchText: '',
        }
    }
    render() {
        return (
            <>
                <Table></Table>
            </>
        );
    }
    
}


export default userListPage;