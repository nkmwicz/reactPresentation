# Notification
This repository is still in development, but will be available soon. 

Please check back for updates.
# reactPresentation

This repository provides simple react components for creating a basic slide show. The components handle text placement, image placement, etc. programmatically. All you have to do is pass in the text and images. This is best achieved with a state variable of an array of slide objects that can be iterated through with a filter function of a state management system selector (such as a selector in Recoil). There are five primary components: an Introductory `slide`, a split slide (a left box for text and a right box for an image), a centered slice (takes an array of images or an array of text), a split slide with a child (in which a map or some other website-oriented object can be rendered), and a splitembed slide (a split slide with embedded content in the right box such as a YouTube video). The components are designed to be used with a state variable that determines what is displayed on the screen. The state variable is an array of objects. Each object represents a slide. The intro slide is a simple slide with a title and a subtitle. The split slide has a left box for text and a right box for an image. The centered slide has an array of images that are displayed in a row. The child slide is for rendering a map or some other website-oriented object. The slides are rendered in the order that they are in the array. 

# Quick Start
To get started import this package with `npm install react_presentation` or `yarn add react_presentation` and then import the components you want to use. The fastest way to get started is with the `Layout` component. `Layout` includes all the components available and renders them based on a state variable: `slide`. Each `slide` should have a type property that determines what type of slide is rendered. The type property can be `intro`, `split`, `centered`, `child`, or `embed`. The slides are iterable based on an `Arrows` component, which is included in the `Layout` component. See the Arrows component for more information and an example function that can be passed into it.

## Props
### Slide
The slide prop takes the following types: 
```
slide: {
  title: string;
  subTitle?: string;
  byLine?: string;
  type: string; // 'intro', 'split', 'centered', 'child', or 'embed'
  text?: Array<{
    text: string;
    color: string;
    children?: Array<{ text: string; color: string }>;
  }>;
  image?: { image: string; description: string; alt: string };
  images?: Array<{
    image: string;
    description: string;
    flex: number;
    alt: string;
  }>;
  embed?: { url: string; title: string };
};
```
Not all props are needed for each type of slide. See the below SlideState example for more information. All the Layout Component needs to render the slides is the slide prop. The Layout component will handle the positioning of the content and the type of slide to render.

### bgColor
The bgColor prop takes a string that determines the background color of the slide. The default is white. The color can be any css color.
### nextClick
The nextClick prop takes a function that is called when the next button is clicked. The function should increment the index of the slide state variable. The index is used to filter the slide state variable to determine what slide to render. See the Arrows Component for more information and an exemplary function.
### prevClick
The prevClick prop takes a function that is called when the next button is clicked. The function should increment the index of the slide state variable. The index is used to filter the slide state variable to determine what slide to render. See the Arrows Component for more information and an exemplary function.

### h1Class
This prop takes a string that determines the class of the h1 element. It is not necessary to pass in a class here. It provides customizability for the user.
### headerClass <string>
This prop takes a string that determines the class of the header element. It is not necessary to pass in a class here. It provides customizability for the user.
### leftBoxClass <string>
This prop takes a string that determines the class of the left box element. It is not necessary to pass in a class here. It provides customizability for the user.

### rightBoxClass <string>
This prop takes a string that determines the class of the right box element. It is not necessary to pass in a class here. It provides customizability for the user.

### imgBoxClass
### contentBoxClass?: string;
### contentTextClass?: string;
### imageArrayBoxClass?: string;
### bgImage?: React.CSSProperties['backgroundImage']


# SlideState Example

React_Presentation uses a state variable to determine what is displayed on the screen. The state variable is an array of objects. Each object represents a slide. The objects have a type property that determines what type of slide is rendered. The type property can be 'intro', 'split', 'centered', or 'child'. The intro slide is a simple slide with a title and a subtitle. The split slide has a left box for text and a right box for an image. The centered slide has an array of images that are displayed in a row. The child slide is for rendering a map or some other website-oriented object. The slides are rendered in the order that they are in the array. Below is an example of the SlideState:

```
{images:["image_goes_here", "another_image"],
slides: [{
  type: "split",
  text: [{
    text: 'split refers to the type of slide.',
    color: 'black'
    },
    {
      text: 'something else here',
      color: 'lightgrey' // can be any css color
    }
  ],
  image: {
    image: 'image_goes_here',
    description: 'description here'
  }
},
{
  type: "centered",
  images: [{
    image: 'image_goes_here',
    opacity: 0.5, // opacity is optional. It defaults to 1.
    description: 'description for the image'
  },
  {
    image: 'another_image',
    opacity: 1,
    description: 'another description'
  }]
},
{
  type: "centered",
  text: [{
    text: 'First level', 
    color: 'black',
    children: [{
        text: 'Second Level list item', 
        color: 'grey'
      },
      {
        text: 'Second Level list item', 
        color: 'grey'
      }]
    },
    {
      text: 'First level', 
      color: 'black',
      children: [{
          text: 'Second Level list item', 
          color: 'grey'
        },
        {
          text: 'Second Level list item', 
          color: 'grey'
        }
      ]
    }
  ],
},
]}
```
# Changing Slides with Arrows Components
Use the arrows component to set a function that iterates through the state array to cycle the content.

Iterating through the SlideState is easiest with a state variable and a selector. This can be done with a selector function in recoil or with a state function in react. Use the index to filter the SlideState: 
```
currentSlide = slideState.filter(a => a[index]). 
```
In this way, the state of the slide show can be updated by updating index, which is automatically done in the arrows function.

This is a simple solution for integrating web content that does not work well in PowerPoint with the slide show. The components also handle all the positioning of content for the user.

# Arrows Component

The arrow component takes a function as a prop that is called when the arrow is clicked. The function should update the index of the slide show. The arrows work when clicked, but the nextSlide and prevSlide props are also available for use with the arrows on the keyboard. Below is an example of the two functions:
  
  ```
function nextSlide(e) {
  if (e && slideIndex < slideState.length - 1) {
    setSlideIndex(slideIndex + 1);
  }
  if (e && slideIndex === slideState.length - 1) {
    setSlideIndex(0);
  }
}

function prevSlide(e) {
  if (e && slideIndex > 0) {
    setSlideIndex(slideIndex - 1);
  }
  if (e && slideIndex === 0) {
    setSlideIndex(slideState.length - 1);
  }
}
```
`slideIndex` and `setSlideIndex` are the index of the slide show and are react useState variables. You must include in your own code: `const [slideIndex, setSlideIndex] = useState(0)`. `slideState` is the array of slides. It is similarly a state variable you must construct in your code. The function checks to see if the index is at the end of the array and if so, it resets the index to 0. If the index is not at the end of the array, it increments the index by 1. The same logic is used for the prevSlide function, but the index is decremented by 1.

The arrows component also takes a boolean as a prop that determines whether the arrows are visible or not. This is useful for hiding the arrows when you are at the end of the slide show
