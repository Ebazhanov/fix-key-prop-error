### This project demonstrates how to fix the error:
> Each child in a list should have a unique "key" prop.
```markdown
index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
    in li (at App.js:8)
    in App (at src/index.js:9)
    in StrictMode (at src/index.js:8)
```

#### **Variant #1** is not good because we can catch duplication 
> add `key={num}`
```javascript
<ul>
    {numbers.map((num) => (
        <li key={num}>{num}</li>    
    ))}
</ul>
```
#### **Variant #2** also not the best but already can be a good solution
> add `index`
```javascript
<ul>
    {numbers.map((num, index) => (
        <li key={index}>{num}</li>    
    ))}
</ul>
```

##### Usage: 
- `yarn start`
