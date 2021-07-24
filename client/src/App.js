import './App.css';
import { useState, useEffect } from 'react';
import Player from './Components/Player/Player'

function App() {
  const [songs] = useState([
    {
      title: 'Tablazo',
      artist: 'Autor 1',
      image: 'https://i.guim.co.uk/img/media/a86b23820186d1d24dbb908f01820041de2b361a/0_0_1000_1000/master/1000.jpg?width=700&quality=85&auto=format&fit=max&s=eff264f742166fea73641dbf29a408d4',
      src: 'https://cf-media.sndcdn.com/QrtqnOzwAjXr.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vUXJ0cW5PendBalhyLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MjY4NTAxMTB9fX1dfQ__&Signature=LKRVMlALR3BXxt3Jow9PULvu91gdl0MijKs9FCee2vbdGY86aTQ0wgwl0WaNWiXlWVdyHivdxHN1HcA5Up~vQ6MVSfYLzAzVBT8Qdn-PyOUt7AF9VcDclT423xkNKDao7hdqiQkUeXa1T341VpxnAUC5PCiOlobKe1XvWdJc0LaXSfSZmyjSA445hK8pkLmmgJh5Ct6GKWig0GGfBH3WpDi1EDcH4d70NcYWT3ApFCJYHBa75XocnMeWq-H3HItSG9nIpVgMwNQIt8S-vczusPJ1fCNG2Z-OV2p6OH4UUAdyJPCa9GgqSb3OfeG4hudZOkfMZ1xxT-WUwq-mQ5UfqA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    },
    {
      title: 'Guerra de piñas',
      artist: 'Autor 2',
      image: 'https://i1.wp.com/elfarandi.com/wp-content/uploads/2019/11/618VVjlKb1L._SY355_.jpg?w=354&ssl=1',
      src: 'https://cf-media.sndcdn.com/JYCcDWbKwBEk.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vSllDY0RXYkt3QkVrLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MjY4NTAzNjd9fX1dfQ__&Signature=X6OODFjwN1uH2~dy5bxnJcWrXgcEwRHNeW1A2XRE-pHEUXSKGyNOje6qVYftWx26dryrz2nvowqtfQPZaJmr7xT6fwnpVEie9f0~PFdXCCGpC8qeZBmMQ9Fm8NKJCSEbijxZHFN4Qni-e1eyohodXZWcZx0q4XyVFzF2YlNMjnhpR3yhz75kn4-i1MIqiXvHxCAk2ODhvTLnCDVHmNvlfQvS79NavHupplb9zGHD~CccM8McjjUyvxTwiouIQacerZbqWaQEEiNbP9rIec7j~zYdg5UgAicpjyoJ8GhmXX52HxXhoqj7F~Fp8D3yAX~xcCSfAWKYxYjuzBHYneECKQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    },
    {
      title: 'Las Flores',
      artist: 'Docto',
      image: 'https://hips.hearstapps.com/es.h-cdn.co/hares/images/cultura/ocio/portadas-de-discos-y-de-albums-de-musica-mas-importantes-del-s.xx/the-dark-side-of-the-moon-pink-floyd-1973/4247827-1-esl-ES/the-dark-side-of-the-moon-pink-floyd-1973.jpg',
      src: 'https://cf-media.sndcdn.com/xACiPKqHNbci.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20veEFDaVBLcUhOYmNpLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MjY4NTA1NzR9fX1dfQ__&Signature=aqyd3uRP6yZ3FSluumlX0mlES3C~65wnPJMTOW-CGywtajJLeZ2~FWJ~U5pMTUFGu6hXrvVhAPQw4-e~xO0oSbk~FojQ1jZIQ0Wbn7T3hC20L~f5QcXs3-SNLyMt2aB2lGD4C-cNluDciaIF3n82iTz76oLLGh7Py-6YuT-QEgv~i3kRYs~3cqIfJeFBcotLwWIKJ2mdG6I5-QhGx1RLonpy2Ouu77pSh2v5nCyOap6IfBNeO-MiS1W1rdg4PxOyBkAxY5fLCtgTb5swaG1pvp3LxMiR93RkRXGVeERY9RkhHJ8oLyuETJARFNHB8zwobjwDCkaT7bEQMPJNWOqj4A__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    },
    {
      title: 'Nubes',
      artist: 'Beats',
      image: 'https://los40es00.epimg.net/los40/imagenes/2018/09/26/los40classic/1537954405_106365_1569490515_noticia_normal.jpg',
      src: 'https://cf-media.sndcdn.com/JJYKAvGH79Hw.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vSkpZS0F2R0g3OUh3LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MjY4NTA1OTd9fX1dfQ__&Signature=ddFG~GPZMLzgbZmCHBQjwTYTh~-aRn0eYGXbl0WMqJEHg1qvdZ9CBQ3KfsbW2HLW4-tGhsXj2q75nmkQB-WeaF1YhW1UrrO3S72KsRXzDiMSPTEqC6RUbOebIc78Z-kKq1M~5~cH3FEXfnq87oO2uyK4itmvJt0t-k3XAvZEDUg38X0F8jCeIVSkh50HsQJ-xI7l6fwaecshEZgzzICQoy3Xehw~yOEXPNH24b0b-mS9JA~UFWyqE0-WCeB5l1Hu3~5fCJMTfjx-Lu8D~yPM9mbecP54uWgF13OdOWD0vcfl0qVFeDim-EXeMT7i4MnzgB4WPx-DGs~FEaPToYFgig__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex])

  return (
    <div className="App">
      <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex} songs={songs}
       />
    </div>
  )
}

export default App;
