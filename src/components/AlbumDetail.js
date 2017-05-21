import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ movie }) => {
    const { title, year, image, heroImage, wikiURL } = movie;
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, textStyle, imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: heroImage }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={textStyle}>{title}</Text>
                    <Text>{year}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button
                    onPress={() => {
                        console.log(wikiURL);
                        Linking.openURL(wikiURL)
                            .catch((error) => {
                                console.log('Api call error');
                                alert(error.message);
                            });
                    }}
                >
                Wiki
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',

    },

    thumbnailStyle: {
        height: 100,
        width: 100
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    imageStyle: {
        height: 1000,
        width: null,
        flex: 1
    },

    textStyle: {
        fontSize: 20,
        color: '#000000'
    }
};

export default AlbumDetail;
