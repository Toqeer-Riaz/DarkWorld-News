import React from 'react'
import Loader from './Loader'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";
class News extends React.Component {
    
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
        totalResults:0,
        
     }
     if(!(localStorage.getItem('token'))){
        this.props.history.push("/login");  
        window.location.reload();
     }
    
     document.title = `DW- ${this.capitalize(this.props.category)}`;
    }
    async componentDidMount(){ 
        this.props.setprogress(30);
        let url = `
        https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        this.props.setprogress(50);
        let data = await fetch(url);
        let parsedData = await data.json()
        this.props.setprogress(70);
        this.setState({loading:false,articles: parsedData.articles, totalResults: parsedData.totalResults})
        this.props.setprogress(100);

    }
    
    fetchMoreData =async()=>{
        this.setState({page:this.state.page+1});
        let url = `
        https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({loading:false,articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults})

    }


    render() {
        return (
            
                <div className="container my-3">
                    <h1 className="text-center" style={this.props.mode === 'light' ? { color: 'black'} : { color: 'white' }}>Top {this.capitalize(this.props.category)} Headlines</h1>
                    <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Loader/>}>
                    <div className="row my-3 container">
                    {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <Newsitems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                    </div> 
                })} 
                </div> 
                </InfiniteScroll>
            </div>
        )
    }
}
export default withRouter(News);