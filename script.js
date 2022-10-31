// let x =10;

// let y = 5;

// let result = x + y;

// // alert(result)

function calc(){

    let num1 = prompt ('Enter frist number');

    let num2 = prompt ('Enter second number');

    let result = Number(num1) + Number(num2);

    document.getElementById('hw').innerHTML = `${num1} + ${num2} = ${result}`;

    // alert (`${num1} + ${num2} = ${result}`);

    }

    function o_o() {

        let number1 = document.getElementById('_num1').value;

        let number2 = document.getElementById('_num2').value;

        let result = Number(number1) + Number(number2);

        document.getElementById('hw3').innerHTML = `${number1} + ${number2} = ${result}`;  
    }

    function _calculate(x,y){
        let result = Number(x) + Number(y);
        document.getElementById('hw3').innerHTML = `${x} + ${y} = ${result}`;
    }

    function check() {
        let number1 = Number(document.getElementById('num1').value);
        let number2 = Number(document.getElementById('num2').value);

         if(number1 > number2  ){
          document.getElementById('_special').innerHTML = `${number1} Is Greater Than ${number2} 🔼`;
         }

         else if(number1 == number2) {
          document.getElementById('_special').innerHTML = `${number1} Is Equal To ${number2} 🤝`;
         }

         else{
            document.getElementById('_special').innerHTML = `${number1} Is Less Than ${number2} 🔽`;
         }
    }

    let x = 100000000;

    let y = 5;

    let a_r_r_a_y = ['text', 'almog', x, y];

    //מדפיס את כל המערך
    console.log(a_r_r_a_y);

    //מדפיס את האובייקט הראשון במערך
    console.log(a_r_r_a_y[0]);


    // להשיג את האובייקט האחרון במערך. בכך שאני ניגש למיקום על ידי שימוש בגודל המערך שהוא שווה כרגע ל4 ופחות אחד
    console.log(a_r_r_a_y[a_r_r_a_y.length - 1]);



    // 1

    // let array = ['text', 'almog', x, y, 'popo', a, b, g];

    console.log(a_r_r_a_y[3]);

    // 2
    console.log(a_r_r_a_y.length);

    console.log(a_r_r_a_y[a_r_r_a_y.length - 1]);



    let _movies = [
        {
            title:'The Dark Knight',
            rating: 9.5,
            year: 2008,
            imageUrl: 'https://m.media-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg',
            linkUrl: 'https://www.imdb.com/title/tt0468569/',
            rateUrl: 'https://www.imdb.com/title/tt0468569/ratings'

        },
        {
            title:'The Dark Knight Rises',
            rating: 8.4,
            year: 2012,
            imageUrl: 'https://images.moviesanywhere.com/137de7df53b44414af057f89c0647b0b/38dd4c91-6758-46bd-969b-6acf010a249b.jpg',
            linkUrl: 'https://www.imdb.com/title/tt1345836/',
            rateUrl: 'https://www.imdb.com/title/tt1345836/ratings'
        },
        {
            title:'Superman Man of Steel',
            rating: 7.1,
            year: 2013,
            imageUrl: 'https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
            linkUrl: 'https://www.imdb.com/title/tt0770828/',
            rateUrl:'https://www.imdb.com/title/tt0770828/ratings'
        },
        {
            title:'Spider-Man: No Way Home',
            rating: 8.3,
            year: 2021,
            imageUrl: 'https://rroyreport.files.wordpress.com/2021/12/spider-man_no_way_home_jp_poster.jpg',
            linkUrl: 'https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_2',
            rateUrl:'https://www.imdb.com/title/tt10872600/ratings'
        },
        {
            title:'Thor: Love and Thunder',
            rating: 6.7,
            year: 2022,
            imageUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/bigsalad_genavailposter_pay1_presunrise_v3_lg.jpg',
            linkUrl: 'https://www.imdb.com/title/tt10648342/?ref_=tt_mv_desc',
            rateUrl:'https://www.imdb.com/title/tt10648342/ratings'
        },
        {
            title:'Iron Man 2',
            rating: 6.9,
            year: 2010,
            imageUrl: 'https://m.media-amazon.com/images/I/91UgoL1eiUL._SL1500_.jpg',
            linkUrl: 'https://www.imdb.com/title/tt1228705/?ref_=nv_sr_srsg_6',
            rateUrl:'https://www.imdb.com/title/tt1228705/ratings/?ref_=tt_ov_rt'
        },
    ];


    function displayImages(){
        for (let i = 0; i < _movies.length; i++)
        {
          document.getElementById('images').innerHTML += `
          <div class="col">
              <div class="card shadow-sm">
              <img class="card-img" src="${_movies[i].imageUrl}" alt="${_movies[i].title}">
                <div class="card-body">
                  <h6 class="card-text">Movie Name: </h6>${_movies[i].title}
                  <h6 class="card-text">Rating: </h6>${_movies[i].rating}
                  <h6 class="card-text">Year: </h6>${_movies[i].year}
                  <div class="d-flex justify-content-between align-items-center">
                   <div class="btn-group">
                    <a class="btn btn-sm btn-secondary" href="${_movies[i].linkUrl}" target="_blank">View Movie</a>
                    <a class="btn btn-sm btn-outline-secondary" href="${_movies[i].rateUrl}" target="_blank">Rate</a>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          `
        }
    }

    window.onload = function() {
        displayImages();
      };

      function sendEmail() {
        let firstName = document.querySelector('[name="firstName"]').value;
        let lastName = document.querySelector('[name="lastName"]').value;
        let email = document.querySelector('[name="email"]').value;
        let message = document.querySelector('[name="messageContent"]').value;
        let date = new Date();

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "איימיל שלך מהאתר",
            Password: "סיסמה שלך מהאתר",
            From: "איימיל שלך מהאתר",
            To: "איימיל שלך מהאתר",
            Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
            Body: `
        <b>הודעה מאת:</b> ${firstName} ${lastName}
        <br>
        <br>
        <b>כתובת איימיל של השולח:</b> ${email}
        <br>
        <br>
        <b>נשלח בתאריך:</b> ${date}
        <br>
        <br>
        <b>תוכן ההודעה:</b>
        <br>
        ${message}`
        });

        document.querySelector('#sent-success').style = 'display:block';

    }













    // console.log(a_r_r_a_y);

    // //index => a_r_r_a_y[index]
    // console.log(a_r_r_a_y[0]); // text 

    // console.log(a_r_r_a_y[1]); // your name 

    // console.log(a_r_r_a_y[2]); // value of x 

    // console.log(a_r_r_a_y[3]); // value of y 

    // console.log(a_r_r_a_y.length); 
    //   //a_r_r_a_y.length = 4 asking if 4 is greater than 3. array length is bigger then 3 so to statment will occur

    //   //true
    //   if(a_r_r_a_y.length >= 4){
    //     console.log(`array has more than 3 items. \narray size is: ${a_r_r_a_y.length}`);
    // }

    // JS

    // function check() {
    //   let number1 = Number(document.getElementById('num1').value);
    //   let number2 = Number(document.getElementById('num2').value);

    //    if(number1 > number2  ){
    //     document.getElementById('_special').innerHTML = `${number1} Is Greater Than ${number2} 🔼`;
    //    }
    //    else if(number1 < number2) {
    //       document.getElementById('_special').innerHTML = `${number1} Is Less Than ${number2} 🔽`;
    //    }

    //    else if(number1 == number2) {
    //     document.getElementById('_special').innerHTML = `${number1} Is Equal To ${number2} 🤝`;
    //    }
    // }