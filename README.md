# testcafe-issues
Demo for testcafe bugs

Tests are failing with 

```
Function that specifies a selector can only return a DOM node, an array of nodes, NodeList, HTMLCollection, null or undefined.
      Use ClientFunction to return other values.
```

when the selector uses `div` tag with `withText` or `withAttribute`


