import React, { useEffect, useState } from "react";
import Books from "../data.json";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [range, setRange] = useState(50);

  // to render the data once
  useEffect(() => {
    setBooks(Books.eBooks);
  }, []);

  // to show only matching results
  useEffect(() => {
    setBooks(Books.eBooks);
    if (search !== "") {
      const arr = Books.eBooks.filter((item) => {
        return (
          item.language.toLowerCase().includes(`${search.toLowerCase()}`) &&
          item.price <= range
        );
      });
      setBooks(arr);
    }

    // show all books
    else {
      const arr = Books.eBooks.filter((item) => item.price < range);
      setBooks(arr);
    }

    books.forEach((e) => {
      console.log(e.price < range);
    });

    // only apply this if the search changed
  }, [search, range]);

  //Cards system
  const card = books.map((book, i) => (
    <div className="card col-md-3 m-5 p-auto" key={i}>
      <div className="card-body">
        <h4 className="card-title">Language : {book.language}</h4>
        <h5 className="card-title">Edition : {book.edition}</h5>
        <p className="card-text">Price : {book.price}</p>
      </div>
    </div>
  ));

  return (
    <>
      <form class="d-flex flex-column w-50 mx-auto" role="search">
        <input
          class="form-control mx-auto mb-5"
          style={{ marginTop: "20px" }}
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />

        <label class="form-label" for="customRange2">
          Filter by price range
        </label>
        <div class="range d-flex">
          <h5 className="me-2"> 10 </h5>{" "}
          <input
            type="range"
            class="form-range"
            min="10"
            max="50"
            step="1"
            id="customRange2"
            onChange={(e) => setRange(e.target.value)}
          />{" "}
          <h5 className="ms-2">{range}</h5>
        </div>
      </form>
      <div className="row d-flex justify-content-center">{card}</div>
    </>
  );
}
