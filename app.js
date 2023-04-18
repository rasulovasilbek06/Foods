const wrapper = document.querySelector("#wrapper")
const breakfast = document.querySelector("#breakfast")
const lunch = document.querySelector("#lunch")
const dinner = document.querySelector("#dinner")
const container = document.querySelectorAll(".container")
const all = document.querySelector("#all")

const breakfastTime = document.querySelectorAll(".breakfast")
const lunchTime = document.querySelectorAll(".lunch")
const dinnerTime = document.querySelectorAll(".dinner")



// for(i=0;i < container.length; i++) {
//     // console.log(card[i])
//     container[i].addEventListener("click" , ()=>{
//         console.log(container[i]);
//         for(i = 0;i < kurrent.length; i++ ) {
//             console.log(kurrent[i]);
//         }
//     })
//     }
    
breakfast.addEventListener("click" , ()=>{
    wrapper.innerHTML =  `
    <div class=card "breakfast">
        <div class="face face1">
          <div class="content">
            <img class="wer" src="img/lavash.jpg" alt="drinc">

          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
              cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
              corporis?</p>
          </div>
        </div>
      </div>

      <div class="card breakfast">
      <div class="face face1">
        <div class="content">
          <img class="wer" src="img/salat.jpg" alt="drinc">

        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
            cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
            corporis?</p>
        </div>
      </div>
    </div>
    `
})



lunch.addEventListener("click" , ()=>{
    wrapper.innerHTML = `
    <div class="card lunch">
    <div class="face face1">
      <div class="content">
        <img class="wer" src="img/hamburger.jpg" alt="">
      </div>
    </div>
    <div class="face face2">
      <div class="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis iusto, qui tempore magni
          quis rerum obcaecati similique id aperiam, fugiat ullam vel ipsum quo numquam doloremque atque illo enim.
        </p>
      </div>
    </div>
  </div>

  <div class="card lunch">
        <div class="face face1">
          <div class="content">
            <img class="wer" src="img/sushi.jpg" alt="">

          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
              cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
              corporis?</p>

          </div>
        </div>
      </div>

      <div class="card lunch">
      <div class="face face1">
        <div class="content">
          <img class="wer" src="img/shashlik.jpg" alt="drinc">

        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
            cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
            corporis?</p>
        </div>
      </div>
    </div>
</div>
    `
})


dinner.addEventListener("click" , ()=>{
    wrapper.innerHTML =  `
    <div class="card dinner">
        <div class="face face1">
          <div class="content">
            <img class="wer" src="img/pizza.jpg" alt="drinc">

          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
              cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
              corporis?</p>

          </div>
        </div>
      </div>

      <div class="card dinner">
        <div class="face face1">
          <div class="content">
            <img class="wer" src="img/stack.jpg" alt="drinc">

          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
              cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
              corporis?</p>
          </div>
        </div>
      </div>
    `
})


all.addEventListener("click" , ()=>{
    wrapper.innerHTML = `
    <div class="card lunch">
        <div class="face face1">
          <div class="content">
            <img class="wer" src="img/hamburger.jpg" alt="">
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis iusto, qui tempore magni
              quis rerum obcaecati similique id aperiam, fugiat ullam vel ipsum quo numquam doloremque atque illo enim.
            </p>
          </div>
        </div>
      </div>


      <div class="card breakfast">
        <div class="face face1">
          <div class="content">
            <img class="wer" src="img/lavash.jpg" alt="drinc">

          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
              cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
              corporis?</p>
          </div>
        </div>
      </div>


      <div class="card dinner">
        <div class="face face1">
          <div class="content">
            <img class="wer" src="img/pizza.jpg" alt="drinc">

          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
              cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
              corporis?</p>

          </div>
        </div>
      </div>


      <div class="card lunch">
        <div class="face face1">
          <div class="content">
            <img class="wer" src="img/sushi.jpg" alt="">

          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
              cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
              corporis?</p>

          </div>
        </div>
      </div>


      <div class="card dinner">
        <div class="face face1">
          <div class="content">
            <img class="wer" src="img/stack.jpg" alt="drinc">

          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
              cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
              corporis?</p>
          </div>
        </div>
      </div>
      
      
      <div class="card breakfast">
        <div class="face face1">
          <div class="content">
            <img class="wer" src="img/salat.jpg" alt="drinc">

          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
              cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
              corporis?</p>
          </div>
        </div>
      </div>
      
      <div class="card lunch">
        <div class="face face1">
          <div class="content">
            <img class="wer" src="img/shashlik.jpg" alt="drinc">

          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
              cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias
              corporis?</p>
          </div>
        </div>
      </div>
    `
})