import './App.css';
import {useState} from 'react';
import Player from './Components/Player/Player'

function App() {
  const [song] = useState({
    title: 'Song1',
    artist: 'Autor1',
    image: 'https://i.guim.co.uk/img/media/a86b23820186d1d24dbb908f01820041de2b361a/0_0_1000_1000/master/1000.jpg?width=700&quality=85&auto=format&fit=max&s=eff264f742166fea73641dbf29a408d4',
    src: 'https://soundcloud.com/docto-beats/guerra-de-pin-as?in=docto-beats/sets/doc-tape-vol-2',
  });
  return (
    <div className="App">
      
      <Player song={song} />
    </div>
  )
}

export default App;
