import styled from 'styled-components';
import NewsItem from './NewsItem';
import { useState,useEffect } from 'react';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsItemBolck = styled.div`
bax-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin 0 auto;
margin-top: 2rem;
@media screen and (max-width : 768px){
    width: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
}
`;

// const sampleArticle={
//     title: '제목',
//     description : '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/168',
// };

const NewsList = ({category}) =>{
        // const [articles ,setArticles]=useState(null);
        // const [loading,setLoading]= useState(false);
        // <NewsItemBolck>
        //     <NewsItem article={sampleArticle} />
        //     <NewsItem article={sampleArticle} />
        //     <NewsItem article={sampleArticle} />
        //     <NewsItem article={sampleArticle} />
        //     <NewsItem article={sampleArticle} />
        //     <NewsItem article={sampleArticle} />
        // </NewsItemBolck>
        
        // useEffect(()=>{
        //     const fetchData = async() =>{
        //         setLoading(true);
        //         try{
        //             const query = category === 'all' ? '': `&category=${category}`;
        //             const response =await axios.get(
        //                 `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=840bc9b6d02945949c80f51c224d178d`,
        //             );
        //             setArticles(response.data.articles);
        //         } catch(e){
        //             console.log(e);
        //         }
        //         setLoading(false);
        //     };
        //     fetchData();
        // },[category]);

       const[loading ,response,error]=usePromise(()=>{
           const query = category ==='all' ? '':`&category=${category}`;
           return axios.get(
               `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=840bc9b6d02945949c80f51c224d178d`,
           );
       },[category]);

        //대기 중 일때
        if (loading){
            return <NewsItemBolck>대기 중...</NewsItemBolck>
        }

        if (!response){
            return null;
        }

        if (error){
            return <NewsItemBolck>에러 발생!</NewsItemBolck>;
        }

        // if(!articles){
        //     return null;
        // }

        //article 값이  유효할때
        const {articles}=response.data;
        return(
            <NewsItemBolck>
                {articles.map(article =>(
                    <NewsItem key={article.url} article={article} />
                ))}
            </NewsItemBolck>
        );


};

export default NewsList;