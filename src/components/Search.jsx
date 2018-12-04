import React from 'react';

const Search = ( { value, onSubmit, onChange } ) => (
  <form onSubmit={ ( e ) => onSubmit( e ) }>
    <input type="text" placeholder="Search subreddit" value={ value } onChange={ ( e ) => onChange( e ) } />
    <button type="submit">Search</button>
  </form>
)

export default Search;