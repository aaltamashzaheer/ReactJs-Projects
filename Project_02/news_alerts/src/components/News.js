import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

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
      loading: false,
      page: 1,
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
  handleNextButton = async () => {
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // )
    //{
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=7bc6ddd0cb5a4dfaa590694566477f20&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let ParsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: ParsedData.articles,
    //     loading: false,
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePreviousButton = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=7bc6ddd0cb5a4dfaa590694566477f20&page=${
    //   this.state.page - 1

    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  render() {
    return (
      <div>
        <div className="container my-3"></div>
        <h2 className="text-center">
          Web Times - Today's {this.CaptalizeFirstLetter(this.props.category)}{" "}
          Headlines are:
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
          {!this.state.loading &&
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
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePreviousButton}
          >
            {" "}
            &larr; Previous
          </button>

          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextButton}
          >
            {" "}
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default News;
