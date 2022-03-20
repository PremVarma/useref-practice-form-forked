# FE assignment Forms

​
\
​

## Design:

​
​
![](/api/attachments.redirect?id=77a3c2f1-c7ac-4dbb-8130-58dad47a0f56)
​

## Basic Form Code to Start With

​

```typescript
function ReactForm() {
  const handleSubmit = (e) => {};
  const handleReset = () => {};
  const handleSearch = (e) => {
    // log your value here
  };
  const debounce = (callback, delay) => {
    // add your debounce logic here
  };
  const debouncedSearch = debounce(handleSearch, 1000);
  return (
    <React.Fragment>
      <div>
        <p>part 1</p>
        <label>
          Name:
          <input placeholder="name" type="text" />
        </label>
        <label>
          Email:
          <input placeholder="email" type="text" />
        </label>
        <label>
          Password:
          <input placeholder="password" type="text" />
        </label>
        <hr />
        <button>Focus Name Input</button>
        <button>Focus Email Input</button>
        <button>Focus Password Input</button>
        <hr />
        <button>Submit</button>
        <button>Reset</button>
      </div>
      <div>
        <hr />
        <p>part 2</p>
        <label>
          Search:
          <input
            placeholder="search with debounce"
            type="text"
            onChange={debouncedSearch}
          />
        </label>
      </div>
    </React.Fragment>
  );
}
```

​

## Part 1:

​
You're given the UI for a basic form. Your task is to hook it all up using refs. The `Focus X Input` buttons should focus on that specific input field. The `Submit` button should log `name`, `email`, and `password` to the console. The `Reset` button should result in all of the input fields to empty strings. \n  
​

## Part 2:

​
Develop a search tag with debounce functionality. Debouncing means that a function will not be called again until a certain amount of time has passed. So here the search method is called repeatedly for every keystroke instead, it should be delayed by the time period mentioned in the debounce method (add some console log to validate this no need to use any API mock). It should avoid memory leaks and the solution provided should be scalable. For API integration create an account in `https://developers.giphy.com/dashboard/` Once you have got your API token kindly refer to the search API docs page
​
\n eg: API endpoint
​
`https://api.giphy.com/v1/gifs/search?api_key=< your API token >&q=<search value>` \n
​
Display the results below in a 4x4 grid box
​
​
\
**FURTHER INSTRUCTIONS**
​

1.  The assignment should be done either react in web or using react-native app
    ​
2.  The code should be submitted in git platform such as ( github, bitbucket) as a public repo
    ​
    3)The code should be compilable, Do not commit the node modules in git.
    ​
    4)The code should be testable, Adding unit test will extra fetch points
    ​
    5)Convert this assignment to typescript well fetch more points as well
    ​
    6)The HTTP library will be your choice of yours for debouncing logic
    ​
    ​

​
​
\
​
\
​
\
​
\
