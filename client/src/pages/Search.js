import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    author: "",
    books: [],
    term: "",
    title: "",
    saved: false,
    synopsis: "",
    previewLink: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = (data = []) => {
    // if(this.state.books){
        console.log(data);
        let foundBooks = data.map(book => {
          let validAuthor = "NA";
            if(book.volumeInfo.authors && book.volumeInfo.authors[0]){
              validAuthor = book.volumeInfo.authors[0];
            }
            return {
                title: book.volumeInfo.title,
                author: validAuthor,
                synopsis: book.volumeInfo.description,
                previewLink: book.volumeInfo.previewLink
            }
        });
        this.setState({books: foundBooks, term: ""});
    // }
  };

  refreshList = i => {

  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSavedSubmit = i => {
    console.log("save i=" + i);
    console.log(this.state.books[i] )
      API.saveBook({
        title: this.state.books[i].title,
        author: this.state.books[i].author,
        previewLink: this.state.books[i].previewLink,
        synopsis: this.state.books[i].synopsis
      })
        .then(res => {
            const tempBooks = this.state.books;
            tempBooks[i].saved = true;
            this.setState({ books: tempBooks});
        })
        .catch(err => console.log(err));
    
  };

  handleSearch = event => {
    event.preventDefault();
    if (this.state.term) {
      API.searchBook(this.state.term)
        .then(res => this.loadBooks(res.data.items))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container >
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Find a good book to read!</h1>
            </Jumbotron>
            <form>
                <div className="row">
                    <div className="col-md-11">
                        <Input
                            value={this.state.term}
                            onChange={this.handleInputChange}
                            name="term"
                            placeholder="Search for a book"
                        />
                    </div>
                    <div className="col-md-1">
                        <FormBtn
                            disabled={!(this.state.term)}
                            onClick={this.handleSearch}
                        >
                            Search
                        </FormBtn>
                    </div>
                </div>
            </form>
          </Col>
         
        </Row>
        <Row>
            <Col size="md-12">
            {this.state.books.length ? (
            <List>
                {this.state.books.map((book, i) => (
                <ListItem key={i}>
                    <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
                    <strong>
                        {book.title} by {book.author}
                    </strong>
                    </a>
                    {!(this.state.books[i].saved) ? (
                        <SaveBtn onClick={() => this.handleSavedSubmit(i)} />
                    ) : (
                    <mark style={{"float": "right"}}>Added to Saved List</mark>
                    )}
                </ListItem>
                ))}
            </List>
            ) : (
            <h3>No Results to Display</h3>
            )}
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
