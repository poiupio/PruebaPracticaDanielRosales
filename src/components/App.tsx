import { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import '../style/App.css';
import Card from './Card';
import Header from './Header';

const App = () => {
  const URL = ' https://api.factmaven.com/xml-to-json/?xml=https://www.bbc.com/mundo/ultimas_noticias/index.xml';
  const [noticesImages, setNoticesImages] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if(localStorage.getItem('favorites')){
      let localStoragedFavorites: any = localStorage.getItem('favorites');
      let splitedStoragedFavorites: string[] = localStoragedFavorites.split('|');
      setFavorites(splitedStoragedFavorites)
    }else{
      setFavorites([]);
    }

    fetch(URL)
      .then((response) => {
        return response.json()
      })
      .then((dataNotices) => {
        let images: string[] = []
        dataNotices.feed.entry.map((a: any) => {
          try {
            return images.push(a['link']['content']['thumbnail'][0]['url'])
          } catch (e) { }
        })
        setNoticesImages(images);
      })
  },[setFavorites]);

  function addFavoritesState(imageUrl: string){
    let favoritesArray = [... favorites ];
    let localStoragedFavorites = `${localStorage.getItem('favorites')}|${imageUrl}`;

    favoritesArray.push(imageUrl);
    localStorage.setItem('favorites', localStoragedFavorites); 
    alert("Agregado a favoritos");

    setFavorites(favoritesArray);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="App">
          <div className="cards-container">
            <Switch>
              <Route path="/favorites">
                {
                  favorites.length > 0 ? 
                    favorites.map((element, key )=> {
                      return <Card imageUrl={element} key={key} haveStar={false} />
                    })
                    :
                    <h1>No hay elementos</h1>
                  }
              </Route>
              <Route path="/">
                {
                  noticesImages.map((element, key) => {
                    return <Card imageUrl={element} key={key} haveStar={true} clickStar={addFavoritesState} />
                  })
                }
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;