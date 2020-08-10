import React, { useState } from 'react';
import { Slider } from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronIcon } from '../components/icons/Chevron';
import { MoreVertIcon } from '../components/icons/MoreVert';
import { PlayIcon } from '../components/icons/Play';

const Background = ({ children }) => (
  <LinearGradient
    colors={['#464769', '#1B1A1F']}
    style={{
      flex: 1,
      paddingTop: 50,
    }}
  >
    {children}
  </LinearGradient>
);

const TopBar = styled.View`
  flex-direction: row;
`;
TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;
TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;
TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;
TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;
TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

const ScreeenArea = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`;
const CoverArea = styled.View`
  flex: 4;
`;
CoverArea.Image = styled.Image`
  flex: 1;
`;

const PlayerArea = styled.View`
  flex: 2;
  justify-content: flex-end;
`;
PlayerArea.Title = styled.Text`
  color: white;
  font-size: 24px;
  text-align: center;
`;
PlayerArea.SubTitle = styled.Text`
    color: #bbbbbb;
    font-size: 16px;
    text-align: center;
`;

const Controls = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
Controls.Play = styled.TouchableOpacity`
`;

Controls.Slider = styled.View`
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
Controls.Slider.Bar = styled(Slider)`
  flex-basis: 100%;
`;
Controls.Slider.CurrentTime = styled.Text`
  color: #bbbbbb;
`;
Controls.Slider.TotalTime = styled.Text`
  color: #bbbbbb;
`;

// eslint-disable-next-line import/prefer-default-export
export function PlayerScreen() {
  const [segundos, setSegundos] = useState(0);

  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <ChevronIcon />
        </TopBar.Left>
        <TopBar.Middle>
          <TopBar.Title>
            Tocando PodCast
          </TopBar.Title>
          <TopBar.SubTitle>
            NerdCcast
          </TopBar.SubTitle>
        </TopBar.Middle>
        <TopBar.Right>
          <MoreVertIcon />
        </TopBar.Right>
      </TopBar>

      <ScreeenArea>
        <CoverArea>
          <CoverArea.Image
            resizeMode="contain"
            source={{
              uri: 'https://placehold.it/750x750',
            }}
          />
        </CoverArea>
        <PlayerArea>
          <PlayerArea.Title>
            titulo
          </PlayerArea.Title>
          <PlayerArea.SubTitle>
            Subtitulo
          </PlayerArea.SubTitle>

          <Controls>
            <Controls.Slider>
              <Controls.Slider.Bar
                thumbTintColor="#FFFFFF"
                minimumTrackTintColor="#1DD65F"
                maximumTrackTintColor="#7777777"
                minimumValue={0}
                maximumValue={100}
                value={segundos}
                onValueChange={(value) => { setSegundos(value); }}
              />
              <Controls.Slider.CurrentTime>
                {segundos}
              </Controls.Slider.CurrentTime>
              <Controls.Slider.TotalTime>
                100
              </Controls.Slider.TotalTime>
            </Controls.Slider>
            <Controls.Play>
              <PlayIcon
                height={88}
                width={88}
              />
            </Controls.Play>
          </Controls>
        </PlayerArea>
      </ScreeenArea>
    </Background>
  );
}
