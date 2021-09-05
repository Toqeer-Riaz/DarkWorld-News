import React, { Component } from 'react'
import Loader from './Loader';
import Newsitems from './Newsitems'

export default class News extends Component {
    constructor(){
     super();
     this.state={
        articles: [],
        loading: false,
        page:1,
        totalResults:0
     }
    }
    async componentDidMount(){ 
        let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8a05c1f3c82446e59c1dda1ee6c9ca7c&page=1&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

     handlePrevClick = async ()=>{
     
        let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8a05c1f3c82446e59c1dda1ee6c9ca7c&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }

     handleNextClick = async ()=>{
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))){
            let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8a05c1f3c82446e59c1dda1ee6c9ca7c&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
    }
    }


    render() {
        return (
            
                <div className="container my-3">
                    <h1 className="text-center" style={this.props.mode === 'light' ? { color: 'black'} : { color: 'white' }}>DW-News</h1>
                    <div className="row  my-3">
                    {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <Newsitems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div> 
                })} 
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
