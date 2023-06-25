import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  CaptalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,
    };
    document.title = `WebTimes - ${this.CaptalizeFirstLetter(
      this.props.category
    )}`;
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7bc6ddd0cb5a4dfaa590694566477f20&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let ParsedData = await data.json();
    this.setState({
      articles: ParsedData.articles,
      totalResults: ParsedData.totalResults,
      loading: false,
      
    });
  }
  async componentDidMount() {
    this.updateNews();
    
  }
  // handleNextButton = async () => {
  //   // if (
  //   //   !(
  //   //     this.state.page + 1 >
  //   //     Math.ceil(this.state.totalResults / this.props.pageSize)
  //   //   )
  //   // )
  //   //{
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //     this.props.country
  //   //   }&category=${
  //   //     this.props.category
  //   //   }&apiKey=7bc6ddd0cb5a4dfaa590694566477f20&page=${
  //   //     this.state.page + 1
  //   //   }&pageSize=${this.props.pageSize}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let ParsedData = await data.json();
  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: ParsedData.articles,
  //   //     loading: false,
  //   //   });
  //   // }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  // handlePreviousButton = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   this.props.country
  //   // }&category=${
  //   //   this.props.category
  //   // }&apiKey=7bc6ddd0cb5a4dfaa590694566477f20&page=${
  //   //   this.state.page - 1

  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };


fetchMoreData= async () =>{
  this.setState({page: this.state.page + 1});
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7bc6ddd0cb5a4dfaa590694566477f20&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let ParsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(ParsedData.articles),
      totalResults: ParsedData.totalResults,
      
      
    });
}

  render() {
    return (
      <>
        <h2 className="text-center">
          Web Times - Today's {this.CaptalizeFirstLetter(this.props.category)}{" "}
          Headlines are:
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll 
        dataLength={this.state.articles.length}
        next= {this.fetchMoreData}
        hasMore= {this.state.articles.length !== this.state.totalResults}
        loader={<Spinner/>}>

        < div className="container">
        <div className="row my-3">
          {
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            </div>
        </div>
        
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
