To solve this, you can use a ref to check if the component is still mounted before performing any cleanup actions:

```javascript
import React, { useEffect, useRef, useState } from 'react';

const MyComponent = () => {
  const [someState, setSomeState] = useState(null);
  const mounted = useRef(true);

  useEffect(() => {
    const subscription = someDataStream.subscribe(data => {
      if (mounted.current) {
        setSomeState(data);
      }
    });

    return () => {
      mounted.current = false; // Set mounted to false before cleanup
      subscription.unsubscribe();
    };
  }, []);

  return (
    // ... JSX ...
  );
};

export default MyComponent;
```

By setting `mounted.current` to `false` before the cleanup, we prevent the cleanup function from executing if the component is unmounted.