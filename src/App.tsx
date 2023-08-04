import { useState, useEffect } from 'react';

import fetchData from './helpers/fetchData';
import Article from './components/article/Article';

import './App.scss'
import { URL_TO_GET_POST } from './constants/constants';

function App() {
  const [oneArticle, setOneArticle] = useState(initialData);
  const [isArticleLoading, setIsArticleLoading] = useState(false)
  const [isErrorDuringLoadingArticle, setIsErrorDuringLoadingArticle] = useState(false)

  useEffect(() => {
    setIsArticleLoading(true)

    const fetchArticle = async () => {
      try {
        const fetchedArticle = await fetchData(URL_TO_GET_POST);
        setOneArticle(fetchedArticle.elements);
      } catch {
        setIsErrorDuringLoadingArticle(true)
      }
      setIsArticleLoading(false)
    };

    fetchArticle();
  }, []);

  return (
    <div className="wrapper">
      <div className="onePostWrapper">
        {isErrorDuringLoadingArticle
          ? <div>Something went wrong</div>
          : <Article data={oneArticle} isArticleLoading={isArticleLoading} />}
      </div>
    </div>
  )
}

const initialData = {
  author: {
    elementType: "",
    value: ""
  },
  body: {
    elementType: "",
    values: []
  },
  date: {
    elementType: "",
    value: ""
  },
  heading: {
    elementType: "",
    value: ""
  },
  mainImage: {
    elementType: "",
    value: {
      leadImage: {
        url: ""
      },
      leadImageCaption: {
        value: ''
      }
    }
  }
}

export default App;