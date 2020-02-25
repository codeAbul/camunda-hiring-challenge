import React, { Fragment, useEffect, useRef } from "react";
import { autorun } from "mobx";
import { observer, useLocalStore } from "mobx-react-lite";
import styles from "./FrameworksPage.module.scss";
import items from "../../utils/items";
import ResultItem from "../../components/ResultItem";

const FrameworksPage = observer(() => {
  // We need a ref to input field to manage focus
  const inputRef = useRef(null);
  const initializeStore = () => ({
    searchTerm: "",
    get matchingItems() {
      if (store.searchTerm) {
        // Include only items that contain the searchterm
        // either in their title or description
        // Note that the pattern is case-insenstive
        const pattern = new RegExp(store.searchTerm, "i");
        return items.filter(
          ({ title, description }) =>
            pattern.test(title) | pattern.test(description)
        );
      }
      return items;
    },
    get noOfResults() {
      return store.matchingItems.length;
    },
    input(value) {
      store.searchTerm = value;
    }
  });
  const store = useLocalStore(initializeStore);

  // Send focus to the search bar
  // once the component mounts

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //Update the document title as search term changes

  useEffect(
    () =>
      autorun(() => {
        if (store.searchTerm) {
          document.title = `${store.noOfResults} search results for ${
            store.searchTerm
          }`;
        } else {
          // when the search term is empty
          document.title = "Search for frameworks";
        }
      }),
    []
  );

  const renderAllMatchingItems = () => {
    return store.matchingItems.map(item => (
      <ResultItem item={item} key={item.title} />
    ));
  };

  return (
    <Fragment>
      <form
        role="search"
        className={styles["searchBar"]}
        /* Prevent default behavior on form submission*/
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <input
          type="search"
          id="search-input"
          aria-label="Search for frameworks"
          aria-controls="results"
          value={store.searchTerm}
          placeholder="Search for frameworks"
          ref={inputRef}
          onChange={event => store.input(event.target.value)}
        />
        <button type="button">Search</button>
      </form>
      {/*aria-live region that announces 
       both node additions and removals*/}
      <article
        aria-label="Search results"
        id="results"
        aria-live="polite"
        aria-relevant="additions removals"
        className={styles["searchResults"]}
      >
        {store.matchingItems.length === 0 ? (
          <p className={styles["noResults"]}> No results found</p>
        ) : (
          renderAllMatchingItems()
        )}
      </article>
    </Fragment>
  );
});

export default FrameworksPage;
