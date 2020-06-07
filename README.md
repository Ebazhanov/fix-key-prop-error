### This project demonstrates how to fix the error: Each child in a list should have a unique "key" prop.
```markdown
index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
    in li (at App.js:8)
    in App (at src/index.js:9)
    in StrictMode (at src/index.js:8)
```
> Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

#### **Variant #1** Add `key={num}` the best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:
```javascript
<ul>
    {numbers.map((num) => (
        <li key={num}>{num}</li>    
    ))}
</ul>
```
#### **Variant #2** Add `index` when you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:
```javascript
<ul>
    {numbers.map((num, index) => (
        <li key={index}>{num}</li>    
    ))}
</ul>
```

### Usage: 
- `yarn start`
- demo [https://fix-key-prop-error.netlify.app/](https://fix-key-prop-error.netlify.app/)

### Reference link:
- [react docs lists-and-keys](https://reactjs.org/docs/lists-and-keys.html#keys)
