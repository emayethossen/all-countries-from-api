const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesHTML = countries.map(country => getCountryHTML(country))
    const container=document.getElementById('countries')
    container.innerHTML=countriesHTML.join(' ')
}

const getCountryHTML = country => {
    console.log(country)
    const {name, flags, area, region}= country
    return `
    <div class="country">
<h2>${name.common}</h2>
<div class="image">
<img src="${flags.png}" />
</div>
<h3>Area: ${area}</h3>
<h3>Continet: ${region}</h3>
    </div>
    `
}

loadCountries()