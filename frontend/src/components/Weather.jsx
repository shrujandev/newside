import React from 'react';
// import Datetime from 'react-datetime';
import styled from 'styled-components';
import Image from '@geist-ui/react/esm/image/';
import { Card, Text } from '@geist-ui/react';

function Weather(props) {
    return (
        <Card shadow>
            <Card.Content>
                <WeatherStyle>
                    <div id='location'>
                        <h3>Bangalore, Karnataka</h3>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}>
                        <div id='weather' style={{ display: 'flex' }}>
                            <WeatherDayCard>
                                Mon
                                <Image
                                    width='40px'
                                    height='40px'
                                    src='http://cdn.weatherapi.com/weather/64x64/day/116.png'
                                />
                            </WeatherDayCard>
                            <WeatherDayCard>
                                Tue
                                <Image
                                    width='40px'
                                    height='40px'
                                    src='http://cdn.weatherapi.com/weather/64x64/day/302.png'
                                />
                            </WeatherDayCard>
                            <WeatherDayCard>
                                Wed
                                <Image
                                    width='40px'
                                    height='40px'
                                    src='http://cdn.weatherapi.com/weather/64x64/day/353.png'
                                />
                            </WeatherDayCard>
                            <WeatherDayCard>
                                Thu
                                <Image
                                    width='40px'
                                    height='40px'
                                    src='http://cdn.weatherapi.com/weather/64x64/day/116.png'
                                />
                            </WeatherDayCard>
                            <WeatherDayCard>
                                Fri
                                <Image
                                    width='40px'
                                    height='40px'
                                    src='http://cdn.weatherapi.com/weather/64x64/day/143.png'
                                />
                            </WeatherDayCard>
                            <WeatherDayCard>
                                Sat
                                <Image
                                    width='40px'
                                    height='40px'
                                    src='http://cdn.weatherapi.com/weather/64x64/day/116.png'
                                />
                            </WeatherDayCard>
                            <WeatherDayCard>
                                Sun
                                <Image
                                    width='40px'
                                    height='40px'
                                    src='http://cdn.weatherapi.com/weather/64x64/day/116.png'
                                />
                            </WeatherDayCard>
                        </div>
                    </div>
                </WeatherStyle>
            </Card.Content>
        </Card>
    );
}

export default Weather;

const WeatherStyle = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const WeatherDayCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
`;
