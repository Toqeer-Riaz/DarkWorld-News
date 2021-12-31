import React, { Component } from 'react'
import Loader from './Loader'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 8, 
        mode:'light',
        category:'general'
       
      }

      static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number, 
        mode:PropTypes.string,
        category: PropTypes.string
       
      }
      capitalize = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props){
     super(props);
     this.state={
        articles: [],
        loading: false,
        page:1,
        totalResults:0
     }
     document.title = `DW- ${this.capitalize(this.props.category)}`;
    }
    async componentDidMount(){ 
        let url = `
        https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a05c1f3c82446e59c1dda1ee6c9ca7c&page=1&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({loading:false,articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

     handlePrevClick = async ()=>{
     
        let url = `
        https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a05c1f3c82446e59c1dda1ee6c9ca7c&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })

    }

     handleNextClick = async ()=>{
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))){
            let url = `
            https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a05c1f3c82446e59c1dda1ee6c9ca7c&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false
            })
    }
    }
    fetchMoreData =async()=>{
        this.setState({page:this.state.page+1});
        let url = `
        https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a05c1f3c82446e59c1dda1ee6c9ca7c&page=1&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({loading:false,articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults})

    }


    render() {
        return (
            
                <div className="container my-3">
                    <h2 className="text-center" style={this.props.mode === 'light' ? { color: 'black'} : { color: 'white' }}>Top {this.capitalize(this.props.category)} Headlines</h2>
                    <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Loader/>}
        >
                    <div className="row  my-3">
                    {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <Newsitems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                    </div> 
                })} 
                </div> 
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page >=  Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}
