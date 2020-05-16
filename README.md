# How to install
npm i react-as-component

# How to use
```jsx
import AsComponent from 'react-as-component';

function MyDivFromAsComponent (){
  return <AsComponent as={"div"}>...</AsComponent>;
}
```
## Example

Example button, which can be link
```jsx
import AsComponent from 'react-as-component';

function MyButton({ asLink = false,  value = "" }) {
  return <AsComponent as={asLink ? 'a' : 'button'}>{value}</AsComponent>;
}
```
