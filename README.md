# mrcandie react rating

This is a simple react star rating system.

## Get started here

install library by running

`npm i mrcandie-react-rating`

import component into your project

`import { Rating } from 'mrcandie-react-rating'`

render Rating component in your project

```
export default function app(){
    return <Rating />
}
```

Rating component accept some props:

### size

to control the size of the star icons

```
export default function app(){
    return <Rating size='18px' />
}
```

### readonly

to make the star icons react to mouse hover, default is true

```
export default function app(){
    return <Rating readonly={false} size='18px' />
}

```

### color

to change the color of the star icons, default is #f5eb3b

```

export default function app(){
return <Rating size='18px' color='#f5eb3b' />
}

```

### hoverRating, setHoverRating

to add hover effect to the icons

```

export default function app(){
const [hoverState, setHoverState] = React.useState(0)
return <Rating size='18px' color='#f5eb3b' hoverRating={hoverRating} setHoverRating={setHoverRating} />
}

```

### onRating, rating

onRating function is called when the star icon is clicked, it takes a setState function, rating returns the value ranging from 1-5, default is 0

```

export default function app(){
const [rating, setRating] = React.useState(0)
return <Rating
            rating={rating}
            onRating={setRating}
            size='18px'
            color='#f5eb3b'
            hoverRating={hoverRating}
            setHoverRating={setHoverRating}
          />
}

```

[see source code here ](https://github.com/candietechnologies/mrcandie-react-rating)

```

```
