import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { movies: [] };


    componentWillMount() {
        console.log('component will mount in AlbumList class');
        // axios.get('https://rallycoding.herukuapp.com/api/music_albums')
        // axios.get('https://facebook.github.io/react-native/movies.json')
        //     // .then(response => { console.log(response); console.log('asdasdasd'); });
        //     .then(response => this.setState({ movies: response.data.movies }))
        //     .catch((error) => {
        //         console.log('Api call error');
        //         alert(error.message);
        //     });

        this.setState({
            movies: [
                {
                    title: 'Interstellar',
                    year: '2014',
                    image: 'https://s-media-cache-ak0.pinimg.com/736x/07/29/5a/07295a499d75c4934cd376a42ba19397.jpg',
                    heroImage: 'https://www.gannett-cdn.com/-mm-/a038c730d02574008dab951d3b4b30f7399f7c9d/c=0-518-2299-2246&r=x404&c=534x401/local/-/media/USATODAY/test/2014/01/16//1389884527000-GTY-461579733.jpg',
                    wikiURL: 'https://en.wikipedia.org/wiki/Interstellar_(film)'
                },
                {
                    title: 'The Fate Of The Furious',
                    year: '2017',
                    image: 'http://empireonline.media/jpg/70/0/0/1280/960/aspectfit/0/0/0/0/0/0/c/articles/58bc4a051268b33f1bc0b1de/ff8-poster.jpg',
                    heroImage: 'http://assets.nydailynews.com/polopoly_fs/1.2765303.1472134084!/img/httpImage/image.jpg_gen/derivatives/article_750/afp-bq69k.jpg',
                    wikiURL: 'https://en.wikipedia.org/wiki/The_Fate_of_the_Furious'
                },
                {
                    title: 'Predestination',
                    year: '2014',
                    image: 'https://image.tmdb.org/t/p/original/kDdUtDsGMQ3OYwoBtEQyJIGPz4V.jpg',
                    heroImage: 'http://mediamass.net/jdd/public/documents/celebrities/2635.jpg',
                    wikiURL: 'https://en.wikipedia.org/wiki/Predestination_(film)'
                }
            ]
        });
    }

    renderAlbums() {
        // let i;

        // this.state.movies.map(movie => <Text style={styles.textStyle}>{movie.title}</Text>);

        // console.log(this.state.movies.length);
        // for (i = 0; i < this.state.movies.length; i++) {
        //     return (<Text style={styles.textStyle}>{this.state.movies[i].title}</Text>);
        // }
        return (
            <View>
                <AlbumDetail key={this.state.movies[0].title} movie={this.state.movies[0]} >
                    {this.state.movies[0].title}
                </AlbumDetail>
                <AlbumDetail key={this.state.movies[1].title} movie={this.state.movies[1]}>
                    {this.state.movies[1].title}
                </AlbumDetail>
                <AlbumDetail key={this.state.movies[2].title} movie={this.state.movies[2]}>
                    {this.state.movies[2].title}
                </AlbumDetail>
            </View>
        );
    }

    render() {
        console.log(this.state.movies);

        return (
            <ScrollView>
                {/*<Text style={styles.textStyle}>{this.state.movies[0].title}</Text>*/}
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 16,
        color: '#000000'
    }
};

export default AlbumList;
