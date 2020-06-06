import _ from 'lodash'
import React, {useState} from 'react';
import { Form, Table } from 'semantic-ui-react';

function SearchTable() {
    const [searchInput, setSearchInput] = useState('');
    const [tableData, setTableData] = useState('');
    const [column, setColumn] = useState('');
    const [direction, setDirection] = useState('');
    const handleSearch = (e)=> {
        setSearchInput(e.target.value);
    };

    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${searchInput}/repos`)
            .then(res => res.json())
            .then(results => {
                setTableData(results)
            })
    };

    const handleSort = (clickedColumn) => () => {
        if (column !== clickedColumn) {
            setColumn(clickedColumn);
            setTableData(_.sortBy(tableData, [clickedColumn]));
            setDirection('ascending');
            return
        }
        setTableData(tableData.reverse());
        setDirection(direction === 'ascending' ? 'descending' : 'ascending');
    };

    return(
        <div className="search-table">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Input
                        placeholder='Git Name'
                        name='name'
                        onChange={handleSearch}
                    />

                    <Form.Button content='Search' />
                </Form.Group>
            </Form>
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'id' ? direction : null}
                            onClick={handleSort('id')}
                        >
                            Repo ID
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'name' ? direction : null}
                            onClick={handleSort('name')}
                        >
                            Repo Name
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'watchers_count' ? direction : null}
                            onClick={handleSort('watchers_count')}
                        >
                            Watchers Count
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'stargazers_count' ? direction : null}
                            onClick={handleSort('stargazers_count')}
                        >
                            Stargazers Count
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {tableData ?
                    <Table.Body>
                        {_.map(tableData, ({ id, name, watchers_count, stargazers_count }) => (
                            <Table.Row key={id}>
                                <Table.Cell>{id}</Table.Cell>
                                <Table.Cell>{name}</Table.Cell>
                                <Table.Cell>{watchers_count}</Table.Cell>
                                <Table.Cell>{stargazers_count}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                    :
                    <div className="no-data">
                        No Data Found. Please search again !
                    </div>
                }
            </Table>
        </div>
    )
}

export default SearchTable;
