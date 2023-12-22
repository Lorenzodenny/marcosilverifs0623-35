import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Film from './Film'

class ListaFilm extends React.Component {
    state = {
        films:  [],
        isLoading: true,
        isError: false,
    }

    componentDidMount = async () => {
        try{
            let response = await fetch(this.props.category)
            
            if (response.ok) {
                let films = await response.json()
                this.setState({ films: films, isLoading: false, isError: false})
            }else{
                
                this.setState({ isLoading:false, isError: true})

            }
        }catch (error) {
              
              this.setState({isLoading:false, isError: true})  
        }
    }

    render() {
        
        let filmArray = this.state.films.Search
        
        return(
            <div>
                <h2>{this.props.title}</h2>
                <Row className="flex-nowrap overflow-x-scroll">
                    {filmArray && filmArray.map((film, index) => (
                        <Film key={index} film={film} />
                    ))}
                </Row>
            </div>
        )
    }

}

export default ListaFilm