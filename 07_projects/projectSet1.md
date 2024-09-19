# Project Related To DOM

# Project Link
[Click](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## Project 1
```javascript
```

## Project 2
```javascript
// To Calculate BMI ----
 const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value)
// if we write above the event the value is set to null
// this usecase will give you empty value

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a vaild height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a vaild weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result...
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span><p>UnderWeight</p>`;
    } else if (18.6 <= bmi > 24.9) {
      results.innerHTML = `<span>${bmi}</span><p>NormalRange</p>`;
    } else {
      results.innerHTML = `<span>${bmi}</span><p>OverWeight</p>`;
    }
  }
});


```