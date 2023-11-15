console.log('App is connected');

class Person {
    constructor(name, wardrobe, transaction, portfolio, garage, wallet) {
        this.name = name
        this.wardrobe = wardrobe
        this.transaction = transaction
        this.portfolio = portfolio
        this.garage = garage
        this.wallet = wallet
    }
    giveItem(target, item) {
        if (this.wardrobe.includes(item)) {
          target.wardrobe.push(item);
          this.wardrobe.splice(portfolio.indexOf(item), 1);
        } else if (this.portfolio.includes(item)) {
          target.portfolio.push(item);
          this.portfolio.splice(portfolio.indexOf(item), 1);
        } else if (this.garage.includes(item)) {
          target.garage.push(item);
          this.garage.splice(garage.indexOf(item), 1);
        }
      }
      giveCash(target, cash) {
        target.wallet += cash;
        this.wallet -= cash;
      }
      render() {
        ${this.name}.el.innerHTML = `
        <h1>${this.name} Status</h1>
        <h3>${this.name} works as a ${this.career.name} </h3>
        <h3> Each week ${this.name} takes home $${this.career.income}</h3>
        <h3> Currently ${this.name} has $${this.wallet} in their bank account</h3>
        <div> <h2>Wardrobe Contains: </h2>
        <ul>${this.wardrobe.map((item => {
                return `<li>
                ${this.name} has a ${item.color}
                ${item.name} made by ${item.designer}
                that is worth ${item.price} in size
                ${item.size}. Sell item for ${item.price}? <button class="sell__wardrobe">Sell me!"</button><button class="sell__vehicle">Sell me!"</button> <button class="give__item">Give me away?</button>
                </li>`
            })).join('')
        }</ul>
        </div>
        <div>
        <h2>Real Estate portfolio contains:</h2>
        <ul>${
            this.portfolio.map((item => {
                return `<li>
                ${this.name} has a ${item.name} worth $${item.price}. Sell item for ${item.price}? <button class="sell__home">Sell me!"</button><button class="sell__vehicle">Sell me!"</button> <button class="give__item">Give me away?</button>
                </li>`
            })).join('')
        }
        </ul>
        </div>
        <div>
        <h2>Garage contains:</h2>
        <ul>${
            this.garage.map((car => {
                return `<li>
                ${this.name} has a ${car.year} ${car.make} ${car.model} worth $${car.price}. Sell item for ${car.price}? <button class="sell__vehicle">Sell me!"</button> <button class="give__item">Give me away?</button>
                </li>`
            })).join('')
        }
        </ul>
        </div>
    `;
    }
}

const barbie = new Person("Barbie", [], [], [], [], 0)
const ken = new Person("Ken", [], [], [], [], 0)

// // Protagonist of our application
// const barbie = {
//     name: 'Barbie',
//     wardrobe: [],
//     transaction: [],
//     portfolio: [],
//     garage: [],
//     wallet: 0
// }

class Career {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

const careerDescriptions = [
    {
        name: 'lawyer',
        description: 'works as an attorney of a high end law firm'
    },
    {
        name: 'software-engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'influencer',
        description: 'talk about stuff on social media and people say wow and i get paid'
    },
    {
        name: 'stripper',
        description: 'well paid entertainment'
    },
    {
        name: 'UX-Designer',
        description: 'Software developers best friend or enemy'
    }
]
const careerIncomes = [
 8501,
 18501,
 2850,
 3850,
 4850,
 5850,
 6850,
 500
];
const careers = [];


const randomization = (limit) => {
 return Math.floor(Math.random() * limit)
}


for (let i = 10 ; i > 0; i--){
 const job = careerDescriptions[randomization(careerDescriptions.length)]
 const income = careerIncomes[randomization(careerIncomes.length)];
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}


barbie.career = careers[randomization(careers.length)]
ken.career = careers[randomization(careers.length)]


const formEl = document.querySelector('form');
const submitBtn = document.getElementById('submit-button');
let currentCareer;

const renderFormOptions = () => {
    formEl.innerHTML = `
    <label for="career-select">Choose a career:</label>
    <select name="careers" id="career-select">
      <option value="">--Choose a new Career!--</option>
      ${careers.map(career => {
      return (
        `<option class="option" value="${career.name}" id="${career.id}">${career.name}</option>`
      )
    }).join('')}
    </select>
    `

    // const getPaidBtns = document.querySelectorAll('div.option ~ button')



   submitBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        let currentIdx;
        currentCareer = careers.find((item, idx) => {
          currentIdx = idx
          return item.id === evt.target.id
        })
        careers.splice(currentIdx, 1)
        renderFormOptions()
        // console.log(`${currentCareer.income}`)
      })
    }

  renderFormOptions()

  const options = document.querySelectorAll('.option')
  const display = document.querySelector('.career__display')
//   const input = document.querySelector('input')

  options.forEach(option => {
    option.addEventListener('click', (evt) => {
      currentCareer = careers.find(item => {
        return item.id === evt.target.id
      })
      display.innerHTML = `${currentCareer} is the career of choice and they make ${currentCareer.income} per week`
    })
  })

class Clothing {
    constructor(name, designer, color, type, size, price){
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

class RealEstate {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Vehicle {
    constructor(year, make, model, price){
        this.year = year;
        this.make = make;
        this.model = model;
        this.price = price;
    }
}

const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470 )
const chanel = new Clothing('Chanel bag', 'Chanel', 'black', 'bag', 'med', 35000 )
const redBottoms = new Clothing('Red Bottoms', 'Christian Loboutin', 'black', 'shoes', '6', 3000)
const house = new RealEstate('Malibu Condo', 50000)
const tesla = new Vehicle(2024, 'Tesla', 'Model S', 50000)


// Game Screen

barbie.el = document.getElementById('barbie');
barbie.el2 = document.getElementById('barbie2')
ken.el = document.getElementById('ken');
ken.el2 = document.getElementById('ken2');


barbie.render();
ken.render();

const sellBtnsProperty = document.querySelectorAll('.sell__home');

 sellBtnsProperty.forEach((button) => {
    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        let currentIdx;
        homeItem = barbie.portfolio.find((item, idx) => {
            currentIdx = idx;
            return item.id === evt.target.id;
        })
        barbie.wallet += currentIdx.price;
        barbie.portfolio.splice(currentIdx, 1);
        barbie.render()
    })
 })

const sellBtnsGarage = document.querySelectorAll('.sell__vehicle');

 sellBtnsGarage.forEach((button) => {
    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        let currentIdx;
        garageItem = barbie.garage.find((item, idx) => {
            currentIdx = idx;
            return item.id === evt.target.id;
        })
        barbie.wallet += currentIdx.price;
        barbie.garage.splice(currentIdx, 1);
        barbie.render()
    })
 })

 const sellBtnsWardrobe = document.querySelectorAll('.sell__wardrobe');

 sellBtnsWardrobe.forEach((button) => {
    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        let currentIdx;
        wardrobeItem = barbie.wardrobe.find((item, idx) => {
            currentIdx = idx;
            return item.id === evt.target.id;
        })
        barbie.wallet += currentIdx.price;
        barbie.wardrobe.splice(currentIdx, 1);
        barbie.render()
    })
 })



const birkinButton = document.getElementById('birkin');

birkinButton.addEventListener('click', ()=>{
    if(barbie.wallet >= birkin.price){
        barbie.wardrobe.push(birkin);
        barbie.wallet -= birkin.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const workButton = document.getElementById('work');

workButton.addEventListener('click', ()=>{
    barbie.wallet += barbie.career.income; // WE updated the wllet that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser

    if(barbie.portfolio.length > 0){
        barbie.wallet += barbie.portfolio.length * 500
    }

    if(barbie.garage.length > 0){
        barbie.wallet -= barbie.garage.length * 150
    }
    barbie.render();
})

const redBottomButton = document.getElementById('red-bottoms');

redBottomButton.addEventListener('click' , () => {
    if(barbie.wallet >= redBottoms.price){
        barbie.wardrobe.push(redBottoms);
        barbie.wallet -= redBottoms.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const chanelButton = document.getElementById('chanel');

chanelButton.addEventListener('click' , () => {
    if(barbie.wallet >= chanel.price){
        barbie.wardrobe.push(chanel);
        barbie.wallet -= chanel.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

const houseButton = document.getElementById('house');

houseButton.addEventListener('click', () => {
    if(barbie.wallet >= house.price){
        barbie.portfolio.push(house);
        barbie.wallet -= house.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

const teslaButton = document.getElementById('buyTesla');

teslaButton.addEventListener('click', () => {
    if(barbie.wallet >= tesla.price){
        barbie.garage.push(tesla);
        barbie.wallet -= tesla.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

const sellButton = document.getElementById('sell');

sellButton.addEventListener('click', () => {
    if(barbie.wardrobe.length === 0) {
        alert("you don't have anything to sell.")
    } else {
        let soldPrice = Math.floor((.7 + Math.random() * 1.3) * barbie.wardrobe[0].price);
        barbie.wallet += soldPrice
        barbie.render2 = () => {
            barbie.el2.innerHTML = `
            <h1>Transaction History: </h1>
            <h2>${barbie.name} has sold ${barbie.wardrobe[0].name} for $${soldPrice}</h2>`
        }
        barbie.render2();
        barbie.wardrobe.shift();
        barbie.render();
    }
})
