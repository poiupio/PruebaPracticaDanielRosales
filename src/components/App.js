import React, { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import Card from './Card'
import Header from './Header'

const App = () => {
  const URL = ' https://api.factmaven.com/xml-to-json/?xml=https://www.bbc.com/mundo/ultimas_noticias/index.xml';
  const [noticesImages, setNoticesImages] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('favorites')){
      setFavorites(localStorage.getItem('favorites').split('|'))
    }else{
      setFavorites([]);
    }

    fetch(URL)
      .then((response) => {
        return response.json()
      })
      .then((dataNotices) => {
        let images = []
        dataNotices.feed.entry.map(a => {
          try {
            images.push(a['link']['content']['thumbnail'][0]['url'])
          } catch (e) { }
        })
        setNoticesImages(images);
      })
  },[setFavorites]);

  function addFavoritesState(imageUrl){
    let favoritesArray = [... favorites ];
    favoritesArray.push(imageUrl);
    setFavorites(favoritesArray);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="App d-flex justify-content-center">
          <div className="cards-container d-flex felx-row flex-wrap">
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